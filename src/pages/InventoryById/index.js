import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading'
import { useParams } from 'react-router-dom';
import { fetchInventoryById } from '../../store/inventoryById/action'
// import { selectInventoryById } from '../../store/inventoryById/selector'

export default function InventoryById() {
  const dispatch = useDispatch()
  const { id } = useParams()
  // const inventory = useSelector(selectInventoryById)

  useEffect(() => {
    dispatch(fetchInventoryById(id))
  }, [])

  // if (!inventory) {
  //   return <Loading />
  // }

  // console.log(inventory)

  return (
    <div>
      Specific details for each car
    </div>
  )
}
