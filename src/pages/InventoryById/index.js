import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading'
import { useParams } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { fetchInventoryById } from '../../store/inventoryById/action'
import { selectInventoryById } from '../../store/inventoryById/selector'
import { selectToken } from '../../store/user/selectors';
import { addCarToCart } from '../../store/cart/action'

export default function InventoryById() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const inventory = useSelector(selectInventoryById)
  const token = useSelector(selectToken)

  useEffect(() => {
    dispatch(fetchInventoryById(id))
  }, [])

  function addToCart() {
    dispatch(addCarToCart(id))
}

  if (!inventory) {
    return <Loading />
  }

  return (
    <Container>
      <Row>
        <Col>
          <img alt='InventoryDetail' style={{width: '500px'}}src={inventory.imageUrl}/>
          <p style={{fontSize: '1.5rem'}}></p>
          {!token ? 'Please log in to add to cart'
          : <>
              <Button variant='dark' onClick={addToCart}>Add to Cart</Button>
              <Button variant='dark'>Remove from cart</Button>
            </>}
        </Col>
        <Col>
          <h3>{inventory.brand}, {inventory.model}</h3>
          <h4>€{inventory.price}</h4>
          <p>{inventory.isUsed ? 'Used' : 'New'}</p>
          <p>{inventory ? 'In stock' : 'Out of Stock'}</p>
          <ul>
            <li>{inventory.modelYear}</li>
            <li>{inventory.type}</li>
            <li>{inventory.isElectric ? 'Electric' : 'Non electric'}</li>
            <li>Mileage: {inventory.km}</li>
          </ul>
        </Col>
      </Row>
    </Container>  
  )
}
