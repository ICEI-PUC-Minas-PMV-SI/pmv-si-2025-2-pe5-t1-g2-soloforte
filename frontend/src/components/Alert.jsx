import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Alert() {
  const { alert } = useContext(AppContext)
  
  if (!alert) return null
  
  return (
    <div className={`alert alert-${alert.type} show`}>
      {alert.message}
    </div>
  )
}
