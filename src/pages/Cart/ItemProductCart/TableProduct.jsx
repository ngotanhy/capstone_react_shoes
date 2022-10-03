import React from 'react'
import { useSelector } from 'react-redux'
import { clearLocalStorage } from '../../../util/config'
import ItemProduct from './ItemTable'

export default function TableProduct() {
    const { arrProductsOrder } = useSelector(state => state.productReducer)
    return (
        <>
            <div className="min-w-full font-normal text-xl mt-3 bg-slate-300 flex flex-row justify-center" style={{ alignItems: 'center' }}>
                <div className='pt-2 pl-3 text-blue-700 hover:text-blue-900 cursor-pointer basis-1/12'>
                    <svg class="w-6 h-6"
                        fill="none" stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                </div>
                <div className='py-2 basis-1/12'>ID</div>
                <div className='py-2  basis-1/12 pr-5'>Img</div>
                <div className='py-2  basis-3/12'> Name</div>
                <div className='py-2  basis-1/12'>size</div>
                <div className='py-2  basis-1/12'>Price</div>
                <div className='py-2  basis-2/12'>Quantity</div>
                <div className='py-2  basis-1/12'>Total</div>
                <div className='py-2  text-center basis-2/12'>Action</div>
            </div>
            <div className='overflow-auto' style={{ height: '195px' }}>
                {arrProductsOrder.length === 0 ? clearLocalStorage('arrProductsOrder') :
                    arrProductsOrder?.map((product) => {
                        return <ItemProduct key={product.size} product={product} />
                    })}
            </div>
        </>
    )
}
