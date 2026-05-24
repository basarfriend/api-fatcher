import React from 'react'
import './Nav.css'
import { Link, Links } from 'react-router-dom'
const Header = (nav) => {   
  return (
    <>
  <div className="navbar">
   <h2 > <a className='link-nav' href='/' >{nav.name}</a> </h2> 
   <div className="sec-nav" >
    <h4><Link className='link-nav' to={'/About'} >About</Link></h4>
    <h4><Link className='link-nav' to={'/Project'} >Project</Link></h4>
    <h4><Link className='link-nav' to={'/Education'} >Education</Link></h4>
   </div>
  </div>
    </>
  )
}

export default Header