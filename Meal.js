import React, { useState,useEffect } from 'react'
import Mealitem from './Mealitem'
import RcipeIndex from './RcipeIndex';
import './stylenew.css';

function Meal() {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const[item,setItem]=useState()
    const[show,setShow]=useState(false);
    const[search,setSearch]=useState();
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }

    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
  return (
    <>
    <div className='meal'>
        {/* <div className='heading'>
            <h1>Search your food recipe</h1>
        </div> */}
        <div className='search-box'>
            <input type='search' className='search-bar' onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} style={{border:"1px solid black",width:"400px",height:"50px",borderRadius:"20px",paddingLeft:"20px",marginLeft:"700px",marginTop:"100px"}} placeholder='Enter the Recipe'/>
        </div>
        <div className='container' style={{display:"flex",marginLeft:"200px",marginTop:"100px"}}>
            {
                show ? <Mealitem data={item}/>:"Not Found"
            }
        </div>
            </div>
            <h3 style={{color:"black",marginLeft:"850px",marginTop:"100px",fontSize:"30px"}}>Search By Letters</h3>
        <div className='indexContainer' style={{display:"flex",marginLeft:"500px",marginTop:"20px"}}>
            <RcipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>
    </>
  )
}

export default Meal