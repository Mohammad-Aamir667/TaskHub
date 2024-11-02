import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
const TaskList = ({data}) => {
  return (
    <div className = "overflow-x-auto flex justify-start gap-4 flex-nowrap  text-white h-[35%] md:h-[45%] w-full mt-8 rounded-xl py-4">
       {data.tasks.map((elem)=>{
             if(elem.active){
              return <AcceptTask key = {data.id} data={elem}/>
             }
             if(elem.newTask){
              return <NewTask key = {data.id}  data={elem}/>
             }
             if(elem.completed){
              return <CompleteTask key = {data.id}  data={elem}/>
             }
             if(elem.failed){
              return <FailedTask key = {data.id}  data={elem}/>
             }

       })  
       }
    </div>
  )
}

export default TaskList;