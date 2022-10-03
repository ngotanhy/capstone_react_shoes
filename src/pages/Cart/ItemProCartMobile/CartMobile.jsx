import React from 'react'
import { useSelector } from 'react-redux';
import { clearLocalStorage } from '../../../util/config';
import ItemCartMobile from './itemCartMobile';


export default function CartMobile() {
    const { arrProductsOrder } = useSelector(state => state.productReducer);
    return (
        <>
            {arrProductsOrder.length === 0 ? clearLocalStorage('arrProductsOrder') :
                arrProductsOrder?.map((product) => {
                    return <ItemCartMobile key={product.size} product={product} />
                })}
        </>
    )
}
