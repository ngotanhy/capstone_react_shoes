import React, { useEffect, useState } from 'react'
import '../../../assets/scss/pages/_profile.scss';
export default function Info({ userProfile }) {
    const [iscCheckGender, setIsCheckGender] = useState('male');

    // console.log(r)

    const handleUrlAvatar = () => {
        let urlAvatar = userProfile?.avatar
        let index = urlAvatar?.indexOf('=');
        let url = urlAvatar?.slice(0, index) + '=6'
        return url
    }

    useEffect(() => {
        if (userProfile?.gender === false) {
            setIsCheckGender('female');
        }
    }, [])
    return (
        <div className='border-b-2 border-slate-800'>
            <div className="container sm:flex px-6 ">
                <div className="sm:basis-1/4 rounded-full sm:h-300 h-28 sm:w-full w-28 overflow-hidden mr-10 relative mt-2 md:mt-0">
                    <img className="rounded-full absolute imageInfo w-full" src={handleUrlAvatar()} alt="..." />
                </div>

                <form className='sm:basis-3/4 register-right md:pl-16 '>
                    <div className="md:flex sm:gap-x-7">
                        <div className="basis-1/2 ">
                            <div className="w-full">
                                <label htmlFor="email" className='block'>Email</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="email" placeholder=" " value={userProfile?.email} name="clearCache" autoComplete="off" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="phone" className='block'>Phone</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="phone" placeholder=" " name="clearCache" autoComplete="off" value={userProfile?.phone} />
                            </div>
                        </div>


                        <div className="basis-1/2 ">
                            <div className="w-full">
                                <label htmlFor="name" className='block'>Name</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="name" placeholder=" " name="clearCache" autoComplete="off" value={userProfile?.name} />
                            </div>

                            <div className="w-full">
                                <label htmlFor="password" className='block'>Password</label>
                                <input type="password" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="password" placeholder=" " name="clearCache" autoComplete="off" value={userProfile?.password ? userProfile?.password : '****'} />
                            </div>

                            <div className="sm:flex form-gender mt-2">
                                <label htmlFor className="font-medium text-lg">Gender</label>
                                <div className=" form-checked">
                                    <ul className=" sm:flex">
                                        <li className="type basis-1/2">
                                            <input id="male" type="radio" name="selector" checked={iscCheckGender === 'male' ? true : false} />
                                            <label htmlFor="male" className="ml-4">Male</label>
                                            <div className="check " />
                                        </li>
                                        <li className="type basis-1/2 mt-3 sm:mt-0">
                                            <input id="female" type="radio" name="selector" checked={iscCheckGender === 'female' ? true : false} />
                                            <label htmlFor="female" className="ml-4">Female</label>
                                            <div className="check" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <button className="bg-blue-600 rounded-3xl py-3 px-5 w-full md:mb-20 mb-10 mt-5 text-white" >
                                UPDATE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
