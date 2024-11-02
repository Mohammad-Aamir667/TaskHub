import React, { useContext, useRef } from 'react';
import { AuthContext } from '../utils/AuthContext';

const CreateTask = () => {
  const taskTitle = useRef(null);
  const taskDescription = useRef(null);
  const taskDate = useRef(null);
  const assignTo = useRef(null);
  const category = useRef(null);
  const { userData, updateUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle.current.value,
      description: taskDescription.current.value,
      date: taskDate.current.value,
      category: category.current.value,
      active: false,
      failed: false,
      newTask: true,
      completed: false,
    };

    const updatedEmployees = userData.employees.map((employee) => {
      if (assignTo.current.value === employee.firstName) {
        employee.tasks.push(newTask);
        employee.taskSummary.newTask += 1;
      }
      return employee;
    });

    updateUserData(updatedEmployees);
    
    // Clear the form
    taskTitle.current.value = "";
    taskDescription.current.value = "";
    taskDate.current.value = "";
    assignTo.current.value = "";
    category.current.value = "";
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded '>
            <form onSubmit={(e)=>{
                 submitHandler(e);
            }}  className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input ref={taskTitle} className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input ref = {taskDate} className='text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input  ref ={assignTo} className ='text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input ref = {category} className='text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea ref={taskDescription} className='w-full h-44 text-white text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask