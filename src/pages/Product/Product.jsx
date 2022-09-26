import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/scss/pages/_product.scss';
import ItemProduct from '../../componets/itemProduct/ItemProduct'
import { getProductApi } from '../../redux/reducer/productReducer';

export default function Product({ arrProductsSearch }) {
  const { arrProducts } = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action)
  }, [])

  return (
    <div className="flex gap-20 flex-wrap justify-around mt-10 mb-28 ">
      {
        arrProductsSearch?.length > 0 ? arrProductsSearch?.map((item) => {
          return <ItemProduct key={item.id} product={item} />
        }) : arrProducts.map((item) => {
          return <ItemProduct key={item.id} product={item} />
        })
      }
    </div>
  )
}
