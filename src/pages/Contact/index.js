import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllInventory } from "../../store/inventory/selector";
import { fetchAllInventory } from '../../store/inventory/action'
import './Contact.css'

export default function Contact() {
  const dispatch = useDispatch()
  const inventory = useSelector(selectAllInventory)
  const [testDrive, setTestDrive] = useState([])
  const [statusmessage, set_statusmessage] = useState('Using the form below, please schedule your test drive!')
  const sortedInventory = [...inventory].sort((list_a, list_b) => list_a.brand.localeCompare(list_b.brand))

  const addDetails = (event) => {
    const name = event.target.name
    const value = event.target.value
    setTestDrive({...testDrive, [name]: value})
  }

  const submitDetails = (event) => {
    event.preventDefault()
    console.log(testDrive)
    set_statusmessage('Test Drive Requested!')
    event.target.reset()
  }

  useEffect(() => {
    dispatch(fetchAllInventory())
  }, [])

  return (
    <div>
    <h1>Schedule a Test Drive!</h1>
    <h4>{statusmessage}</h4>

    <form onSubmit={submitDetails}> 
      <label>Car Brand & Model: </label>
        <select name='Car Brand & Model'
                onChange={addDetails}
                className= 'feedback-input'
                required
                >
          <option value="">Select...</option>
          {sortedInventory.map(car => {
            return <option key={car.id} 
                           value={`${car.brand} ${car.model}`}>
                             {`${car.brand} ${car.model}`}
                  </option>
          })}
        </select> <br></br>
      <label> Name: </label>
        <input name='Name' 
              type='text'
              placeholder='Enter your name'
              onChange={addDetails}
              className= 'feedback-input'
              required
              ></input><br></br>
      <label>Email: </label>
        <input name='Email'
              type='email'
              placeholder='Enter your email'
              onChange={addDetails}
              className= 'feedback-input'
              required
              ></input><br></br>
      <label>Phone Number: </label>
        <input name='Phone Number' 
              type='text' 
              placeholder='Enter your phone number'
              onChange={addDetails}
              className= 'feedback-input'
              required
              ></input><br></br>
      <label>Date: </label>
        <input name='Date' 
              type='date'
              onChange={addDetails}
              className= 'feedback-input'
              required
              ></input><br></br>
      <input type='submit' />
    </form>
  </div>
  )
}
