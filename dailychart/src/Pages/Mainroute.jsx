import React from 'react'

import { Route ,Routes} from 'react-router'
import Editpage from './Editpage'
import Homepage from './Homepage'
const Mainroute = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element ={<Homepage/>}/>
    <Route path= '/todos/:id/edit' element={<Editpage/>}/>
     
    </Routes>
      
    </div>
  )
}

export default Mainroute
