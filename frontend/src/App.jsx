import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import ProductListPage from './pages/ProductListPage'
import CreateProductPage from './pages/CreateProductPage'
import EditProductPage from './pages/EditProductPage'
import ViewProductPage from './pages/ViewProductPage'

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/create" element={<CreateProductPage />} />
          <Route path="/view" element={<ViewProductPage />} />
          <Route path="/edit" element={<EditProductPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
