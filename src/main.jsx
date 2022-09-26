import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom'


//cai history npm install --save history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';

//Cấu hình redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore'


import HomeTemplate from './templates/HomeTemplate'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Profile from './pages/Profile/Profile'
import Cart from './pages/Cart/Cart'
// import { router } from './route/arrRoute'

//scss
import './assets/scss/style.scss';
import Search from './pages/Search/Search';

//Cấu hình react router dom
export const history = createBrowserHistory({ window });


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* thay BrowserRouter thanh historyRouter */}
    <HistoryRouter history={history}>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path='' element={<HomeTemplate />}>
        
          <Route index element={<Home />} />

          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='search' element={<Search />} />
          <Route path='profile' element={<Profile />} />


          <Route path='detail'>
            <Route path=':id' element={<DetailProduct />} />
          </Route>

          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<Profile />} />

          <Route path='*' element={<Navigate to='' />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
)
