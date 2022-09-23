import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemProduct from '../../componets/itemProduct/ItemProduct'
import { getProductId } from '../../redux/reducer/productReducer';
import DetailItemProduct from './DetailItemProduct'

export default function DetailProduct() {
  const { id } = useParams();
  const { product}= useSelector(state=>state.productReducer);
  const dispatch= useDispatch();
  // const arrProducts
  // const[activeSize,setActiveSize] = useState();

  useEffect(() => {
      const action=getProductId(id);
      dispatch(action)
  }, [id])

  return (
    <>
      <div className="container">
        <DetailItemProduct product={product} />
      </div>
      <div className="bg-purple-100">
        <div className="container">
          <h2 className="text-center font-normal text-4xl pt-7">-Realate Product -</h2>
          <div className="flex gap-14 flex-wrap justify-around mt-10 ml-32 pb-28">
            {product?.relatedProducts?.map((item)=>{
                  return <ItemProduct key={item.id} product={item}/>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
