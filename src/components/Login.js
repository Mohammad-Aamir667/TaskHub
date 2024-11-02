import React, { useRef, useState } from 'react'
const Login = ({handleLogin}) => {
   const email = useRef(null);
   const password = useRef(null);
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email.current.value,password.current.value);    
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' -mt-64 p-10 border-2 rounded-xl border-emerald-600 md:p-20 md:mt-0'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                ref={email} 
                required 
                className='outline-none bg-transparent text-white border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
               ref ={password}
                required 
                className='outline-none bg-transparent  text-white border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login