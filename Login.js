import React, { useState,useEffect } from 'react'
import './Login.css';
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';

function Login() {
    const history=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/login",{
                email,password
            }).then(res=>{
                if(res.data=="exists"){
                    history("/home",{state:{id:email}});
                }
                else if(res.data=="notexists"){
                    alert("User has not signed up");
                }
            }).catch(e=>{
                alert("Wrong Details");
                console.log(e);
            })
        }catch(e){
            alert("Wrong Details")
        }
    }
  return (
    <>
     <div className="login1">
        <h2 style={{marginLeft:"130px",marginTop:"0px",color:"black"}}>Login</h2>
        <form action="POST">
          <div className="input-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" id="email" name="email" required  style={{width:"300px",marginTop:"10px",border:"none",borderBottom:"1px solid black"}}/>
          </div>
          <div className="input-group">
            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" id="password" name="password" required style={{width:"300px",marginTop:"10px",border:"none",borderBottom:"1px solid black"}}/>
          </div>
          <div className="input-group" id='newone'>
            <input type="submit" onClick ={submit} defaultValue="Login" style={{width:"300px",borderRadius:"20px",height:"50px",marginLeft:"20px"}}/>
          </div>
        </form>
        <br/>
        <Link to="/signup" style={{textDecoration:"none",marginLeft:"80px"}}>Not a Member?<span style={{color: "#8128a7"}}>Sign Up</span></Link>
      </div>
    </>
  )
}

export default Login

