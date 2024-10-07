
import React, { useState, useEffect } from 'react' 
import axios from 'axios'


const AxiosProductsList = ({setId}) => {
  // Initializing the users state with an empty array 
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(null)

// TODO -- create this in new file named ProductDetail
/*  
  const selectProduct = (id) => {
    setSelectedProducts(id)
    getProductInfo(id)
  }

  const getProductInfo = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => { 
      console.log(response)
      setSelectedProductInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
*/
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
      { products.map((product, index) => 
      <div key={index}>
        {/* This does not work ask why.🤡*/}
        {/*<p>{products.id.title}</p>*/}
        <p>{product.id}</p>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <img src={product.image} width="300" height="300" onClick={() => setId(product.Id)} />
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


