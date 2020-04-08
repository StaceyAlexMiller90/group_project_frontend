import React from 'react';


function submitOrder(event) {
  event.preventDefault();
  console.log('BUTTON WORKING')
}

export default function OrderForm() {
  return (
    <div>
      <header>Please Fill In The Following Information</header>
      <br></br>

      <form onSubmit={submitOrder}>
        Phone
        <br></br>
        <label>Country Code</label>
          <input />
        <label>Number</label>
          <input />
        <br></br>  

        Address
        <br></br>
        <label>Street</label>
          <input />
        <label>Number</label>
          <input />
        <label>Apt/Suite</label>
          <input />
        <label>City</label>
          <input />
        <label>Postal Code</label>
          <input />
        <label>Country</label>
          <input />

        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
