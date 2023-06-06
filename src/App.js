import React from 'react';
import Loginform from './Component/Loginform';
import data from './data.json';
import { useState } from 'react';

const App=()=>{
  const loginuser={
    username:"shivam@gmail.com",
    password:"admin123"
  }

  const [user,setuser]=useState({email:""});

  const loginuserfn=(details)=>{
    if (details.email===loginuser.username && details.password===loginuser.password){
      setuser({
        email:details.email
      });
      
    } else {
      alert("Invalid details. Kindly check username and password");
    }
  }




return(
  <div className='app'>
  <>
  {user.email?(
    <div className='container text-center text-light'>
      <h1 className='m-3'>Welcome To User List Page</h1>
      <table border={5} cellPadding={20}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone NO.</th>
          </tr>
        </thead>
        <tbody>
          {data.user.map((user,id)=>{
            return(
              <tr key={id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  ):<Loginform loginuserfn={loginuserfn} />}
  
  </>
  </div>
)
}

export default App;