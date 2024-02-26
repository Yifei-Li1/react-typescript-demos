import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Navigation = () => {
  return (
    <div className='navigation'>
        <NavLink to="./home">home</NavLink>
        <NavLink to="./calendar">calendar</NavLink>
        <NavLink to='redux'>redux</NavLink>
        <NavLink to='autofile'>autofile</NavLink>
        <NavLink to="./calculator">calculator</NavLink>
        <NavLink to='tableGraph'>table to graph</NavLink>
        <NavLink to='./template'>component templates</NavLink>
    </div>
  )
}

export default Navigation