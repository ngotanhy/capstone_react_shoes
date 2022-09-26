import React from 'react'
import ItemOrder from './ItemOrder'

export default function Order({ order }) {
    let arrOrderDetails = order.orderDetail;
    let key=0;
    return (
        <div className="container">
            <div className="font-normal text-3xl flex  mt-4">
                <h3 className="border-b-2 border-l-2 border-slate-300 px-2 text-purple-900">Order history</h3>
                <h3 className="border-b-2 border-l-2 border-r-2 border-slate-300 px-2">Favourite</h3>
            </div>
            <div className="ml-8">
                <div className="mb-40 mt-4 ">
                    <p className='font-normal text-xl text-purple-900'>{`+ Orders have been placed on ` + order.date}</p>
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
                            {arrOrderDetails?.map((item, index) => {
                                key++;
                                return <ItemOrder itemOrder={item} index={key} key={index} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
