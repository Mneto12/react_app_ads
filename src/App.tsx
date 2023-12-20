import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Api from './api/Api'
import ListOrders from './components/ListOrders'

function App() {
  const [orders, setOrders] = useState(null)

  const getProducts = async () => {
    const { data } = await Api.get('/orders')
    setOrders(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Orders of Products</h1>
      <div className="card">
        {
          orders ? (
            <ListOrders orders={orders}/>
          ) : <h1>Orders not found</h1>
        }
      </div>
      <p className="read-the-docs">
        App component with react
      </p>
    </>
  )
}

export default App
