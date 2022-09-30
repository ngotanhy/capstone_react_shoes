import React, { useEffect, useState } from 'react'
export default function Toast({ content, type }) {
    const [color, setColor] = useState('green')
    const [isOpen, setIsOpen] = useState(true)
    const handleChangeColor = () => {
        switch (type) {
            case 'success': {
                setColor('green')
                setIsOpen(true)
                break;
            }
            case 'fairly': {
                setColor('red')
                setIsOpen(true)
                break;
            }
            case 'waning': {
                setColor('yellow')
                setIsOpen(true)
                break;
            }
            default: break;
        }
        setTimeout(() => { setIsOpen(false) }, 1000)
    }
    useEffect(() => {handleChangeColor()},[])
    return (
        <>
            {isOpen ? <div className={`absolute top-0 right-10 sm:w-334 `}>
                <div id="toast-success" className={`flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-${color}-100 rounded-lg shadow`} role="alert">
                    <div className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-${color}-500 bg-${color}-100 rounded-lg`}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">{content}.</div>
                </div>
            </div> : ''}
        </>

    )
}
