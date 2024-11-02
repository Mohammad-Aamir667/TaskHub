 import { useContext, useEffect, useState } from 'react';
import './App.css';
import AdminDashBoard from './components/AdminDashBoard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Login from './components/Login';
import  { AuthContext } from './utils/AuthContext';
function App(){
      const [user,setUser] = useState(null);
      const [loggedInUserData,setLoggedInUserData] = useState(null);
      const {userData} = useContext(AuthContext);
      useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser && userData) {
          const userInfo = JSON.parse(loggedInUser);
          if (userInfo.role === 'admin') {
            setUser('admin');
            setLoggedInUserData(userData.admin);
          } else if (userInfo.role === 'employee') {
            const employeeData = userData.employees?.find(emp => emp.firstName === userInfo.data?.firstName);
            if (employeeData) {
              setUser('employee');
              setLoggedInUserData(employeeData);
            }
          }
        }
      }, [userData]); 

    const handleLogin = (email,password) =>{
       if(email == 'admin@me.com' && password == '123'){
               setUser('admin');
              setLoggedInUserData(userData?.admin);
               localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
       }
       else if(userData){
         const employee = userData.employees.find((e)=>email == e.email && password == e.password);
         if(employee)
         {
          setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
         }
        
}
       else{ 
        alert("Invalid credential")
      };
    }
  return (  
    <>
     {!user? <Login handleLogin = {handleLogin}/> : ""} 
     {user == 'admin'  ?<AdminDashBoard onChangeUser={setUser} data ={loggedInUserData} /> : (user == 'employee' ?  <EmployeeDashboard onChangeUser={setUser} data ={loggedInUserData}/> :"") }   
    </>
  );
}

export default App;