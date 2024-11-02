import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext';

const NewTask = ({data}) => {
    const { userData, updateUserData } = useContext(AuthContext);

    const acceptTask = (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
        const user = userInfo.data;
        
        // Create a copy of employees with the task updated
        const updatedEmployees = userData.employees.map((employee) => {
            if (employee.firstName === user.firstName) {
                const task = employee.tasks.find((task) => task.title === data.title);
                if (task) {
                    task.active = true;
                    task.newTask = false;
                    employee.taskSummary.active += 1;
                    employee.taskSummary.newTask -= 1;
                }
            }
            return employee;
        });
        
        // Use the context's function to update userData and trigger re-render
        updateUserData(updatedEmployees);
    };
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-deepPlum rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-rustOrange  text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
                
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-6'>
                <button onClick={(e)=>{
                    acceptTask(e);
                }} className='bg-brightMaroon rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask;