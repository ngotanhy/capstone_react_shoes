import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import urlImgLogo from '../../assets/img/logo.png'
import { history } from '../../main';
import { clearLocalStorage, setStoreJSON } from '../../util/config';

export default function subHeader() {
    const [count, setCount] = useState(0);
    const { userLogin } = useSelector(state => state.userReducer);
    const { arrProductsOrder } = useSelector(state => state.productReducer);
    const [check, setCheck] = useState(false);

    const handleSaveLocalStorage = () => {
        // if (getStoreJSON('arrProductsOrder') !== null) {
        //     console.log(arrProductsOrder);
        //     clearLocalStorage('arrProductsOrder');
        // }
        setStoreJSON('arrProductsOrder', arrProductsOrder)
        console.log('a');
    }

    useEffect(() => {
        if (userLogin === null) { history.push('/login') } else { setCheck(true) }

    }, [userLogin])

    useEffect(() => {
        if (arrProductsOrder !== null) {
            setCount(arrProductsOrder.length)
        }
    }, [arrProductsOrder])

    return (
        <nav className="px-6 flex justify-items-center bg-black">
            <NavLink to="/home" className="basis-3/12 rounded-lg test h-full pt-1">
                <img src={urlImgLogo} alt="..." className="h-8 w-28" />
            </NavLink>
            <div className="basis-9/12 flex sm:justify-end text-white ">
                <NavLink to='/search' className="rounded-lg test px-3 py-2 font-medium hover:text-slate-500 flex">
                    <svg
                        class="w-6 h-6 pr-2"
                        fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                    search</NavLink>
                <NavLink to='/cart' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500 flex justify-items-center"
                    onClick={() => { handleSaveLocalStorage() }}
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
                {check ?
                    <>
                        <NavLink to='/profile' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">Profile</NavLink>
                        <NavLink to='/login' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500"
                            onClick={() => {
                                clearLocalStorage('userLogin');
                                clearLocalStorage('accessToken');
                                clearLocalStorage('arrProductsOrder')
                                setCheck(false)
                                setCount(0)
                            }}>Log out</NavLink>
                    </>
                    :
                    <NavLink to='/login' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">Login</NavLink>
                }
                <NavLink to='/register' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">register</NavLink>
            </div>
        </nav>

    )
}
