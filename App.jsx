import { useState } from "react";
import { useEffect } from "react";

function App(){
  
  const[strLength,setstrLength]= useState(8)
  const[str,setStr]=useState("")

const genString=(len) => {
  const chars=
  "abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTWXYZ1234567890"
  let temp= "";
  for (let i=0; i<len; i++){
    temp +=
     chars[Math.floor ( Math.random()*chars.length)];
}
setStr(temp);
};
const getLength = (e) => {
  const value = e.target.value;
  e.preventDefault()
  if (value > 30){
    alert("length should be less than to 30");
  }
  else{
  setstrLength(value);
  }
};
useEffect(() => {genString(strLength)},[strLength]);
//console.log(str)
  return(
<div  >
  <input type="number" onChange={getLength } className= "border-black rounded-lg bg-blue-400   h-13 w-55 w-x my-15 mx-50 px-5"/>
  <h2 className="text-black justify font-extrabold flex items-center justify-center  ">
       {str}</h2>
</div>

  )
};

export default App;