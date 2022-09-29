import React from 'react'
import ItemOrder from './ItemOrder'

export default function Order({ order }) {
    let arrOrderDetails = order.orderDetail;
    let key = 0;
    return (
        <div className="sm:ml-8 mx-3 ">
            <div className="mb-4 mt-4 ">
                <p className='font-normal text-xl text-purple-900'>{`+ Orders have been placed on ` + order.date}</p>
                <div className="overflow-auto pr-3">
                    <table className='md:table-fixed min-w-full font-normal text-xl text-left mt-4'>
                        <thead className='bg-slate-300 w-full'>
                            <tr className='w-full'>
                                <th className='py-2 pl-2'>ID</th>
                                <th className='py-2 pl-2'>Img</th>
                                <th className='py-2 pl-2'>Name</th>
                                <th className='py-2 pl-2'>Price</th>
                                <th className='py-2 pl-2'>Quantity</th>
                                <th className='py-2 pl-2'>Total</th>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
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
