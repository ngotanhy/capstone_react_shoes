import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { pushProductOrders } from '../../redux/reducer/productReducer';


export default function DetailItemProduct({ product }) {
    let { arrProductsOrder } = useSelector(state => state.productReducer)
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
            alert('hay chon size ')
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
            console.log(productAddToCart)
            let newArrProductsOrder = [...arrProductsOrder];
            console.log(newArrProductsOrder);
            if (newArrProductsOrder.length > 1) {
                let index = newArrProductsOrder.findIndex(item => item.id === productAddToCart.id && item.size === productAddToCart.size);
                console.log(newArrProductsOrder[index])
                if (index !== -1) {
                    // let productIndex = newArrProductsOrder[index];
                    // productIndex.quantity = 10
                } else {
                    newArrProductsOrder.push(productAddToCart);
                }
            } else {
                newArrProductsOrder.push(productAddToCart);
            }
            const action = pushProductOrders(newArrProductsOrder);
            dispatch(action);
        }
    }

    return (
        <div className="container">
            <div className="flex mt-5">
                <div className="basis-1/3 relative mr-10">
                    <img src={product?.image} alt='...' className='absolute'
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                    />
                </div>
                <div className="basis-2/3">
                    <h2 className="font-light text-3xl">{product?.name}</h2>
                    <p className="font-normal text-base">{product?.description}</p>
                    <p className="font-medium text-2xl text-green-500">Available size</p>
                    <div className="flex gap-x-6 mt-2">
                        {product?.size?.map((item, index) => {
                            return <div className={item === size ? 'w-12 h-12 bg-red-600 text-white relative' : 'w-12 h-12 bg-slate-200 relative'} key={index}>
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
                        <div className="w-12 h-12 relative backGroundGradient">
                            <button className="absolute font-semibold text-2xl"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                                onClick={() => handleQuantity(1)}>+</button>
                        </div>
                        <p className="text-center pt-3 w-12 h-12 font-normal text-3xl">{quantity}</p>
                        <div className="w-12 h-12 relative backGroundGradient">
                            <button className="absolute font-semibold text-2xl "
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                                onClick={() => handleQuantity(-1)}>-</button>
                        </div>
                    </div>
                    <button className="backGroundGradient py-3 px-7 font-medium text-2xl mb-7"
                        onClick={addToCart}
                    > Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
