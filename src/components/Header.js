import React from 'react'

const Header = (props) => {
       const {onChangeUser,userName} = props
     const logOutUser = ()=>{
      localStorage.setItem("loggedInUser",'');
       onChangeUser('');
     }
  return (
    <div className=' m-0 flex items-end justify-between md:m-4 '>
    <h1 className='text-3xl font-medium pl-4 text-yellow-400'>Hello <br /> <span className='text-3xl font-semibold text-yellow-400'>{userName} 👋</span></h1>
    <button onClick={logOutUser} className='bg-burntOrange text-base  font-medium text-white px-5 py-2 mt-9 mr-4 rounded-sm'>Log Out</button>
</div>
  )
}

export default Header