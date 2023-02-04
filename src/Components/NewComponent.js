import { useState } from "react";
const [name,setName]= useState("Kishore");
export function Comp1(){
    
}

export function Comp2(){
    <Comp1 name={name}></Comp1>
}

export function Comp3(){
    <Comp3 name={name}></Comp3>
}

export default function NewComponent(){
    <p>{name}</p>
}