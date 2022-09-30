import React from 'react'
import { useNavigate } from 'react-router-dom';
import { truncateString } from '../../../util/templates';

export default function ItemCarousel({ product }) {
    const navigate = useNavigate();

    return (
        <div className="flex mt-11">
            <div className="basis-6/12 flex justify-center ">
                <img src={product?.image} className="block md:w-443 md:h-400 w-52 h-56 mt-16 md:mt-0" alt="..." />
            </div>
            <div className="basis-6/12 pt-24">
                <p className="font-light md:text-40px text-xl ">{product?.name}</p>
                <p className='font-light md:text-lg text-base h-20 '>{truncateString(product?.description)}</p>
                <button className="font-light text-xl py-2 px-5 bg-orange-400 text-white mt-2 hover:shadow-orange-600 hover:shadow-lg"
                    onClick={() => { navigate(`/detail/${product?.id}`); window.scrollTo(0, 0); }}>
                    BUY NOW
                </button>
            </div>
        </div>
    )
}
