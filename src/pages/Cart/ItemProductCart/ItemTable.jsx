import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteProductOrder, updateQuantity } from '../../../redux/reducer/productReducer';

export default function ItemTable({ product }) {
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
    }, [quantity])

    return (
        <div className=" flex flex-row font-normal text-xl" style={{ alignItems: 'center' }}>
            <div className='pt-2 basis-1/12 text-blue-700 hover:text-blue-900 cursor-pointer pl-3'>
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
            <div className='basis-1/12'>{product?.id}</div>
            <div className='basis-1/12 pr-5'>
                <img src={product?.image} alt='...' className='w-full h-full' />
            </div>
            <div className='basis-3/12 pl-1'>{product?.name}</div>
            <div className='basis-1/12 pl-1'>{product?.size}</div>
            <div className='basis-1/12'>{product?.price}$</div>
            <div className='flex gap-x-4 basis-2/12'>
                <div className="w-10 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                        onClick={() => { handleQuantity(1) }}
                    >+</button>
                </div>
                <div className="font-normal text-xl text-center pt-1">{quantity}</div>
                <div className="w-10 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                        onClick={() => { handleQuantity(-1) }}
                    >-</button>
                </div>
            </div>
            <div className='basis-1/12'>{Number(product?.price) * Number(quantity)}$</div>
            <div className='flex gap-x-3 justify-center basis-2/12'>
                <div className='w-20 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50'>
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Edit</button>
                </div>
                <div className=' w-20 h-10 relative bg-red-600 rounded-xl hover:shadow-lg hover:shadow-red-500/50'>
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
    )
}
