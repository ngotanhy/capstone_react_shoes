import React from 'react'
import '../../assets/scss/pages/_footer.scss';

export default function Footer() {
  return (
    <footer >
      <div className="flex sm:justify-evenly space-x-80 text-black ">
        <div className="">
          <h3 className="font-bold uppercase">Get Help</h3>
          <ul className="font-normal">
            <li>Home</li>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="borderLeft pl-16">
          <h3 className="font-bold uppercase">Orders</h3>
          <ul className="font-normal">
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Phone</li>
          </ul>
        </div>
        <div className="borderLeft pl-16">
          <h3 className="font-bold uppercase">Register</h3>
          <p className="font-normal">Register</p>
          <p className="font-normal">Login</p>
        </div>
      </div>
      <div className="flex sm:justify-center justify-items-center p-3 mt-4 bg-slate-500 text-white">
        <p className="font-semibold text-sm">
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
        </p>
      </div>
    </footer>
  )
}
