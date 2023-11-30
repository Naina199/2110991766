import React from 'react'
import { useNavigate } from 'react-router-dom';

function Mealitem({data}) {
    console.log(data);

    let navigate=useNavigate();
  return (
    <>
    {
        (!data)?<h1 style={{color:"black",marginLeft:"700px"}}>Not Found</h1>:data.map(item=>{
            return(
              
                <div className='card' style={{marginLeft:"50px"}} key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
           <img src={item.strMealThumb} alt='' style={{width:"300px",boxShadow:"0 0 10px black"}}/>
           <p style={{color:"black",marginLeft:"50px",fontSize:"20px",textShadow:"1px 1px 1px black"}}>{item.strMeal}</p>
         </div>

            )
        })
    }
    </>
  )
}

export default Mealitem