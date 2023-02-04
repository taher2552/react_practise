import {useState} from 'react';

export function Display(props){
    return(
        <>
        <p>{props.time}</p>
        </>
    )
}

export default function Counter(){
    const [time, setTime] = useState(0);
 

    function handleIncrease(){
             
     setTime(time+1);
    }

    function handleDecrease(){
   
        setTime(time-1);
    }
  
    
    return(
        <>
         <Display time={time}></Display>
         <button onClick={handleIncrease}>Increase</button>
         {time>0 ? <button disabled={false} onClick={handleDecrease}>Decrease</button> : <button disabled={true} onClick={handleDecrease}>Decrease</button>}
        </>
    )
}