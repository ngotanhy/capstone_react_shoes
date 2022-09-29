import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pushProductOrders } from '../../redux/reducer/productReducer';
import Responsive from '../../templates/Responsive';
import { clearLocalStorage, getStoreJSON, http } from '../../util/config';
import CartMobile from './ItemProCartMobile/CartMobile';
import TableProduct from './ItemProductCart/tableProduct';

export default function Cart() {
  const navigator = useNavigate()
  const dispatch = useDispatch();
  const { arrProductsOrder } = useSelector(state => state.productReducer)
  const { userLogin } = useSelector(state => state.userReducer)
  

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
        const result = await http.post('/Users/order', dataOrder);
        
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
      <div className="sm:container px-3 mt-12">
        <h2 className="font-normal text-4xl mt-10 mb-3 pb-5 border-b-2  border-slate-900">Cart</h2>
        <div className="mb-5">
          {/* <TableProduct /> */}
          <Responsive component={TableProduct} componentMobile={CartMobile} />
          <div className="flex justify-end mb-11 mt-4 ">
            <button className="font-semibold text-2xl text-white bg-orange-500 rounded-2xl hover:shadow-lg hover:shadow-orange-700/50 py-1 px-4"
              onClick={() => { orderProducts(), clearLocalStorage('arrProductsOrder') }}
            >
              SUBMIT ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
