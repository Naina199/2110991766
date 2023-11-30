import React,{useState} from 'react'
import { useParams }from "react-router-dom";

function RecipeInfo() {
    const[item,setItem]=useState();
    const {MealId}=useParams();
    if(MealId!=""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data.meals[0]);
        })
    }
  return (
    <>
    {
        (!item)?"":(<>
        <div className='content' style={{marginLeft:"600px",marginTop:"100px"}}>
            <img src={item.strMealThumb} style={{boxShadow:"0 0 10px black"}}/>
            <div className='innerContent' style={{marginLeft:"200px"}}>
                <h1 style={{color:"black"}}>{item.strMeal}</h1>
                <p style={{color:"black",fontSize:"20px",fontWeight:"bold",marginLeft:"120px"}}>{item.strArea}</p>
                <p style={{color:"black",fontSize:"18px",fontWeight:"bold",marginLeft:"120px"}}>{item.strCategory}</p>
            </div>
        </div>
        <div className='recipedetails' style={{display:"flex",marginLeft:"300px",marginTop:"100px"}}>
            <div className='ingredients' style={{width:"500px",marginLeft:"100px",fontWeight:"bold",fontSize:"18px"}}>
                <h2 style={{color:"black"}}>Ingredients</h2>
                <p style={{color:"black",marginTop:"10px"}}>1. {item.strIngredient1} : {item.strMeasure1}</p>
                <p style={{color:"black",marginTop:"5px"}}>2. {item.strIngredient2} : {item.strMeasure2}</p>
                <p style={{color:"black",marginTop:"5px"}}>3. {item.strIngredient3} : {item.strMeasure3}</p>
                <p style={{color:"black",marginTop:"5px"}}>4. {item.strIngredient4} : {item.strMeasure4}</p>
                <p style={{color:"black",marginTop:"5px"}}>5. {item.strIngredient5} : {item.strMeasure5}</p>
                <p style={{color:"black",marginTop:"5px"}}>6. {item.strIngredient6} : {item.strMeasure6}</p>
                <p style={{color:"black",marginTop:"5px"}}>7. {item.strIngredient7} : {item.strMeasure7}</p>
                <p style={{color:"black",marginTop:"5px"}}>8. {item.strIngredient8} : {item.strMeasure8}</p>
            </div>
            <div className='instructions' style={{width:"800px"}}>
                <h2 style={{color:"black"}}>Instructions</h2><br />
                <h4 style={{color:"black"}}>{item.strInstructions}</h4>
            </div>
        </div>
        </>)
    }
    <h3>Find Your Recipe Information here</h3>
    </>
  )
}

export default RecipeInfo