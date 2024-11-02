import React from 'react'
import Header from './Header'

import TaskListNumber from './TaskListNumber'
import TaskList from './TaskList'

const EmployeeDashboard = (props) => {
     const {data,onChangeUser} = props;
  return (
    <div className = "h-screen p-10 pt-3 " >
    <Header onChangeUser = {onChangeUser} userName = {data.firstName}/>
    <TaskListNumber data ={data} />
    <TaskList data = {data}/>
    </div>
  
  )
}

export default EmployeeDashboard