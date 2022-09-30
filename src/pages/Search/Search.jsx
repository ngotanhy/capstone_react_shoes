import React, { useState } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { searchByName, sortProducts } from '../../util/templates';
import Product from '../Product/Product'

export default function Search() {
    const search =useRef('')
    const type = useRef('');
    const [arraySearch, setArraySearch] = useState([])
    
    const { arrProducts } = useSelector(state => state.productReducer)

    const handleChangeInput = (e) => {
        let value=e.target.value;
        search.current =value;
    }
    const handleChangeSelection = (e) => {
        let value = e.target.value;
        type.current=value;
    }

    const handleSearch = () => {
        let newArr = searchByName(search.current.toString(), arrProducts);
        if (newArr.length > 0) {
            if (type.current !== null) {
                setArraySearch(sortProducts(type.current, newArr));
            }
            setArraySearch(newArr);
        } else {
            if (type.current !== null) {
                setArraySearch(sortProducts(type.current, arrProducts));
            }
            setArraySearch(arrProducts);
        }
    }


    return (
        <>
            <div className="sm:flex">
                <div className="basis-1/2 p-11 ">
                    <label className="block pl-3 mb-2">Search</label>
                    <div className="sm:flex">
                        <input
                            className="p-3 mr-1 basis-2/3 bg-slate-100 text-black outline-none font-normal text-base sm:w-144 w-full"
                            type="text"
                            id='search'
                            placeholder="Search..."
                            onChange={handleChangeInput} />
                        <button
                            className="md:ml-9 mt-2 md:mt-0 w-full basis-1/3 bg-blue-600 rounded-3xl px-5 py-3 font-medium text-sm hover:bg-blue-500 shadow-lg shadow-blue-500/50"
                            onClick={() => { handleSearch() }}>
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
            <div className="main">
                <h2 className="w-full backGroundGradient font-normal text-4xl pl-7 py-3">Search result</h2>
                <div className="container ">
                    <div className="sort mt-7 px-3 sm:mx-0">
                        <p className="font-medium text-lg mb-1">Price</p>
                        <select className="sm:w-443 w-full font-normal text-base outline-none bg-slate-100 py-2"
                            onChange={handleChangeSelection}>
                            <option>decrease</option>
                            <option>increase</option>
                        </select>
                        <div className="sm:w-443 w-full font-normal text-base outline-none bg-slate-100 py-2 mt-2 pl-1">
                            ascending
                        </div>
                    </div>
                    <div className="w-full">
                        <Product arrProductsSearch={arraySearch} />
                    </div>
                </div>
            </div>
        </>
    )
}
