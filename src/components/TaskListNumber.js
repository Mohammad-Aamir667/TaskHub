import React from 'react';

const TaskListNumber = ({ data }) => {
  return (
    <div className="overflow-x-auto grid grid-cols-2 gap-3 mt-6 text-softIvory  md:grid-cols-2 lg:grid-cols-4 ">
      <div className="h-40 w-full bg-firstColor rounded-lg px-3 py-4">
        <h2 className="font-medium text-xl md:font-bold md:text-3xl">{data.taskSummary.newTask}</h2>
        <h3 className="text-white text-lg md:font-medium md:text-2xl">New Task</h3>
      </div>
      
      <div className="h-40 w-full bg-secondColor rounded-lg px-3 py-4">
        <h2 className="font-medium text-xl md:font-bold md:text-3xl">{data.taskSummary.completed}</h2>
        <h3 className="text-white text-lg md:font-medium md:text-2xl">Completed Task</h3>
      </div>
      
      <div className="h-40 w-full bg-thirdColor rounded-lg px-3 py-4">
        <h2 className="font-bold text-xl md:font-bold md:text-3xl">{data.taskSummary.active}</h2>
        <h3 className="text-white text-lg md:font-medium md:text-2xl">Accepted Task</h3>
      </div>
      
      <div className="h-40 w-full bg-fourthColor rounded-lg px-3 py-4">
        <h2 className="font-medium text-xl md:font-bold md:text-3xl">{data.taskSummary.failed}</h2>
        <h3 className="text-white text-lg md:font-medium md:text-2xl">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
