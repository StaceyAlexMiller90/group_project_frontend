import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading'
import { fetchAllInventory } from '../../store/inventory/action'
import { selectAllInventory } from '../../store/inventory/selector'
import InventoryCard from '../../components/InventoryCard'
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

function comparePrice(car_a, car_b) {
  return car_b.price - car_a.price;
}


export default function Inventory() {
  const dispatch = useDispatch();
  const inventory = useSelector(selectAllInventory);
  const [sortedCars, setSortedCars] = useState(true);

  useEffect(() => {
    if (inventory.length === 0) {
      dispatch(fetchAllInventory());
    }
  }, []);

  const sortCars = () => {
    setSortedCars(!sortedCars);
  };
  const sortedInventory = inventory
    ? inventory.sort(comparePrice).reverse()
    : [];

  if (!inventory) {
    return <Loading />;
  }

  return (
    <>
      <h1>All of our inventory</h1>

      <Button variant='dark' onClick={sortCars}>Sort by Price</Button>
      <Container className='mb-4 m-auto row d-flex'>
      {sortedCars
        ? sortedInventory.map((car, i) => {
            return (
              <InventoryCard
                key={i}
                id={car.id}
                type={car.type}
                brand={car.brand}
                price={car.price}
                model={car.model}
                imageUrl={car.imageUrl}
              />
            );
          })
        : sortedInventory.reverse().map((car, i) => {
            return (
              <InventoryCard
                key={i}
                id={car.id}
                type={car.type}
                brand={car.brand}
                price={car.price}
                model={car.model}
                imageUrl={car.imageUrl}
              />
            );
          })}
  </Container>
    </>
  );
}
