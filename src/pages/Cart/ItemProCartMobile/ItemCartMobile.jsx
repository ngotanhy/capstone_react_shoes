import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteProductOrder, updateQuantity } from '../../../redux/reducer/productReducer';

export default function ItemCartMobile({ product }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product?.quantity);

    const handleQuantity = (number) => {
        setQuantity(quantity + number);
        if (quantity === 0) {
            setQuantity(1);
        }
    }

    useEffect(() => {
        let payload = {
            id: product.id,
            quantity: quantity,
            size: product.size
        }
        const action = updateQuantity(payload);
        dispatch(action);
    }, [quantity]);

    return (
        <div className=" font-normal text-xl flex" style={{ alignItems: 'center' }}>
            <div className="basis-2/5">
                <div className='basis-1/12'>{product?.id}</div>
                <div className='basis-1/12 pr-5'>
                    <img src={product?.image} alt='...' className='w-full h-full' />
                </div>
            </div>
            <div className='basis-3/5'>
                <div className='basis-3/12 text-center font-semibold'>{product?.name}</div>
                <div className='basis-1/12'>size:{product?.size}</div>
                <div className='basis-1/12 text-red-700 font-semibold'>{product?.price}$</div>
                <div className='flex gap-x-4 basis-2/12'>
                    <div className="w-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                        <button className="absolute font-semibold text-2xl text-white"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                            onClick={() => { handleQuantity(1) }}
                        >+</button>
                    </div>
                    <div className="font-normal text-xl text-center">{quantity}</div>
                    <div className="w-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                        <button className="absolute font-semibold text-2xl text-white"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                            onClick={() => { handleQuantity(-1) }}
                        >-</button>
                    </div>
                </div>
                <div className='flex basis-2/12 mt-2'>
                    <div className=' w-full h-6 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50'>
                        <button className="absolute font-semibold text-2xl text-white"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Edit</button>
                    </div>
                    <div className='w-full h-6 relative bg-red-600 rounded-xl hover:shadow-lg hover:shadow-red-500/50'>
                        <button className="absolute font-semibold text-2xl text-white"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                            onClick={() => {
                                const action = deleteProductOrder(product)
                                dispatch(action);
                            }
                            }>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
