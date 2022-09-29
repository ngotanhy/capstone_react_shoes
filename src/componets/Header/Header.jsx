import React from 'react'
import { NavLink } from 'react-router-dom'
import SubHeader from './SubHeader'

export default function Header() {
  return (
    <>
      <SubHeader/>
      <nav className="md:flex sm:justify-start space-x-4 bg-slate-600 text-white">
        {[
          ['Home', '/home'],
          ['Men', '/'],
          ['Woman', '/'],
          ['Kid', '/'],
          ['Sport', '/'],
        ].map(([title, url], index) => (
          <NavLink to={url} className="rounded-lg px-3 test py-2 font-medium hover:text-slate-300" key={index}>{title}</NavLink>
        ))}
      </nav>
    </>
  )
}
