import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Responsive from '../../templates/Responsive';
import { clearLocalStorage, http } from '../../util/config';
import CartMobile from './ItemProCartMobile/CartMobile';
import TableProduct from './ItemProductCart/tableProduct';

//tost
import { notify } from '../../componets/Toast/Toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Cart() {
  const navigate = useNavigate()
  const { arrProductsOrder } = useSelector(state => state.productReducer)
  const { userLogin } = useSelector(state => state.userReducer)


  const orderProducts = async () => {
    try {
      let arrProductsOrderFilter = arrProductsOrder.filter((item) => item !== null)
      if (arrProductsOrderFilter.length > 0) {
        if (userLogin === null) {
          notify('Hãy Đăng Nhập', 'error')
          setTimeout(() => { navigate('/login') }, 1500);
        } else {
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
          let result = await http.post('/Users/order', dataOrder);
          // console.log(result);
          notify(result.data.content, 'success')
        }
      } else {
        notify('hãy chọn mua sản phẩm cho bạn', 'error')
      }
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <div className="xl:container sm:w-full px-3 mt-12">
        <h2 className="font-normal text-4xl mt-10 mb-3 pb-5 border-b-2  border-slate-900">Cart</h2>
        <div className="mb-5">
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
      <ToastContainer  />
    </>
  )
}
