import React from 'react'
import '../../assets/scss/pages/_product.scss';
import ItemProduct from '../../componets/itemProduct/ItemProduct'

export default function Product() {
  return (
    <div className="flex gap-20 flex-wrap justify-around mt-10 mb-28 ">
      <ItemProduct  />
      <ItemProduct  />
      <ItemProduct  />
      <ItemProduct  />
      <ItemProduct  />
      <ItemProduct  />
    </div>
  )
}
