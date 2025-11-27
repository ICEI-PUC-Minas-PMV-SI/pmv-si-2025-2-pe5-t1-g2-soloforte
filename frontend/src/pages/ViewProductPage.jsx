import { useEffect, useState, useContext } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import Alert from '../components/Alert'

export default function ViewProductPage() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const { fetchProduct } = useContext(AppContext)
  
  const id = searchParams.get('id')

  useEffect(() => {
    if (id) loadProduct()
  }, [id])

  const loadProduct = async () => {
    const data = await fetchProduct(id)
    if (data) setProduct(data)
    setLoading(false)
  }

  if (loading) return <div className="loading"><div className="spinner"></div></div>
  if (!product) return <div className="container"><p>Produto não encontrado</p></div>

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">{product.name}</h2>
          </div>

          <div className="product-details">
            <div className="detail-row">
              <label>Descrição:</label>
              <p>{product.description || 'N/A'}</p>
            </div>

            <div className="detail-row">
              <label>Preço:</label>
              <p className="price">{formatter.format(product.price)}</p>
            </div>

            <div className="detail-row">
              <label>Estoque:</label>
              <p>{product.stock} unidades</p>
            </div>
          </div>

          <div className="form-actions">
            <Link to={`/edit?id=${product.id}`} className="btn btn-primary">✏️ Editar</Link>
            <Link to="/" className="btn btn-secondary">Voltar</Link>
          </div>
        </div>
      </div>
    </>
  )
}
