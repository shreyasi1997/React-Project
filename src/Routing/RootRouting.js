import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Banner from '../Layout/Landing/Banner/Banner'
import PrivateRoutes from './PrivateRouter/PrivateRoutes'
import Login from '../Component/Auth/login/Login'
import Registration from '../Component/Auth/reg/Registration'
import ProfilePage from '../Component/Auth/profile/Profile'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import About from '../Component/Main/About/About'
import Contact from '../Component/Main/Contactus/Contact'
import { PNF } from '../PNF/PNF'
import AllProduct from '../Component/ProductAll/Products/AllProduct'
import SingleProduct from '../Component/ProductAll/Products/SingleProdtct'
import Payment from '../Component/ProductAll/PaymentPart/Payment/Payment'
import OrderDone from '../Component/ProductAll/PaymentPart/Confirm/Confirm'
import EmptyListWithPictures from '../Component/ProductAll/AddCard/AddCard'
import Emptycard from '../Component/ProductAll/Addwish/AddWish'
const RootRouting = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Banner />} />

          <Route element={<PrivateRoutes />}>
          <Route path='addcard' element={<EmptyListWithPictures/>} />
         <Route path='addwish' element={<Emptycard/>} />
          </Route>

          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<Contact />} />

          <Route path='singin' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<ProfilePage />} />

          <Route path='categories' element={<AllProduct/>} />
          <Route path='categories/single/:id' element={<SingleProduct/>} />
          <Route path='payment' element={<Payment/>} />
          <Route path='orderDone' element={<OrderDone/>} />
          
        
          
          <Route path='*' element={<PNF />} />
          </Routes>
          <Footer/>
      </Router>

    </div>
  )
}

export default RootRouting