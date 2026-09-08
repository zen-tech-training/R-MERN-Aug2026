import React from 'react'

const ChildComponent:React.FC<{ name: string; address: string }> = (myprops) => {
  
  //Call the filter function  and display the state data in the child component
    return (
    <>
    <div>Child Component</div>
    <p id="p2" style={{color:"blue"}}> {myprops.name} - {myprops.address}</p>
    </>
  )
}

export default ChildComponent


// function f1(n1: number, n2: number){
// }
// f1(10, 20); //Valid