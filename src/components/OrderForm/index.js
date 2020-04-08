import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder} from '../../store/user/actions';
import {selectUser} from '../../store/user/selectors';


export default function OrderForm() {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState(0);
  const [aptsuite, setAptsuite] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const user = useSelector(selectUser);



  function submitOrder(event) {
    event.preventDefault();
    // console.log('BUTTON WORKING', countryCode, phoneNumber, street, houseNumber, aptsuite, city, postalCode, country)
    dispatch(addOrder(
      countryCode, 
      phoneNumber, 
      street, 
      houseNumber, 
      aptsuite, 
      city, 
      postalCode, 
      country,
      user.id
      ));
  }

  return (
    <div>
      <h1>Please Fill In The Following Information</h1>
      <br></br>

      <form onSubmit={submitOrder}>
        Phone
        <br></br>
        <label>Country Code</label>
          <input 
          countrycode='countrycode'
          type='integer'
          value={countryCode}
          onChange={event => setCountryCode(event.target.value)}
          required
          />
        <label>Number</label>
          <input
          phonenumber='phonenumber'
          type='integer'
          value={phoneNumber}
          onChange={event => setPhoneNumber(event.target.value)}
          required
          />
        <br></br>  

        Address
        <br></br>
        <label>Street</label>
          <input 
          street='street'
          type='string'
          value={street}
          onChange={event => setStreet(event.target.value)}
          required
          />
        <label>Number</label>
          <input 
          housenumber='housenumber'
          type='integer'
          value={houseNumber}
          onChange={event => setHouseNumber(event.target.value)}
          required
          />
        <label>Apt/Suite</label>
          <input 
          aptsuite='aptsuite'
          type='string'
          value={aptsuite}
          onChange={event => setAptsuite(event.target.value)}
          />
        <label>City</label>
          <input 
          city='city'
          type='string'
          value={city}
          onChange={event => setCity(event.target.value)}
          required
          />
        <label>Postal Code</label>
          <input 
          postalcode='postalcode'
          type='string'
          value={postalCode}
          onChange={event => setPostalCode(event.target.value)}
          required
          />
        <label>Country</label>
          <input 
          country='country'
          type='string'
          value={country}
          onChange={event => setCountry(event.target.value)}
          required
          />

        {/* to be completed to submit userId with order
        <input 
        type='hidden'
        value={user.id}
        onChnage
        /> */}

        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
