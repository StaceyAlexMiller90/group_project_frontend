import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { Row } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {addCarToCart} from '../../store/cart/action';
import {selectAllInventory} from '../../store/inventory/selector';

const InventoryCard = (props) => {
  const dispatch = useDispatch();

  function addToCart(id) {
      // console.log('Button clicked')
      dispatch(addCarToCart(id))
  }

  return (
    <div className='col-lg-4 mb-2 d-flex align-self-stretch'>
      <Card style={{width: '500px'}} className='d-flex'>
        <Card.Img className='align-self-center' variant="top" style={{width: '300px'}} src={props.imageUrl}/>
        <Card.Body className='d-flex'>
        <Card.Title style={{width: '500px'}} 
                    className='align-self-end'>{`${props.brand} ${props.model}`}</Card.Title>
          <Link className='align-self-end' to={`/inventory/${props.id}`}>
            <Button style={{fontSize: '0.8rem'}} 
                    variant='dark'>View Details</Button>
          </Link>
          <Button style={{fontSize: '0.8rem'}} 
                    variant='dark'
                    onClick={() => addToCart(props.id)}>Add To Cart</Button>
        </Card.Body>
        <Card.Footer>
          <Row className='d-flex justify-content-around'>
            <p>Type: {props.type}</p>
            <p>€{props.price}</p>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default InventoryCard
