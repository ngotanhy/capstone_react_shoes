import React from 'react'

export default function ItemOrder() {
    return (
        <div className="mb-40 mt-4 ">
            <p className='font-normal text-xl text-purple-900'>+ Orders have been placed on 09 - 19 - 2020</p>
            <table className='table-fixed min-w-full font-normal text-xl text-left mt-4'>
                <thead className='bg-slate-300 '>
                    <tr>
                        <th className='py-2 pl-2'>ID</th>
                        <th className='py-2 pl-2'>Img</th>
                        <th className='py-2 pl-2'> Name</th>
                        <th className='py-2 pl-2'>Price</th>
                        <th className='py-2 pl-2'>Quantity</th>
                        <th className='py-2 pl-2'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className='py-2 pl-2'>id</td>
                        <td className='py-2 pl-2'>adsdfdsfada</td>
                        <td className='py-2 pl-2'>name</td>
                        <td className='py-2 pl-2'>price</td>
                        <td className='py-2 pl-2'>quantity</td>
                        <td className='py-2 pl-2'>total$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
