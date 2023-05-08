import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const[count,setCount]=useState(0);
    const updateCount=()=>{
        setCount(count+1)
    };
    const[data,setData]=useState("Ali");
    const updateData=()=>{
        setData("Zain")
    }
    useEffect(() => {
    console.log("alert")
    },[count])
    
  return (
    <div>
        <h1>Count {count} Times</h1>
        <button className='btn btn-outline-dark my-3' onClick={updateCount}>Add Count</button> <br />
        <h3>{data}</h3>
        <button className='btn btn-outline-dark my-3' onClick={updateData}>Use Effect Run</button>
    </div>
  )
}

export default Hooks