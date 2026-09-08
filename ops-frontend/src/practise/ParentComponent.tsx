import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    //Create a state variable
    //Create a filter function that will filter the state data
  return (
    <>
    <div>Parent Component</div>
    <p id="p1" style={{color:"red"}}> Para 1</p>
    <ChildComponent name="ABC" address="Pune"></ChildComponent>
    </>
  )
}

export default ParentComponent