import React, { useEffect, useState } from 'react'
import '../../../assets/scss/pages/_profile.scss';
export default function Info({ userLogin }) {
    const [iscCheckGender, setIsCheckGender] = useState('male');

    // console.log(r)

    // const handleUrlAvatar = () => {
    //     let urlAvatar = userLogin?.avatar
    //     console.log(urlAvatar)
    //     let url = urlAvatar.replace(`${userLogin?.email}`, '');
    //     console.log(url)
    // }
    useEffect(() => {
        if (userLogin?.gender === false) {
            setIsCheckGender('female');
        }
    }, [])
    return (
        <div className='border-b-2 border-slate-800'>
            <div className="container flex">
                <div className="basis-1/4 rounded-full h-300 w-100 bg-slate-200 overflow-hidden mr-10 relative">
                    <img className="rounded-full absolute imageInfo" src='./assets/img/shoes.png' alt="..." />
                </div>

                <form className='basis-3/4'>
                    <div className="flex">
                        <div className="basis-1/2 register-left ">
                            <div className="w-full">
                                <label htmlFor="email" className='block'>Email</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="email" placeholder=" " value={userLogin?.email} name="clearCache" autoComplete="off" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="phone" className='block'>Phone</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="phone" placeholder=" " name="clearCache" autoComplete="off" value={userLogin?.phone} />
                            </div>
                        </div>


                        <div className="basis-1/2 register-right">
                            <div className="w-full">
                                <label htmlFor="name" className='block'>Name</label>
                                <input type="text" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="name" placeholder=" " name="clearCache" autoComplete="off" value={userLogin?.name} />
                            </div>

                            <div className="w-full">
                                <label htmlFor="password" className='block'>Password</label>
                                <input type="password" className='bg-slate-200 outline-none p-2 font-normal text-base w-full' id="password" placeholder=" " name="clearCache" autoComplete="off" value={userLogin?.password ? userLogin?.password : '****'} />
                            </div>

                            <div className="flex form-gender mt-2">
                                <label htmlFor className="font-medium text-lg">Gender</label>
                                <div className=" form-checked">
                                    <ul className="flex">
                                        <li className="type basis-1/2">
                                            <input id="male" type="radio" name="selector" checked={iscCheckGender === 'male' ? true : false} />
                                            <label htmlFor="male" className="ml-4">Male</label>
                                            <div className="check" />
                                        </li>
                                        <li className="type basis-1/2">
                                            <input id="female" type="radio" name="selector" checked={iscCheckGender === 'female' ? true : false} />
                                            <label htmlFor="female" className="ml-4">Female</label>
                                            <div className="check" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <button className="bg-blue-600 rounded-3xl py-3 px-5 w-full mb-20 mt-5 text-white" id="submit">
                                UPDATE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
