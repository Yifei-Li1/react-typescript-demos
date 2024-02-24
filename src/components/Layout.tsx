import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navigation from './Navigation'
import Calculator from './calculator/Calculator'
import Home from './Home'
import Calendar from './calendar/Calendar'

const Layout = () => {
  return (
    <>
        <Navigation />
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            
            <Route path='/' element={<Home />}></Route>
            <Route path='/calendar' element={<Calendar />}></Route>
            <Route path='/autofile'></Route>
            <Route path='/redux'></Route>
            <Route path='/calculator' element={<Calculator />}></Route>
            <Route path='/tablegraph'></Route>
        </Routes>
    </>
  )
}

export default Layout