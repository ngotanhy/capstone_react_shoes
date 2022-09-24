import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pushProductOrders } from '../../redux/reducer/productReducer';
import { getStoreJSON } from '../../util/config';
import ItemProductCard from './ItemProduct/ItemProductCard'

export default function Cart() {

  const { arrProductsOrder } = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  const { userLogin } = useSelector(state => state.userReducer)
  const navigator = useNavigate()
  console.log(arrProductsOrder)
  const orderProducts = async () => {
    try {
      let arrProductsOrderFilter = arrProductsOrder.filter((item) => item !== null)
      if (arrProductsOrderFilter.length > 0) {
        let orderProducts = arrProductsOrderFilter?.reduce((order, product) => {
          order.push({
            "productId": product?.id,
            "quantity": product?.quantity
          })
          return order
        }, [])
        let dataOrder = {
          "orderDetail": orderProducts,
          "email": userLogin.email
        }
        console.log(dataOrder)
        // const result = await http.post('//Users/order',dataOrder);
        // console.log(result.status)
      } else {
        navigator('/login')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    let arrProductOrder = getStoreJSON('arrProductOrder');
    if (arrProductOrder !== null) {
      const action = pushProductOrders(arrProductOrder);
      dispatch(action);
    }
  }, [])

  return (
    <>
      <div className=" container">
        <h2 className="font-normal text-4xl mt-10 mb-3 pb-5 border-b-2  border-slate-900">Cart</h2>
        <div className="mb-5">
          <ItemProductCard />
          <div className="flex justify-end mb-11 mt-4">
            <button className="font-semibold text-2xl text-white bg-orange-500 rounded-2xl hover:shadow-lg hover:shadow-orange-700/50 py-1 px-4"
              onClick={() => { orderProducts() }}
            >
              SUBMIT ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
