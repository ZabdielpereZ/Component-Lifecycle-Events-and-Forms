
import React, { useState, useEffect } from 'react' 
import axios from 'axios'


const AxiosProductsList = () => {
  // Initializing the users state with an empty array 

  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(null)


  const selectProduct = (id) => {
    setSelectedProducts(products[id])
  }

  // we are going to load products from fakestoreapi using axios and useEffect
  // useEffect makes the request to the fakestoreapi ONE time when the page loads
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      // we want to log response to make sure it works 
      console.log(response)

      setProducts(response.data)
    })
    .catch(error => {
      console.log(error)
    }) 
  }, [])


  return (
    // variable list
    <>


      <h1>ProductList</h1>
      { products.map((products, index) => 
      <div key={index}>
        {/* This does not work ask why.🤡*/}
        {/*<p>{products.id.title}</p>*/}
        <p>{products.id}</p>
        <p>{products.title}</p>
        <p>{products.price}</p>
        <p>{products.image}</p>
      </div>
      )}


    </>
  )
}
{/*
  AxiosProductsList.defaultProps = {
      products: ["Xbox One Default", "PS5 Default", "Nintendo Switch Default"]
  }
*/}

export default AxiosProductsList


