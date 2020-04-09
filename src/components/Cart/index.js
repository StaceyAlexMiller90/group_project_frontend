import React, {useState} from 'react';
import OrderForm from '../../components/OrderForm';
import {selectCart} from '../../store/cart/selector';
import { useSelector } from 'react-redux';
import ItemsInCart from '../ItemsInCart';

export default function Cart() {
  const cart = useSelector(selectCart)
  console.log('WHAT IS CART', cart)
  
  return (
    <div>
      <h1>Your Current Cart</h1>
      {cart.map(car => {
        return (
        <ItemsInCart 
        key={car.id}
        id={car.id}
        brand={car.type}
        image={car.imageUrl}
        model={car.model}
        price={car.price}
        year={car.modelYear}
        />
        )
      })}

      <OrderForm />
    </div>
  )
}

