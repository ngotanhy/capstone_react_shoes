import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/scss/pages/_product.scss';
import ItemProduct from '../../componets/itemProduct/ItemProduct'
import { getProductApi } from '../../redux/reducer/productReducer';

const Product = ({ arrProductsSearch }) => {
  const { arrProducts } = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action)
  }, [])

  return (
    <div className="flex xl:gap-20 gap-y-4 flex-wrap justify-around mt-10 sm:mb-14 mb-5 ">
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
export default memo(Product)