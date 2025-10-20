import React from 'react'
import { toast , Toaster} from 'react-hot-toast'
const HomePage = () => {
  return (
    <div>
      HomePage
      <button onClick={()=>(toast.success("Success"))}>Click</button>
      <Toaster position='center'/>
    </div>
  )
}

export default HomePage
