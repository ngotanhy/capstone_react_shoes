import React from 'react'
import ItemOrder from './ItemOrder'

export default function Order({orderHistory}) {
    return (
        <div className="container">
            <div className="font-normal text-3xl flex  mt-4">
                <h3 className="border-b-2 border-l-2 border-slate-300 px-2 text-purple-900">Order history</h3>
                <h3 className="border-b-2 border-l-2 border-r-2 border-slate-300 px-2">Favourite</h3>
            </div>
            <div className="ml-8">
                {orderHistory?.map((item, index) =>{
                    return <ItemOrder order={item} key={index}/>
                })}
            </div>
            
        </div>
    )
}
