import React from 'react'

function RcipeIndex({alphaIndex}) {
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
  return (
    <>
    {
        alpha.map(item=>{
            return(
                <div className='numBox' style={{marginLeft:"20px"}} key={num++} onClick={()=>alphaIndex(item)}>
                    <h3 style={{color:"black"}}>{item}</h3>
                </div>
            )
        })
    }
    </>
  )
}

export default RcipeIndex