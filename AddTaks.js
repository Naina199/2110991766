import React from 'react'

function AddTaks() {
    const[recipe,setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        imageUrl:""
    })
  return (
    <>
     <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='p-3 border border-1 w-25'>
            <h3>Create Recipe</h3>
            <form>
                <div>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Name'  className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div>
                <label htmlFor='description'>Description</label>
                <input type='text' placeholder='Enter Description'  className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div>
                <label htmlFor='ingredients'>Ingredients</label>
                <input type='password' placeholder='Enter Ingredients' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                <label htmlFor='ingredients'>Image Url</label>
                <input type='password' placeholder='Enter Ingredients' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='mt-1 btn btn-success w-100'>Submit</button>
                {/* <Link to="/auth/login"><button className='btn btn-default w-100 mt-2 border'>Login</button></Link> */}
            </form>
        </div>
    </div>
    </>
  )
}

export default AddTaks