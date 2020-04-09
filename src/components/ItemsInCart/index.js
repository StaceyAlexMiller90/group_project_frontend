import React from 'react'

export default function ItemsInCart(props) {
  return (
    <div>
      <img src={props.image} alt='A Car'/>
      <ul>
        <li>{props.brand}</li>
        <li>{props.model}</li>
        <li>{props.year}</li>
        <li>{props.price}</li>
        <li>Quantity *#*</li>
      </ul>
    </div>
  )
}
