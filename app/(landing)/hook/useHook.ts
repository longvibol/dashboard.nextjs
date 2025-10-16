import { useState } from "react";

export function useHook(){
     // Syntax 
  // const [getter, setter] = useState(initialValue);
  // When we want to change the state we need to called the setter 
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);


  function increaseSum() {
    
    // setSum(sum +1);
    setSum((prev)=> prev+1);
    console.log("Sum Value:", sum);
  }
  return{
    count,
    setCount,
    sum,
    increaseSum
  }
}