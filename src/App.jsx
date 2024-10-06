// (rafce) <--- command reactArrowFunctionExportComponents
import React from 'react'
import AxiosProductlist from "./components/AxiosProductsList"

const App = () => {
  // const products = ["Xbox One", "PS5", "Nintendo Switch"]
  return (
    <div>
      {/* We can pass through users as an argument to the user list component */}
      {/*This works because it will be read as props.user */}
      


      {/* If we change the name of the products parameters to something else, like product, it will not work and display the default values */}

      <AxiosProductlist />
    </div>
  )
}

export default App