import React from 'react'
import { useLocation,useNavigate} from "react-router-dom";
import './stylenew.css';
import img2 from '../images/img3.webp';
import img3 from '../images/img4.webp';
import img4 from '../images/img5.webp';
import img5 from '../images/img6.webp';
import img6 from '../images/img7.webp';
import img7 from '../images/img8.webp';
import img8 from '../images/img9.webp';
import img9 from '../images/img10.webp';
import Meal from './Meal';

function Home() {
    const location=useLocation();
  return (
    <>
     <div>
     {/* <div className='homepage'>
      <h1 style={{color:"black",fontSize:"20px",textAlign:"center",marginTop:"20px"}}>Hello {location.state.id} and welcome to Home Page</h1>
     </div> */}
          <div className="newdivtwo">
            <div style={{display: 'flex'}}>
              <img src={img3} width="180px" style={{marginLeft: '0px'}} />
              {/* <input type="text" placeholder="Search Recipes" style={{width: '500px', height: '50px', borderRadius: '20px', border: '1px solid black', marginTop: '50px', marginLeft: '490px', paddingLeft: '20px'}} /> */}
              <h1 style={{color:"black",fontSize:"30px",marginTop:"80px",marginLeft:"550px"}}>Welcome {location.state.id}</h1>
              <img src={img2} style={{marginLeft: '450px'}} />
            </div>
            <p style={{marginLeft: '700px', fontSize: '30px', marginBottom: '20px',color:"black"}}>What are your favourite Cusines?</p>
            <div className="carousel-container">
              <div className="carousel-slide">
                <div className="image-wrapper">
                  <img src={img5} alt="Slide 1" style={{width:"150px"}}/>
                  <div className="image-text">Chineese</div>
                </div>
                <div className="image-wrapper">
                  <img src={img6} alt="Slide 2" style={{width:"150px"}}/>
                  <div className="image-text">Indian</div>
                </div>
                <div className="image-wrapper">
                  <img src={img7} alt="Slide 2" style={{width:"150px"}}/>
                  <div className="image-text">Italian</div>
                </div>
                <div className="image-wrapper">
                  <img src={img8} alt="Slide 2" style={{width:"150px"}}/>
                  <div className="image-text">Korean</div>
                </div>
                {/* <div className="image-wrapper">
                  <img src={img9} alt="Slide 2" style={{width:"150px"}}/>
                  <div className="image-text">French</div>
                </div> */}
                {/* <div className="image-wrapper">
                  <img src={img4} alt="Slide 2" style={{width:"150px"}}/>
                  <div className="image-text">Gujrati</div>
                </div> */}
              </div>
              <button className="prev-btn">❮</button>
              <button className="next-btn">❯</button>
            </div>
          </div>
          <div>
            <Meal />
          </div>
        </div>
    </>
  )
}

export default Home