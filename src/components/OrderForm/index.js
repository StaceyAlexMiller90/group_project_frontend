import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder} from '../../store/user/actions';
import {selectUser} from '../../store/user/selectors';
import { selectCart } from '../../store/cart/selector';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function OrderForm(props) {
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
  const cart = useSelector(selectCart)

 

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
      props.cart
      ));
  }

  return (
    <div>
      <h1>Please Fill In The Following Information</h1>
      <br></br>

      <Form onSubmit={submitOrder}>
        <h2 style={{fontsize: 25}}>Phone</h2>
        <br></br>
        <Form.Group controlId="formCountryCode">
          <Form.Label >Country Code</Form.Label>
        <Form.Control 
        type='integer' 
        placeholder='Select Country Code' 
        value={countryCode}
        onChange={event => setCountryCode(event.target.value)}
        required
        />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Number</Form.Label>
        <Form.Control 
        type='integer' 
        placeholder='Phone Number' 
        value={phoneNumber}
        onChange={event => setPhoneNumber(event.target.value)}
        required
        />
        </Form.Group>

        <br></br>

        <h2 style={{fontsize: 25}}>Address</h2>
        <Form.Group controlId="formStreet">
          <Form.Label>Street</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='Street' 
        value={street}
        onChange={event => setStreet(event.target.value)}
        required
        />
        </Form.Group>

        <Form.Group controlId="formHouseNumber">
          <Form.Label>Number</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='House #' 
        value={houseNumber}
        onChange={event => setHouseNumber(event.target.value)}
        required
        />
        </Form.Group>

        <Form.Group controlId="formAptsuite">
          <Form.Label>Apt/Suite</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='Street' 
        value={aptsuite}
        onChange={event => setAptsuite(event.target.value)}
        />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='City' 
        value={city}
        onChange={event => setCity(event.target.value)}
        required
        />
        </Form.Group>

        <Form.Group controlId="formPostalCode">
          <Form.Label>Postal Code</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='Postal Code' 
        value={postalCode}
        onChange={event => setPostalCode(event.target.value)}
        required
        />
        </Form.Group>
        
        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
        <Form.Control 
        type='string' 
        placeholder='Country' 
        value={country}
        onChange={event => setCountry(event.target.value)}
        required
        />
        </Form.Group>
        
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
