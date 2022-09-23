import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrProducts: [],
    product: [],
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setArrProduct: (state, { payload }) => {
            state.arrProducts = payload;
        },
        setProductByID: (state, { payload }) => {
            state.product = payload;
        }
    }
});

export const { setArrProduct, setProductByID } = productReducer.actions

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