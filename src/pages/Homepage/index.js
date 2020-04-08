import React from 'react'
import Button from "react-bootstrap/Button";
import './homepage.css'
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='hometext'>
        <header>Drive your dreams.</header>
        <Link to='/inventory'>
          <Button className='homebutton' variant='light'>Check out latest inventory</Button>
        </Link>
        <p>Our showroom is open: <br></br> 
        Monday - Friday | 9.00am - 6.00pm</p>
      </div>
    </div>
  )
}
