import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { fetchAllInventory } from "../../store/inventory/action";
import { selectAllInventory } from "../../store/inventory/selector";
import InventoryCard from "../../components/InventoryCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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

  const carTypes = [...new Set(inventory.map((car) => car.type))];

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

      <Button onClick={sortCars}>Sort by Price</Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Types
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item value="All" key="All">
            All
          </Dropdown.Item>
          {carTypes.map((type, index) => {
            return (
              <Dropdown.Item value={type} key={type.index}>
                {type}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Container className="mb-4 m-auto row d-flex">
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
