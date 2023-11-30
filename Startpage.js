import React from 'react'
// import './Style.css';
import { Link } from "react-router-dom";
import image1 from '../images/cereals.jpg';
import './newstyle.css';

function Startpage() {
  return (
   <>
     <div>
        {/* <nav>
          <li className="listitem1"><Link to="/" style={{textDecoration:"none",color:"white",backgroundColor:"red"}}>Home</Link></li>
          <li className="listitem2"><Link to="/about" style={{textDecoration:"none",color:"white",backgroundColor:"red"}}>About Us</Link></li>
          <li className="listitem3"><Link to="/login" style={{textDecoration:"none",color:"white",backgroundColor:"red"}}>Log in</Link></li>
        </nav> */}
        <div style={{width:"100%",backgroundColor:"black"}}>
        <img src={image1} width="100%" height="600px" style={{objectFit:"cover",backgroundColor:"black"}} className="image" alt="image1"/>
        </div>
        <p className="para1">Its all about good food</p>
        <p className="para2">World class best food recipe</p>
        <div className="divOne" style={{backgroundColor:"black"}}>
          <div className="divnew" style={{backgroundColor:"black"}}>
            <hr style={{color: 'white', width: '300px', marginTop: '100px', marginLeft: '100px'}} />
            <Link to="/"><p style={{color: 'white', marginLeft: '200px', marginTop: '20px',backgroundColor:"black"}}>About Us</p></Link>
            <Link to="/"><p style={{color: 'white', marginLeft: '200px', marginTop: '10px',backgroundColor:"black"}}>Contact</p></Link>
            <Link to="/"><p style={{color: 'white', marginLeft: '200px', marginTop: '10px',backgroundColor:"black"}}>Privacy Policy</p></Link>
            <Link to="/login"><p style={{color: 'white', marginLeft: '200px', marginTop: '10px',backgroundColor:"black"}}>Log in</p></Link>
          </div>
          <div className="divnewone" style={{backgroundColor:"black"}}>
            <hr style={{color: 'white', width: '800px', marginTop: '100px', marginLeft: '100px',backgroundColor:"black"}} />
            <div style={{backgroundColor:"black"}}>
              <form style={{backgroundColor:"black"}}>
                <p style={{color: 'white', fontSize: '25px', marginLeft: '400px', marginTop: '20px',backgroundColor:"black"}}>Get Our News Letter</p><br />
                <label style={{color: 'white', marginLeft: '420px',backgroundColor:"black"}}>Email Address(required)</label><br /><br />
                <input type="text" style={{marginLeft: '420px', backgroundColor: 'white', height: '40px', width: '280px', paddingLeft: '20px', border: 'none', borderRadius: '5px'}} placeholder="Your email address" required />
                <button style={{backgroundColor: '#8128a7', color: 'white', border: 'none', width: '80px', height: '40px', borderRadius: '10px', cursor: 'pointer'}}>Sign Up</button>
              </form>
              <p style={{color: 'white', marginLeft: '420px', marginTop: '10px', fontSize: '14px',backgroundColor:"black"}}>This site is protected by reCaptcha and the<br /> Google <span style={{color: '#8128a7',backgroundColor:"black"}}>Privacy Policy</span> and <span style={{color: '#8128a7',backgroundColor:"black"}}>Terms of Service</span> apply.</p>
              <h2 style={{color: 'white', marginLeft: '420px', marginTop: '10px',backgroundColor:"black"}}>Follow Us</h2>
              <div style={{display: 'flex', color: 'white', marginLeft: '420px', marginTop: '10px',backgroundColor:"black"}}>
              </div>
              <p style={{color: 'white', fontSize: '20px', marginLeft: '420px', marginTop: '30px',backgroundColor:"black"}}>© <span style={{fontSize: '16px',backgroundColor:"black"}}>2023 BuzzFeed,Inc</span></p>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Startpage