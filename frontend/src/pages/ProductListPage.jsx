import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import Alert from '../components/Alert'

export default function ProductListPage() {
  const [products, setProducts] = useState([])
  const { alert, loading, fetchProducts, deleteProduct } = useContext(AppContext)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const data = await fetchProducts()
    setProducts(data)
  }

  const handleDelete = async (id) => {
    if (confirm('Tem certeza?')) {
      const success = await deleteProduct(id)
      if (success) loadProducts()
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Lista de Produtos</h2>
            <button className="btn btn-secondary" onClick={loadProducts}>
              Atualizar
            </button>
          </div>

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <span>Carregando...</span>
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="empty-state">
              <h3>Nenhum produto</h3>
              <p>Clique em "Criar" para adicionar um</p>
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>{p.description || '-'}</td>
                      <td>R$ {parseFloat(p.price).toFixed(2)}</td>
                      <td>{p.stock}</td>
                      <td>
                        <div className="actions">
                          <Link to={`/view?id=${p.id}`} className="btn-icon">🔍</Link>
                          <Link to={`/edit?id=${p.id}`} className="btn-icon">✏️</Link>
                          <button className="btn-icon" onClick={() => handleDelete(p.id)}>🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
