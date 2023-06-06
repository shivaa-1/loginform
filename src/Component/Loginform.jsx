import React from "react";
import { useState } from "react";

const Loginform=({loginuserfn,error})=>{
    const[details,setdetails]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault()
        loginuserfn(details)
    }

    return(
    <>
    <div className="login text-center justify-content-center align-items-center my-5 text-light">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h1>WELCOME TO OUR PAGE</h1>
                <h2>Login Form</h2>
                <br/><br/>
                <label>Enter Username or Email:</label>
                <br/>
                <input type="text" name="email" id="email" onChange={(e)=>setdetails({...details, email:e.target.value})} />

                <br/><br/>
            </div>
            <div className="form-group">
                <label>Enter Password:</label>
                <br/><br/>
                <input type="Password" name="password" id="password" onChange={(e)=>setdetails({...details,password:e.target.value})}/>
                <br/><br/>
            </div>
            <div className="form-group">
                <button className="btn btn-outline-success" onClick={handleSubmit} value="login">Login</button>
            </div>
        </form>
    </div>
    </>
    )
}
 export default Loginform;