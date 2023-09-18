import React from 'react'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import Banner from '../Component/Banner/Banner'
import Header from '../Layout/Header/Header'
const RootRouting = () => {
  return (
    <div>
     <Router>
         <Header/>
         <Routes>
           <Route path='banner' element={<Banner/>}/>
         </Routes>
     </Router>

    </div>
  )
}

export default RootRouting