import React from 'react'

export default function TrTable() {
    return (
        <tr >
            <td className='pl-2 text-blue-700 hover:text-blue-900 cursor-pointer'>
                <svg class="w-6 h-6"
                    fill="none" stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                </svg>
            </td>
            <td className='py-2 pl-2'>id</td>
            <td className='py-2 pl-2'>
                <img src='./assets/img/shoes.png' alt='...' className='w-12 h-12' />
            </td>
            <td className='py-2 pl-2'>bai tap capstone vl</td>
            <td className='py-2 pl-2'>86$</td>
            <td className='py-2 pl-2 flex gap-x-4'>
                <div className="w-10 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>+</button>
                </div>
                <div className="font-normal text-xl text-center pt-1">1</div>
                <div className="w-10 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50">
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>-</button>
                </div>
            </td>
            <td className='py-2 pl-2'>86$</td>
            <td className='py-2 pl-5 flex gap-x-3 justify-center'>
                <div className='w-20 h-10 relative bg-blue-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50'>
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Edit</button>
                </div>
                <div className=' w-20 h-10 relative bg-red-600 rounded-xl hover:shadow-lg hover:shadow-red-500/50'>
                    <button className="absolute font-semibold text-2xl text-white"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Delete</button>
                </div>

            </td>
        </tr>
    )
}
