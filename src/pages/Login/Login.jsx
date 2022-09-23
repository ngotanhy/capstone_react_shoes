import React from 'react'

export default function Login() {
  return (
    <>
      <div className="container ">
        <h2 className="font-normal text-4xl mt-10 mb-4 pb-5 border-b-2  border-slate-900">Login</h2>
        <div className="flex justify-center">
          <form className='mb-2'>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-443 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email..."
                required />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-900 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-443 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='password...'
                required />
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-end h-5">
                <span className="font-medium text-lg mr-4 text-blue-400">Register now ?</span>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  LOGIN
                </button>
              </div>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl text-sm min-w-full mt-4 px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                Continue with Facebook
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
