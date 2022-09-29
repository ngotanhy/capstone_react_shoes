import React from 'react'
import { useSelector } from 'react-redux';
import ItemCartMobile from './itemCartMobile';


export default function CartMobile() {
    const { arrProductsOrder } = useSelector(state => state.productReducer);
    return (
        <>
            {arrProductsOrder?.map((product) => {
                return <ItemCartMobile product={product} key={product.size} />
            })
            }
        </>
    )
}
