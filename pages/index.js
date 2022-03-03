import axios from 'axios'
import { ProductForm } from '../components/ProductForm'
export default function HomePage({products}) {
  console.log(products)
  return (
    <div>
      <ProductForm />
      { products.map(product => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const { data: products} = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      products
    }
  }
}