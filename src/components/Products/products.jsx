const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' }
  ],

  products: [
    { name: 'TV', category: 'electronics', price: 799.00, inStock: 5 },
    { name: 'Laptop', category: 'electronics', price: 899.00, inStock: 2 },
    { name: 'Iphone', category: 'electronics', price: 1299.00, inStock: 12 },
    { name: 'Apple', category: 'food', price: 799.00, inStock: 30 },
    { name: 'Milk', category: 'food', price: 2.99, inStock: 22 },
    { name: 'Eggs', category: 'food', price: 5.99, inStock: 9 }
  ],

  activeCategory: ''
}



const Products = () => {
  return (
    <>
    {/* <h1> Our Products</h1> */}
    </>
  )
}

export default Products;