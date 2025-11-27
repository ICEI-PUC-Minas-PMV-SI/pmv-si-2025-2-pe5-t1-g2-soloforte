import { createContext, useState, useCallback } from 'react'

export const AppContext = createContext()

// Usar configuração dinâmica se disponível, senão usar env do build, senão fallback
const getApiUrl = () => {
  // 1. Verificar se existe configuração dinâmica (arquivo config.js)
  if (typeof window !== 'undefined' && window.__APP_CONFIG__?.API_URL) {
    console.log('✅ Usando API_URL do config.js:', window.__APP_CONFIG__.API_URL)
    return window.__APP_CONFIG__.API_URL
  }
  
  // 2. Verificar variável de ambiente do build
  if (import.meta.env.VITE_API_URL) {
    console.log('✅ Usando API_URL do .env:', import.meta.env.VITE_API_URL)
    return import.meta.env.VITE_API_URL
  }
  
  // 3. Fallback apenas para desenvolvimento local
  console.warn('⚠️ Usando fallback localhost. Configure .env ou config.js!')
  return 'http://localhost:5000/api/products'
}

const API_BASE_URL = getApiUrl()

export function AppProvider({ children }) {
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  const showAlert = useCallback((message, type = 'info') => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 5000)
  }, [])

  // Helper para tratamento de resposta JSON
  const parseResponse = async (res) => {
    const contentType = res.headers.get('content-type')
    
    // Se status é 204 No Content, não há body para ler
    if (res.status === 204) {
      console.log('✅ Resposta 204 No Content')
      return null
    }
    
    if (!contentType || !contentType.includes('application/json')) {
      // Se não é JSON, tenta ler como texto para diagnosticar
      const text = await res.text()
      console.error('Resposta não é JSON:', text.substring(0, 200))
      throw new Error(`API retornou ${contentType || 'texto/html'} em vez de JSON. Verifique a URL e CORS.`)
    }
    
    return await res.json()
  }

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      console.log('Fetching products from:', API_BASE_URL)
      const res = await fetch(API_BASE_URL)
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - Verifique se a API está rodando`)
      }
      
      const data = await parseResponse(res)
      setLoading(false)
      return data
    } catch (err) {
      console.error('Erro ao buscar produtos:', err)
      showAlert(`Erro: ${err.message}`, 'error')
      setLoading(false)
      return []
    }
  }, [showAlert])

  const fetchProduct = useCallback(async (id) => {
    try {
      console.log('Fetching product:', id)
      const res = await fetch(`${API_BASE_URL}/${id}`)
      
      if (!res.ok) {
        throw new Error(`Produto ${id} não encontrado (HTTP ${res.status})`)
      }
      
      return await parseResponse(res)
    } catch (err) {
      console.error('Erro ao buscar produto:', err)
      showAlert(`Erro: ${err.message}`, 'error')
      return null
    }
  }, [showAlert])

  const createProduct = useCallback(async (data) => {
    try {
      console.log('Creating product:', data)
      const res = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - Erro ao criar produto`)
      }
      
      showAlert('Produto criado com sucesso!', 'success')
      return await parseResponse(res)
    } catch (err) {
      console.error('Erro ao criar produto:', err)
      showAlert(`Erro: ${err.message}`, 'error')
      return null
    }
  }, [showAlert])

  const updateProduct = useCallback(async (id, data) => {
    try {
      console.log('Updating product:', id, data)
      const res = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (!res.ok) {
        const errorText = await res.text()
        console.error('Erro na resposta:', res.status, errorText.substring(0, 200))
        throw new Error(`HTTP ${res.status} - Erro ao atualizar produto`)
      }
      
      showAlert('Produto atualizado com sucesso!', 'success')
      
      // Tenta parsear resposta, mas aceita 204 No Content também
      if (res.status === 204) {
        return { id, ...data } // Retorna os dados que foram enviados
      }
      
      return await parseResponse(res)
    } catch (err) {
      console.error('Erro ao atualizar produto:', err)
      showAlert(`Erro ao atualizar: ${err.message}`, 'error')
      return null
    }
  }, [showAlert])

  const deleteProduct = useCallback(async (id) => {
    try {
      console.log('Deleting product:', id)
      const res = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' })
      
      // Se recebeu erro (500, etc), tenta verificar se foi deletado mesmo assim
      if (!res.ok) {
        console.warn(`Servidor retornou HTTP ${res.status}, mas pode ter deletado. Verificando...`)
        
        // Tenta buscar o produto para confirmar se foi deletado
        const checkRes = await fetch(`${API_BASE_URL}/${id}`)
        
        // Se retornar 404, o produto foi deletado (sucesso!)
        if (checkRes.status === 404) {
          console.log('✅ Produto foi deletado com sucesso (confirmado via verificação)')
          showAlert('Produto deletado com sucesso!', 'success')
          return true
        }
        
        // Se retornar 200, o produto ainda existe (falha real)
        throw new Error(`HTTP ${res.status} - Falha ao deletar produto`)
      }
      
      // DELETE geralmente retorna 204 No Content ou 200 OK sem body
      showAlert('Produto deletado com sucesso!', 'success')
      return true
    } catch (err) {
      console.error('Erro ao deletar produto:', err)
      showAlert(`Erro ao deletar: ${err.message}`, 'error')
      return false
    }
  }, [showAlert])

  return (
    <AppContext.Provider value={{ alert, showAlert, loading, fetchProducts, fetchProduct, createProduct, updateProduct, deleteProduct }}>
      {children}
    </AppContext.Provider>
  )
}
