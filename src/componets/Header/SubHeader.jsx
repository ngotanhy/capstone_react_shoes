import React from 'react'
import { NavLink } from 'react-router-dom'
import urlImgLogo from '../../assets/img/logo.png'

export default function subHeader() {
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
                <NavLink to='/cart' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500 flex justify-items-center">
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
                    <span>(1)</span>
                </NavLink>
                <NavLink to='/login' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">login</NavLink>
                <NavLink to='/register' className="rounded-lg px-3 test py-2 font-medium hover:text-slate-500">register</NavLink>
            </div>
        </nav>

    )
}