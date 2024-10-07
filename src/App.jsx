// (rafce) <--- command reactArrowFunctionExportComponents
import React from 'react'
import AxiosProductlist from "./components/AxiosProductsList"
import ProductDetail from './components/ProductDetail'
import { useState } from'react'

const App = () => {
  
  const [id, setId] = useState(null)
  
  // const products = ["Xbox One", "PS5", "Nintendo Switch"]
  return (
    <div>
      {/* We can pass through users as an argument to the user list component */}
      {/*This works because it will be read as props.user */}
      


      {/* If we change the name of the products parameters to something else, like product, it will not work and display the default values */}

      <AxiosProductlist setId={setId} />
      <ProductDetail id={id}/>
    </div>
  )
}

export default App