import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { pushProductOrders } from '../../redux/reducer/productReducer';
import { truncateString } from '../../util/templates';
//toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../componets/Toast/Toast';


export default function ItemDetail({ product }) {
    const dispatch = useDispatch();
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);


    const handleQuantity = (number) => {
        setQuantity(quantity + number);
        if (quantity === 0) {
            setQuantity(1);
        }
    }

    const addToCart = () => {
        if (size == 0) {
            notify('Hãy chọn size cho giày', 'error')
        } else {
            let productAddToCart = {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                size: size,
                quantity: quantity,
                image: product.image
            }
            const action = pushProductOrders(productAddToCart);
            dispatch(action);
            notify('Thêm thành công', 'success')
        }
    }


    return (
        <>
            <div className="container">
                <div className="md:flex md:mt-5 mt-14 ">
                    <div className="md:basis-1/3 flex justify-center items-center md:mr-10 w-full">
                        <img src={product?.image} alt='...' className='md:w-full w-80% h-18rem sm:h-80 sm:w-72' />
                    </div>
                    <div className="md:basis-2/3 px-5 md:px-0 ">
                        <h2 className="font-light text-3xl">{product?.name}</h2>
                        <p className="font-normal text-base">{truncateString(product?.description)}</p>
                        <p className="font-medium text-2xl text-green-500">Available size</p>
                        <div className="flex md:gap-x-6 gap-x-1 md:mt-2 ">
                            {product?.size?.map((item, index) => {
                                return <div className={item === size ? 'w-12 h-12 bg-red-600 text-white relative' : 'w-12 h-12 bg-slate-200 relative hover:shadow-red-500 hover:shadow-lg'} key={index}>
                                    <button className="absolute font-semibold text-2xl "
                                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                                        onClick={() => { setSize(item) }}>
                                        {item}
                                    </button>
                                </div>
                            })}
                        </div>
                        <div className="font-semibold text-3xl text-red-700 mt-2">{product?.price}$</div>
                        <div className="flex mb-2 mt-2">
                            <div className="w-12 h-12 relative backGroundGradient z-0">
                                <button className="absolute font-semibold text-2xl w-12 h-12 z-10 hover:shadow-purple-400 hover:shadow-lg"
                                    style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                                    onClick={() => handleQuantity(1)}>+</button>
                            </div>
                            <p className="text-center pt-3 w-12 h-12 font-normal text-3xl">{quantity}</p>
                            <div className="w-12 h-12 relative backGroundGradient">
                                <button className="absolute font-semibold text-2xl  w-12 h-12 z-10 hover:shadow-purple-400 hover:shadow-lg"
                                    style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                                    onClick={() => handleQuantity(-1)}>-</button>
                            </div>
                        </div>
                        <button className="backGroundGradient py-3 px-7 font-medium text-2xl mb-7 hover:shadow-purple-400 hover:shadow-lg w-full sm:w-334 "
                            onClick={addToCart}
                        > Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1000} />
        </>
    )
}
