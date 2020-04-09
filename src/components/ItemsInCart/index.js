import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { addCarToCart, removeCarFromCart } from "../../store/cart/action";
import {useDispatch} from 'react-redux';


export default function ItemsInCart(props) {
  const dispatch = useDispatch();

  function removeFromCart(id) {
    //console.log("Clicked", id);
    dispatch(removeCarFromCart(id));
  }

  console.log('PROPS', props)
  return (
    <div className="col-lg-4 mb-2 d-flex align-self-stretch"
    style={{justifyContent: 'flex'}}>
      <Card style={{ width: "500px"}} className="justify-content-md-flex">
        <Card.Img
          className="align-self-center"
          variant="top"
          style={{ width: "300px" }}
          src={props.image}
        />
      <Card.Body className="d-flex">
          <Card.Title
            style={{ width: "500px"}}
            className="align-self-end"
          >
          Quantity: {props.quantity}
          </Card.Title>
      </Card.Body>
      <Card.Footer>
          <Row className="d-flex justify-content-around">
            <p>{props.brand} {props.model} - {props.year}</p>
            <p>€{props.price}</p>
          </Row>
          <Button
                style={{ fontSize: "0.6rem", width: "300px"}}
                variant="dark"
                onClick={() => removeFromCart(props.id)}
              >
                Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
