import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading'
import { fetchAllInventory } from '../../store/inventory/action'
import { selectAllInventory } from '../../store/inventory/selector'
import InventoryCard from '../../components/InventoryCard'

export default function Inventory() {
  const dispatch = useDispatch()
  const inventory = useSelector(selectAllInventory)

  useEffect(() => {
    if(inventory.length === 0) {
      dispatch(fetchAllInventory())
    }
  }, [])

  if (!inventory) {
    return <Loading />
  }

  return (
    <>  
      <h1>All of our inventory</h1>
      {inventory.map((car, i) => {
        return <InventoryCard 
               key={i}
               id={car.id}
               type={car.type}
               brand={car.brand}
               price={car.price}
               model={car.model}
               imageUrl={car.imageUrl}
               />
      })}
    </>
    )
}
