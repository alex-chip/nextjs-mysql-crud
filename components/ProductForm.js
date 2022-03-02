import axios from 'axios'

export function ProductForm () {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post('/api/products', {
      name: "product1",
      description: 'description1',
      price: 1000
    })
    console.log(result)
  }

  return (
    <div className='bg-gray-300'>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" rows="2"></textarea>

        <button>Save Product</button>
      </form>
    </div>
  )
}