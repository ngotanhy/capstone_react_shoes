import React from 'react'
import TrTable from './TrTable'

export default function ItemProductCard() {
    return (
        <>
            <table className='table-fixed min-w-full font-normal text-xl text-left mt-4'>
                <thead className='bg-slate-300 '>
                    <tr>
                        <th className='pl-2 text-blue-700 hover:text-blue-900 cursor-pointer'>
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
                        </th>
                        <th className='py-2 pl-2'>ID</th>
                        <th className='py-2 pl-2'>Img</th>
                        <th className='py-2 pl-2'> Name</th>
                        <th className='py-2 pl-2'>Price</th>
                        <th className='py-2 pl-2'>Quantity</th>
                        <th className='py-2 pl-2'>Total</th>
                        <th className='py-2 pl-2 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TrTable/>
                    <TrTable/>
                    <TrTable/>
                    <TrTable/>
                </tbody>
            </table>
        </>
    )
}
