import React ,{useState} from 'react'
import './Signup.css';
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';



function Signup() {

    const history=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exists"){
                    alert("User already exists");
                    
                }
                else if(res.data=="notexists"){
                    history("/home",{state:{id:email}});
                }
            })
            .catch(e=>{
                alert("Wrong Details");
                console.log(e);
            })
        }catch(e){
            alert("Wrong Details")
        }
    }
  return (
    <>
    <div className='newClass' style={{display:"flex"}}>
        <div className="login">
        <h2 style={{marginLeft:"130px",color:"black"}}>Sign Up</h2>
        <form action="POST">
          <div className="input-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" id="email" name="email" required  style={{width:"300px",marginTop:"10px",border:"none",borderBottom:"1px solid black"}}/>
          </div>
          <div className="input-group">
            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" id="password" name="password" required style={{width:"300px",marginTop:"10px",border:"none",borderBottom:"1px solid black"}}/>
          </div>
          <div className="input-group" id='new'>
            <input type="submit" onClick ={submit} defaultValue="Login" style={{width:"300px",borderRadius:"20px",height:"50px"}}/>
          </div>
        </form>
        {/* <br/>
        <Link to="/signup" style={{textDecoration:"none",marginLeft:"80px"}}>Not a Member?<span style={{color: "#007bff"}}>Sign Up</span></Link> */}
      </div>
      <div className='childTwo' style={{width:"450px",height:"400px",backgroundColor:"#8128a7",marginTop:"200px",boxShadow:"0 0 10px black"}}>
        <h1 style={{color:"white",backgroundColor:"#8128a7",marginLeft:"150px",marginTop:"140px"}}>Welcome</h1>
        <p style={{color:"white",backgroundColor:"#8128a7",marginLeft:"50px",marginTop:"10px"}}>Please Register yourself to continue wothour services</p>
      </div>
      </div>
    </>
  )
}

export default Signup