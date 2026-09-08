// https://www.w3schools.com/react/react_useeffect.asp

import { Button, Input } from '@mui/material';
import { useState, useEffect, type ChangeEvent } from 'react'

const UseEffectDemo = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  useEffect(() => {
    console.log("UE Type 1. Runs on every render")
  });

  useEffect(() => {
    console.log("UE Type 2. Runs only on the first render")
  }, []);

  useEffect(() => {
    console.log("UE Type 3. Runs on the first render And any time any dependency value changes")
  }, [count]);

  const incrementCount = () => {
    //count++   Vs    count + 1
    //  count++; //Error: Cannot assign to 'count' because it is a constant.ts(2588)
    //  count = count + 1; //Error: Cannot assign to 'count' because it is a constant.ts(2588)
    let newCount = count + 1;
    setCount(newCount);
  }

  function incrementCountBy5(){
    // setTimeout( ()=>{ setCount(count+5); }, 2000 );  
    setTimeout(()=>setCount( prev => prev +5 ), 2000); 
    // setCount( prev => prev +5 ) //Whenever we deal with a complex state, always prefer this synatx to modify the state
  }

  function incrementCountByInput(){
    setCount( prev => prev + input ); 
  }

  function incrementCountByPassingInput(localinput: number){
    setCount( prev => prev + localinput ); 
  }

  return (
    <>
      <div>UseEffect Demo</div>
      <p><b>Count  : {count}</b></p>
      <Button onClick={incrementCount}> + </Button>
      
      <Button onClick={ ()=>{ setCount(count-1) } }> - </Button>

      <hr></hr>
      <Button onClick={incrementCountBy5}> +5 </Button>
      
      <Button onClick={ ()=>{ setCount(count-5) } }> -5 </Button>
      <hr></hr>

      <Input name="input" value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(Number(e.target.value))}></Input>
      <Button onClick={incrementCountByInput}> +{input} </Button>      
      <Button onClick={ ()=>{ setCount(count-input) } }> -{input} </Button>
      
      <hr></hr>
      {/* <Input name="inputTwo"></Input> */}
      <Button onClick={()=>incrementCountByPassingInput(input)}> + Passing Input  </Button>      
      
      
    </>
  )
}

export default UseEffectDemo
