import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/AuthContext';

const AllTask = () => { 
  const {userData} = useContext(AuthContext);
  return (
    <div className = "mt-6 mx-3 bg-[#1c1c1c] ">
          <div  className="border-2 bg-red-950 border-green-900  text-white mb-2 py-2 px-4 flex justify-between rounded"> 
          <h2 className = "text-xs md:text-xl font-medium w-1/5">Employee<br/><span>Name</span></h2> 
          <h3 className = "text-xs md:text-xl font-medium w-1/5 pl-3">New <br/><span>Task</span></h3>
          <h4 className = "text-xs md:text-xl font-medium w-1/5">Active<br/><span>Task</span></h4>
          <h4 className = "text-xs md:text-xl font-medium w-1/5">Completed</h4>
          <h5 className = "text-xs md:text-xl font-medium w-1/5 pl-7">Failed</h5>
         </div>
        {userData.employees.map((elem)=>{
       return (
        <div  className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-sm md:text-lg font-medium text-white w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400 pl-4'>{elem.taskSummary.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400 pl-3'>{elem.taskSummary.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white pl-6'>{elem.taskSummary.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600 pl-9'>{elem.taskSummary.failed}</h5>
        </div>
         ) })}
       
    </div>
  )
}

export default AllTask;