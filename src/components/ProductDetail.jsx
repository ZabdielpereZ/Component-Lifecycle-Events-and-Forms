import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'


const ProductDetail = ({id}) => {

    const [selectedProduct, setSelectedProductInfo] = useState(null)


    useEffect(() => {
        getProductInfo(id)
    }, [])

  
    
      const getProductInfo = (id) => {
        console.log(id)
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => { 
          console.log(response)
          setSelectedProductInfo(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      
  return (
    <div>
      
      {setSelectedProductInfo.id &&
      <div>
        <h3>Selected Product</h3>
        <p>{selectedProduct.id}</p>
        <p>{selectedProduct.description}</p>
        <p>{selectedProduct.category}</p>
        <p>{selectedProduct.rating}</p>
      </div>
      }


    </div>
  )
}

export default ProductDetail
