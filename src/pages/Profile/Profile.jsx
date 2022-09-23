import React from 'react'
import Pagination from '../../componets/Pagination/Pagination'
import Info from './info/Info'
import Order from './order/Order'

export default function Profile() {
  return (
    <>
      <h2 className="font-normal text-4xl w-575 backGroundGradient mt-12 pl-8 py-3 mb-16">Profile</h2>
      <div className="container">
        <Info />
      </div>
      <div className="mt-5">
        <Order />
      </div>
      <div className="container flex justify-end " style={{marginBottom:'20px'}}>
        <Pagination />
      </div>
    </>
  )
}
