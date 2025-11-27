import { useEffect, useState, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import Alert from '../components/Alert'

export default function EditProductPage() {
  const [form, setForm] = useState({ name: '', description: '', price: '', stock: 0 })
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { alert, fetchProduct, updateProduct } = useContext(AppContext)
  
  const id = searchParams.get('id')

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        const product = await fetchProduct(id)
        if (product) {
          setForm(product)
        }
        setLoading(false)
      }
    }
    
    loadProduct()
  }, [id, fetchProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'price') {
      // Formata para BRL conforme digita
      const numValue = value.replace(/\D/g, '')
      setForm(prev => ({ ...prev, [name]: numValue ? numValue / 100 : '' }))
    } else if (name === 'stock') {
      setForm(prev => ({ ...prev, [name]: parseInt(value) || 0 }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await updateProduct(id, form)
    if (result) {
      setTimeout(() => navigate('/'), 1500)
    }
  }

  const displayPrice = form.price ? parseFloat(form.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'

  if (loading) return <div className="loading"><div className="spinner"></div></div>

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Editar Produto</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea name="description" value={form.description} onChange={handleChange}></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preço (BRL) - {displayPrice}</label>
                <input name="price" type="text" placeholder="0,00" value={form.price} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Estoque</label>
                <input name="stock" type="number" value={form.stock} onChange={handleChange} />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Salvar</button>
              <a href="/" className="btn btn-secondary">Cancelar</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
