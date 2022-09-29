import React from 'react'

export default function ItemOrder({ itemOrder , index}) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <tr className='' >
            <td className='py-2 pl-2'>{index}</td>
            <td className='py-2 pl-2 w-20 h-20' >
                <img src={itemOrder?.image} alt='...' className="w-full h-full" />
            </td>
            <td className='py-2 pl-2'>{itemOrder?.name}</td>
            <td className='py-2 pl-2'>{itemOrder?.price}</td>
            <td className='py-2 pl-2'>{itemOrder?.quantity}</td>
            <td className='py-2 pl-2'>{formatter.format(itemOrder?.price * itemOrder?.quantity)}$</td>
        </tr>

    )
}
