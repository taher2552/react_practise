import { useState } from "react";

export default  function Comp1(){
    const [user, setUser]= useState("Rahul")
    return(
        <>
        <p>UserName: {user}</p>
        <Comp2 user={user}></Comp2>
        </>

    )

}

 function Comp2(props){
    return(
        <>
        <Comp3 user={props.user} />
        </>
    )
}
 function Comp3(props){
    return(
        <>
        <Comp4 user={props.user}></Comp4>
        </>
    )
}
 function Comp4(props){
    return(
        <>
        <Comp5 user={props.user}></Comp5>
        </>
    )
}
 function Comp5(props){
    return(
        <>
        <p>UserName: {props.user}</p>
        </>
    )
}



