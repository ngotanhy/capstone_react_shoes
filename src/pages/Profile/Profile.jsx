import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../componets/Pagination/Pagination'
import { getProfileApi } from '../../redux/reducer/userReducer';
import Info from './info/Info'
import Order from './order/Order'

export default function Profile() {
  const {userProfile}= useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  let arrOrdersHistory=userProfile.ordersHistory;

  useEffect(() => {
      const action=getProfileApi()
      dispatch(action)
  }, [])

  return (
    <>
      <h2 className="font-normal text-4xl w-575 backGroundGradient mt-12 pl-8 py-3 mb-16">Profile</h2>
      <div className="container">
        <Info userProfile={userProfile}/>
      </div>
      <div className="mt-5">
        {arrOrdersHistory?.map((item, index)=>{
          return <Order order={item}  key={index} />
        })}
      </div>
      <div className="container flex justify-end " style={{ marginBottom: '20px' }}>
        <Pagination />
      </div>
    </>
  )
}
