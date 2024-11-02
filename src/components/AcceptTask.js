import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/AuthContext';

const AcceptTask = ({data}) => {
   const {userData,updateUserData} = useContext(AuthContext);
     const completeTask = (e)=>{
      e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
        const user = userInfo.data;
        const updatedEmployees = userData.employees.map((employee) => {
          if (employee.firstName === user.firstName) {
              const task = employee.tasks.find((task) => task.title === data.title);
              if (task) {
                  task.active = false;
                  task.completed = true;
                  employee.taskSummary.active -= 1;
                  employee.taskSummary.completed += 1;
              }
          }
          return employee;
      });
      
      // Use the context's function to update userData and trigger re-render
      updateUserData(updatedEmployees);
     }
     const failedTask = (e)=>{
        const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
        const user = userInfo.data;
        const updatedEmployees = userData.employees.map((employee) => {
          if (employee.firstName === user.firstName) {
              const task = employee.tasks.find((task) => task.title === data.title);
              if (task) {
                  task.active = false;
                  task.failed = true;
                  employee.taskSummary.active -= 1;
                  employee.taskSummary.failed += 1;
              }
          }
          return employee;
      });
      
      // Use the context's function to update userData and trigger re-render
      updateUserData(updatedEmployees);
     }
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-steelBlue rounded-xl text-white'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-deepLime text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick = {(e)=>{
                     completeTask(e);
                }} className='bg-royalPurple rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button  onClick = {(e)=>{
                     failedTask(e);
                }}className=' bg-red-600 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask