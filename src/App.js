import './App.css';
import Counter from './Components/Counter.js';
import ComponentA from './Components/ComponentA.js';
import Timer from './Components/Timer.js';
import Comp1 from './Components/COmp1.js';

function App() {

  let arr=[{name:"taher", colour:"green"},
  {name:"Abhilash", colour:"yellow"},
  {name:"Ravi", colour:"Red"},
  {name:"Aakash", colour:"blue"},
]
  return (
    <div className="App">
      
      {/* {arr.map((val)=>(
        <ComponentA key={val.name} name={val.name} colour={val.colour}></ComponentA>
      ))} */}
      {
      arr.map((item ,index)=>(
        <ComponentA key={index} name={item.name} colour={item.colour}></ComponentA>
      ))
}

      {/* <ComponentA name={arr[0].name} colour={arr[0]}></ComponentA>
      <ComponentA name="Abhilash" colour="orange"></ComponentA>
      <ComponentA name="Kishore" colour="red"></ComponentA>
      <ComponentA name="Ravi" colour="yellow"></ComponentA>
      <ComponentA name="prabhat" colour="green"></ComponentA> */}
      <Counter></Counter>
      <Timer></Timer>

      <Comp1></Comp1>
    </div>
  );
}

export default App;
