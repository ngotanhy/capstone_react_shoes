import React from 'react'
import Product from '../Product/Product'

export default function Search() {
    return (
        <>
            <div className="flex">
                <div className="basis-1/2 p-11">
                    <label className="block pl-3 mb-2">Search</label>
                    <input
                        className="p-3 mr-1 bg-slate-100 text-black outline-none font-normal text-base w-443"
                        type="text"
                        id='search'
                        placeholder="Search..." />
                    <button
                        className="ml-9 bg-blue-600 rounded-3xl px-5 py-3 font-medium text-sm hover:bg-blue-500 shadow-lg shadow-blue-500/50">
                        SEARCH
                    </button>
                </div>
            </div>
            <div className="main">
                <h2 className="w-full backGroundGradient font-normal text-4xl pl-7 py-3">Search result</h2>
                <div className="container ">
                    <div className="sort mt-7">
                        <p className="font-medium text-lg mb-1">Price</p>
                        <select className="w-443 font-normal text-base outline-none bg-slate-100 py-2">
                            <option className="">decrease</option>
                            <option>increase</option>
                        </select>
                        <div className="w-443 font-normal text-base outline-none bg-slate-100 py-2 mt-2 pl-1">
                           ascending
                        </div>
                    </div>
                    <div className="">
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}
