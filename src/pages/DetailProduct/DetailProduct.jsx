import React from 'react'
import ItemProduct from '../../componets/itemProduct/ItemProduct'
import DetailItemProduct from './DetailItemProduct'

export default function DetailProduct() {
  return (
    <>
      <div className="container">
        <DetailItemProduct />
      </div>
      <div className="bg-purple-100">
        <div className="container">
          <h2 className="text-center font-normal text-4xl pt-7">-Realate Product -</h2>
          <div className="flex gap-14 flex-wrap justify-around mt-10 ml-32 pb-28">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
          </div>
        </div>
      </div>
    </>
  )
}
