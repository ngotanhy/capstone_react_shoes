import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrProducts: [],
    productById: [],
    arrProductsOrder: []
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setArrProduct: (state, { payload }) => {
            state.arrProducts = payload;
        },
        setProductByID: (state, { payload }) => {
            state.productById = payload;
        },
        pushProductOrders: (state, { payload }) => {
            state.arrProductsOrder = payload;
        },
        deleteProductOrder: (state, { payload }) => {
            let newArrProductsOrder = [...state.arrProductsOrder].filter(item => item !== null);
            let orderFilter = newArrProductsOrder.filter(item => item.id !== payload.id && item.size !== payload.size)
            state.arrProductsOrder = orderFilter;
        }
    }
});

export const { setArrProduct, setProductByID, pushProductOrders, deleteProductOrder } = productReducer.actions

export default productReducer.reducer




// -----   action thunk (api)--------------------------------


export const getProductApi = () => {
    return async dispatch => {
        try {
            const result = await http.get('/Product');
            console.log(result)
            const action = setArrProduct(result.data.content);
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductId = (id) => {
    return async dispatch => {
        try {
            const result = await http.get(`/Product/getbyid?id=${id}`)
            const action = setProductByID(result.data.content)
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}


// export const checkSimilarProductInList = (arrProducts, productOrder) => {
//     console.log(arrProducts, productOrder);
//     let newArrProduct = [...arrProducts];
//     newArrProduct.push(productOrder);
//     if (newArrProduct.length > 0) {
//         return dispatch => {
//             for (let i = 0; i < newArrProduct.length; i++) {
//                 let count = 0;
//                 let obj1 = newArrProduct[i];
//                 count = obj1?.quantity;
//                 for (let j = newArrProduct.length - 1; j >= i + 1; j--) {
//                     let obj2 = newArrProduct[j];
//                     if (obj1.size === obj2.size && obj1.id === obj2.id) {
//                         count += obj2?.quantity;
//                         newArrProduct.splice(j, 1);
//                     }
//                 }
//                 newArrProduct[i]?.quantity = count
//             }
//             let action = pushProductOrders(newArrProduct);
//             dispatch(action)
//         }
//     }
// }
