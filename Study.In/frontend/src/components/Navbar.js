import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar' >
      <div className='logo'>Study.In</div>
        <ul>
          <li>Home</li>
          <li>Ncert</li>
          <li>Ai Text</li>
      </ul>
    <ul className='nav-right'>
          <li><Link to ='/signUp'>SignUp</Link></li>
          <li><Link to ='/login'>Login</Link></li>
         
</ul>
</div>
  )
}
