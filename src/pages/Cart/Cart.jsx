import React from 'react'
import ItemProductCard from './ItemProduct/ItemProductCard'

export default function Cart() {
  return (
    <>
      <div className=" container">
        <h2 className="font-normal text-4xl mt-10 mb-4 pb-5 border-b-2  border-slate-900">Cart</h2>
        <div className="h-80 mb-5 overflow-auto">
          <ItemProductCard />
          <ItemProductCard />
          <ItemProductCard />
          <div className="flex justify-end mb-11 mt-4">
            <button className="font-semibold text-2xl text-white bg-orange-500 rounded-2xl hover:shadow-lg hover:shadow-orange-700/50 py-1 px-4">
              SUBMIT ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
