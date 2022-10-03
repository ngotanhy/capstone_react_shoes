import { createSlice } from '@reduxjs/toolkit'
import { clearLocalStorage, getStoreJSON, http } from '../../util/config';

const initialState = {
    arrProducts: [],
    productById: [],
    arrProductsOrder: getStoreJSON('arrProductsOrder') !==null ? getStoreJSON('arrProductsOrder') : []
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
            let prod = { ...payload };
            let newArrProductsOrder = [...state.arrProductsOrder];
            let sp = newArrProductsOrder.find((p) => p.id === prod.id && Number(p.size) === Number(prod.size));
            if (sp) {
                sp.quantity += prod.quantity;
            } else {
                newArrProductsOrder.push(prod);
            }
            state.arrProductsOrder = newArrProductsOrder;
        },
        deleteProductOrder: (state, { payload }) => {
            let newArrProductsOrder = [...state.arrProductsOrder];
            let index = newArrProductsOrder.findIndex(item => item.id === payload.id && item.size === payload.size)
            newArrProductsOrder.splice(index, 1)
            state.arrProductsOrder = newArrProductsOrder
        },
        updateQuantity: (state, { payload }) => {
            let newArrProductsOrder = [...state.arrProductsOrder];
            let index = newArrProductsOrder.findIndex(item => item.id === payload.id && item.size === payload.size)
            if (index > -1) {
                newArrProductsOrder[index].quantity = payload.quantity;
            }
            state.arrProductsOrder = newArrProductsOrder;
        }
    }
});

export const { setArrProduct, setProductByID, pushProductOrders, deleteProductOrder, updateQuantity } = productReducer.actions

export default productReducer.reducer




// -----   action thunk (api)--------------------------------


export const getProductApi = () => {
    return async dispatch => {
        try {
            const result = await http.get('/Product');
            // console.log(result)
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

