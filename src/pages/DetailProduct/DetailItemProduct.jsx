import React from 'react'
import { useParams } from 'react-router-dom'
import urlShoes from '../../assets/img/shoes.png';

export default function DetailItemProduct({ product }) {
    return (
        <div className="container">
            <div className="flex mt-5">
                <div className="basis-1/3 relative mr-10">
                    <img src={product?.image} alt='...' className='absolute'
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                    />
                </div>
                <div className="basis-2/3">
                    <h2 className="font-light text-3xl">{product?.name}</h2>
                    <p className="font-normal text-base">{product?.description}</p>
                    <p className="font-medium text-2xl text-green-500">Available size</p>
                    <div className="flex gap-x-6 mt-2">
                        {product?.size?.map((item, index) => {
                            return <div className="w-12 h-12 bg-slate-200 relative" key={index}>
                                <button className="absolute font-semibold text-2xl"
                                    style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                    {item}
                                </button>
                            </div>
                        })}
                    </div>
                    <div className="font-semibold text-3xl text-red-700 mt-2">{product?.price}$</div>
                    <div className="flex mb-2 mt-2">
                        <div className="w-12 h-12 relative backGroundGradient">
                            <button className="absolute font-semibold text-2xl"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>+</button>
                        </div>
                        <p className="text-center pt-3 w-12 h-12 font-normal text-3xl">1</p>
                        <div className="w-12 h-12 relative backGroundGradient">
                            <button className="absolute font-semibold text-2xl "
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>-</button>
                        </div>
                    </div>
                    <button className="backGroundGradient py-3 px-7 font-medium text-2xl mb-7">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
