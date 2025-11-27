import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import Alert from '../components/Alert'

export default function CreateProductPage() {
  const [form, setForm] = useState({ name: '', description: '', price: 0, stock: 0 })
  const { alert, createProduct } = useContext(AppContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) || 0 : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createProduct(form)
    if (result) {
      setTimeout(() => navigate('/'), 1500)
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Criar Produto</h2>
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
                <label>Preço</label>
                <input name="price" type="number" step="0.01" value={form.price} onChange={handleChange} />
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
