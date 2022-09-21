import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <nav className="flex sm:justify-start space-x-4 bg-slate-600 text-white p-3">
      {[
        ['Home', '/home'],
        ['Login', '/login'],
        ['Profile', '/profile'],
        ['Cart', '/cart'],
        ['Cart', '/cart'],
        ['Detail', '/detailProduct/'],

      ].map(([title, url]) => (
        <NavLink to={url} className="rounded-lg px-3 test py-2 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</NavLink>
      ))}
    </nav>
  )
}
