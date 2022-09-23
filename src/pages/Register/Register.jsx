import React from 'react'

export default function Register() {
  return (
    <div className='container   '>
      <form className='basis-3/4'>
        <div className="flex mt-8">
          <div className="basis-1/2 register-left">
            <div className="w-full">
              <label htmlFor="email" className='block'>Email</label>
              <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="email" placeholder="Email..." name="clearCache" autoComplete="off" />
              <div className="email">(*)</div>
            </div>

            <div className="w-full">
              <label htmlFor="password" className='block'>Password</label>
              <input type="password" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="password" placeholder="Password.." name="clearCache" autoComplete="off" />
              <div className="password">(*)</div>
            </div>

            <div className="w-full">
              <label htmlFor="password" className='block'>Password confirm</label>
              <input type="password" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="passwordConfirm" placeholder="PasswordConfirm... " name="clearCache" autoComplete="off" />
              <div className="passwordConfirm">(*)</div>
            </div>

          </div>


          <div className="basis-1/2 register-right">
            <div className="w-full">
              <label htmlFor="name" className='block'>Name</label>
              <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="name" placeholder="name..." name="clearCache" autoComplete="off" />
              <div className="Name">(*)</div>
            </div>

            <div className="w-full">
              <label htmlFor="phone" className='block'>Phone</label>
              <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="phone" placeholder="Phone..." name="clearCache" autoComplete="off" />
              <div className="Phone">(*)</div>
            </div>

            <div className="flex form-gender mt-2">
              <label htmlFor className="font-medium text-lg">Gender</label>
              <div className=" form-checked">
                <ul className="flex">
                  <li className="type basis-1/2">
                    <input id="male" type="radio" name="selector" defaultChecked />
                    <label htmlFor="male" className="ml-4">Male</label>
                    <div className="check" />
                  </li>
                  <li className="type basis-1/2">
                    <input id="female" type="radio" name="selector" />
                    <label htmlFor="female" className="ml-4">Female</label>
                    <div className="check" />
                  </li>
                </ul>
              </div>

            </div>
            <button className="bg-blue-600 rounded-3xl py-3 px-5 w-36 mb-24 mt-5 text-white hover:bg-blue-500" id="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
