import React from 'react'
import Header from './Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

const AdminDashBoard = (props) => {
  const {onChangeUser,data} = props;
  return ( 
    <div>
        <Header onChangeUser ={onChangeUser} userName ={data.firstName}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashBoard