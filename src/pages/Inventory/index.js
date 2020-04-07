import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading'
import { fetchAllInventory } from '../../store/inventory/action'
// import { selectAllInventory } from '../../store/inventory/selector'

export default function Inventory() {
  const dispatch = useDispatch()
  // const inventory = useSelector(selectAllInventory)

  useEffect(() => {
    dispatch(fetchAllInventory())
  }, [])

  // if (!inventory) {
  //   return <Loading />
  // }

  // console.log(inventory)

  return (
    <div>
      List of Inventory Test
    </div>
  )
}
