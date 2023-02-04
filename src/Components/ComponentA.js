

export default function ComponentA({name, colour}){
    return(
        <>
        <div style={{backgroundColor:colour}}>
        <p>{name}</p> 
        <p>{colour}</p> 
        </div>
        </>
    )
}