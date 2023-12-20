interface TotalPrice {
  totalPrice: number
  quantity: number
  user: User
  product: Product
}

interface Product {
  name: string
}

interface User {
  name: string
}

type Props = {
    orders: TotalPrice
}

const ListOrders = ({orders}: Props) => {
  return (
    <>
      <p>Precio total: {orders.totalPrice}</p>
      <p>Cantidad: {orders.quantity}</p>
      <p>Nombre del usuario: {orders.user.name}</p>
      <p>Nombre del producto: {orders.product.name}</p>
    </>
  )
}

export default ListOrders