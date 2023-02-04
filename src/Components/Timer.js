import {useEffect, useState} from 'react';



export function DisplayTimer(props){
    return(
        <>
        <h2>{props.count}</h2>
        </>
    )
}

export default function Timer(){
   const [count,setCount]= useState(0);
   
    useEffect(()=>{
     setInterval(()=>{
 setCount(count=>count+1);
     },1000)  
    },[]);



// useEffect(()=>{
//  console.log("hello")
// }, []);

useEffect(()=>{
 console.log("hello")
}, [])

console.log("render")

// useEffect(()=>{
//     console.log("run on update count")
// },[count])
 
function handleClick(){
    setCount(count+1);
}


    return(
        <>
        <DisplayTimer count={count}></DisplayTimer>
        <button onClick={handleClick}>Click</button>
       
        </>
    )
}