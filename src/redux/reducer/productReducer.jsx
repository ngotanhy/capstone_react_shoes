import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {

}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {}
});

export const { } = productReducer.actions

export default productReducer.reducer


// -----   action thunk (api)--------------------------------


export const getProductApi = () => {
    return async dispatch => {
        try {
            const result = await http.get('/api/product');
            //    const action= setArrProduct(result.data.content);
            //   dispatch(actions)
        } catch (error) {
            console.log(error);
        }
    }
}