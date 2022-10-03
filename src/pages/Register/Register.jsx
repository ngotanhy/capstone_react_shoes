import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { http } from '../../util/config';

//toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../componets/Toast/Toast';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      name: '',
      gender: 'male',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email không được bỏ trống').email('Email không đúng định dạng vidu:abc@gmail.com'),
      password: Yup.string().required('Password không được bỏ trống').min(3, 'Password từ 3 đến 32 kí tự').max(32, 'Password từ 3 đến 32 kí tự'),
      passwordConfirm: Yup.string().required('Password không được bỏ trống').when("password", { is: val => (val && val.length > 0 ? true : false), then: Yup.string().oneOf([Yup.ref("password")], "PasswordConfirm không đúng ") }),
      name: Yup.string().required('Name không được bỏ trống'),
      phone: Yup.string().required('Phone không được bỏ trống')
      // .matches(/hi/,'password co chu hi')
    }),
    onSubmit: async (values) => {
      let userRegister = {
        email: values.email,
        password: values.password,
        name: values.name,
        gender: values.gender == 'male' ? true : false,
        phone: values.phone
      }

      let result = await http.post('/Users/signup', userRegister);
      result.data.statusCode === 200 ? notify(result.data.message, 'success'):notify('Hãy Đăng Kí lại', 'error')
    }
  });

  return (
    <>
      <div className='container'>
        <form className='' onSubmit={formik.handleSubmit} >
          <div className="md:flex md:mt-8 mt-12 w-full px-8 md:px-0 md:space-x-20">
            <div className="basis-1/2">
              <div className="w-full h-24">
                <label htmlFor="email" className='block'>Email</label>
                <input type="text"
                  className='bg-slate-200 outline-none p-2 font-normal text-base w-full'
                  id="email" placeholder="Email..."
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                {formik.errors.email ? <p className="text-red-600">{formik.errors.email}</p> : ''}
              </div>

              <div className="w-full h-24">
                <label htmlFor="password h-24" className='block'>Password</label>
                <input type="password"
                  className='bg-slate-200 outline-none p-2 font-normal text-base w-full'
                  id="password" placeholder="Password.."
                  // name="clearCache" autoComplete="off"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                {formik.errors.password ? <p className="text-red-600">{formik.errors.password}</p> : ''}
              </div>

              <div className="w-full h-24">
                <label htmlFor="password" className='block'>Password confirm</label>
                <input type="password"
                  className='bg-slate-200 outline-none p-2 font-normal text-base w-full'
                  id="passwordConfirm" placeholder="PasswordConfirm... "
                  // name="clearCache" autoComplete="off"
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.passwordConfirm ? <p className="text-red-600">{formik.errors.passwordConfirm}</p> : ''}
              </div>

            </div>


            <div className="basis-1/2 ">
              <div className="w-full h-24">
                <label htmlFor="name" className='block'>Name</label>
                <input type="text"
                  className='bg-slate-200 outline-none p-2 font-normal text-base w-full'
                  id="name" placeholder="name..."
                  // name="clearCache" autoComplete="off"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name ? <p className="text-red-600">{formik.errors.name}</p> : ''}
              </div>

              <div className="w-full h-24">
                <label htmlFor="phone" className='block'>Phone</label>
                <input type="text"
                  className='bg-slate-200 outline-none p-2 font-normal text-base w-full'
                  id="phone" placeholder="Phone..."
                  // name="clearCache" autoComplete="off"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone ? <p className="text-red-600">{formik.errors.phone}</p> : ''}
              </div>

              <div className="flex form-gender mt-2">
                <label htmlFor className="font-medium text-lg">Gender</label>
                <div className="flex justify-center">
                  <div className="form-check ml-3">
                    <input className="form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="gender" defaultChecked value='male'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="gender">
                      Male
                    </label>
                  </div>
                  <div className="form-check ml-3">
                    <input className="form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="gender" value='female'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="gender">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 rounded-3xl py-3 px-5 w-36 mb-24 mt-5 text-white hover:bg-blue-500" id="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  )
}
