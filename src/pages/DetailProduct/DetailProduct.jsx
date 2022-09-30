import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemProduct from '../../componets/itemProduct/ItemProduct'
import { getProductId } from '../../redux/reducer/productReducer';
import ItemDetail from './ItemDetail';

export default function DetailProduct() {
  const { id } = useParams();
  const { productById } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductId(id);
    dispatch(action)
  }, [id])

  return (
    <div className="relative">
      <div className="container ">
        <ItemDetail product={productById} />
      </div>
      <div className="pb-6 md:mb-0">
        <div className="container">
          <h2 className="text-center font-normal text-4xl pt-7">-Realate Product -</h2>
          <div className="flex lg:gap-14 gap-y-4 flex-wrap justify-around mt-10 sm:mb-14 mb-4">
            {productById?.relatedProducts?.map((item, index) => {
              return <ItemProduct key={index} product={item} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
