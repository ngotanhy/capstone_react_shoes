import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import urlLogo from '../assets/img/logo.png'
import Footer from '../componets/Footer/Footer';
import { history } from '../main';
import { clearLocalStorage, setStoreJSON } from '../util/config';

export default function HomeMobile() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const { arrProductsOrder } = useSelector(state => state.productReducer)
  const { userLogin } = useSelector(state => state.userReducer)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userLogin === null) { history.push('/login') } else { setCheck(true) }

  }, [userLogin])

  useEffect(() => {
    if (arrProductsOrder !== null) {
      setCount(arrProductsOrder.length)
    }
  }, [arrProductsOrder])

  return (
    <>
      <nav className="bg-gray-800 w-full fixed z-10 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center text-white">
              <div className="flex-shrink-0">
                <img
                  className="h-7 w-16"
                  src={urlLogo}
                  alt="..."
                  onClick={() => { navigate('/home') }}
                />
              </div>
              {check ?
                <NavLink to='/profile' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">Profile</NavLink>
                : <NavLink className="text-white ml-3 mr-3" to='/login'>Login</NavLink>}
              <NavLink className="text-white ml-3 mr-3 flex" to='/Cart'
                onClick={() => {
                  setStoreJSON('arrProductsOrder', arrProductsOrder)
                }}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
                <span>({count})</span>
              </NavLink>
              <NavLink to='/search' className='text-white mr-3 ' >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                  </path></svg>
              </NavLink>
            </div>
            <div className="-mr-2 flex ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="fixed bg-slate-500 w-full text-white z-100" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative z-10">
                <nav className="flex flex-col bg-slate-600 text-white ">
                  <>
                    {[
                      ['Home', '/home'],
                      ['Men', '/'],
                      ['Woman', '/'],
                      ['Kid', '/'],
                      ['Sport', '/'],
                      ['Register', '/register']
                    ].map(([title, url], index) => (
                      <NavLink to={url} className="rounded-lg px-3 test py-2 font-medium hover:text-slate-300" key={index}
                        onClick={() => { setIsOpen(false) }}>{title}</NavLink>
                    ))}
                    <NavLink to='/login' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500"
                      onClick={() => {
                        clearLocalStorage('userLogin');
                        clearLocalStorage('accessToken');
                        setCheck(false)
                        setCount(0)
                        setIsOpen(false)
                      }}>LogOut</NavLink>
                  </>
                </nav>
              </div>
            </div>
          )}
        </Transition>
      </nav>


      <Outlet />
      <Footer />
    </>
  )
}
