import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';
import { history } from '../../main';

const initialState = {
    userLogin: getStoreJSON(USER_LOGIN),
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserLogin: (state, { payload }) => {
            state.userLogin = payload;
        },
    }
});

export const { setUserLogin,setUserRegister } = userReducer.actions

export default userReducer.reducer


// --------------------------------thunk call api ----------------------------------------------------
export const signInApi = (userLogin) => {
    //userLogin ={email:'', password:''}
    return async dispatch => {
        try {
            let result = await http.post('/Users/signin',userLogin);
            // await axios({
            //     url: 'https://shop.cyberlearn.vn/api/Users/signin',
            //     method: 'POST',
            //     data: userLogin})

            //luu lai token
            setStore(ACCESS_TOKEN, result.data.content.accessToken);
            setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30)

            //luu lai Email
            setStoreJSON(USER_LOGIN, result.data.content)

            // console.log(result);
            // dua len userLogin thanh cong len reducer
            const action = setUserLogin(result.data.content);
            dispatch(action);
            history.push('/profile');
        } catch (err) {
            console.log(err)
            alert('dăng nhap sai')
            // history.push('/login')
        }
    }
}

export const getProfileApi = () => {
    return async dispatch => {
        try {
            let result = await http.post('/Users/getProfile')
            console.log('ket qua', result.data.content);
            const action = setUserLogin(result.data.content);
            dispatch(action);
        } catch (err) {
            console.log(err);

        }
    }
}

