import React, {useState} from 'react';
import OrderForm from '../../components/OrderForm';
import {selectCart} from '../../store/cart/selector';
import { useSelector } from 'react-redux';
import ItemsInCart from '../ItemsInCart';
import Container from 'react-bootstrap/Container';

export default function Cart() {
  const cart = useSelector(selectCart)
  console.log('WHAT IS CART', cart)

  const totals = cart.map(item => {
    const search = item.id
    const count = cart.reduce(function(n, val) {
      return n + (val.id === search);
    }, 0);
    return {...item, quantity: count}
  })

  const cartWithQty = (arr, comp) => {
    const unique = arr
         .map(e => e[comp])
       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  }

  const uniqueCartWithQty = cartWithQty(totals, 'id')
  
  return (
    <div>
      <h1>Your Current Cart</h1>
      
      <Container className='mb-4 m-auto row d-flex align-items-stretch'>
      {uniqueCartWithQty.map(car => {
        return (
        <ItemsInCart 
        key={car.id}
        id={car.id}
        brand={car.type}
        image={car.imageUrl}
        model={car.model}
        price={car.price}
        year={car.modelYear}
        quantity={car.quantity}
        />
        )
      })}
      </Container>
      <OrderForm cart={uniqueCartWithQty}/>
    </div>
  )
}

