import React from 'react'
import { useNavigate } from 'react-router-dom';
// import urlProduct from '../../assets/img/shoes.png'

export default function ItemProduct({product}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="xl:w-334 md:w-72 itemProduct bg-slate-100 overflow-hidden w-full px-3 md:px-0">
                <div className="relative">
                    <img
                        src={product?.image}
                        alt="..."
                        className="object-cover px-14 py-10 " />
                    <div className='text-red-500 hover:text-red-900 cursor-pointer '>
                        <svg
                            class="w-6 h-6 absolute top-8 right-7 z-30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364 L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            >
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="px-6 mb-2 h-24">
                        <p className="font-semibold text-2xl h-16">{product?.name}</p>
                        <p className="text-xl text-slate-400 truncate ... overflow-hidden">{product?.shortDescription}</p>
                    </div>
                    <div className="flex sm:justify-start">
                        <button className="basis-1/2 text-black bg-orange-500 font-normal text-2xl py-2 hover:bg-orange-700"
                            onClick={() => { navigate(`/detail/${product?.id}`), window.scrollTo(0, 0); }}
                        >
                            Buy Now
                        </button>
                        <p className="basis-1/2 p-2 font-normal text-2xl text-center">{product?.price}$</p>
                    </div>
                </div>
            </div>
        </>
    )
}
