import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../componets/Pagination/Pagination'
import { getProfileApi } from '../../redux/reducer/userReducer';
import Info from './info/Info'
import Order from './order/Order'

export default function Profile() {
  const { userProfile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  let arrOrdersHistory = userProfile.ordersHistory;

  useEffect(() => {
    const action = getProfileApi()
    dispatch(action)
  }, [])

  return (
    <div className="w-full xl:container sm:w-full">
      <h2 className="font-normal text-4xl md:w-575 w-full backGroundGradient mt-48px md:pl-8 md:py-3 md:mb-16 ">Profile</h2>
      <div className="container">
        <Info userProfile={userProfile} />
      </div>
      <div className="mt-5 ">
        <div className="container">
          <div className="font-normal text-3xl flex  mt-4">
            <h3 className="border-b-2 border-l-2 border-slate-300 px-2 text-purple-900">Order history</h3>
            <h3 className="border-b-2 border-l-2 border-r-2 border-slate-300 px-2">Favourite</h3>
          </div>
          <div className="w-full">
            {arrOrdersHistory?.map((item, index) => {
              return <Order order={item} key={index} />
            })}
          </div>
        </div>
      </div>
      <div className="container flex justify-end " style={{ marginBottom: '20px' }}>
        <Pagination />
      </div>
    </div>
  )
}
