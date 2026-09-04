import React, { type FormEvent } from 'react'
import axios from 'axios';

const AddOperation = () => {

  const [formData, setFormData] = React.useState({ 
    name:"Tom", 
    address:"Chennai"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value= ", e.target.value);
    // setFormData({name:"dummy name", "address":"dummy address"})
    // setFormData({name:e.target.value, "address":e.target.value})

    // if(e.target.name=="name") 
    //   setFormData({name:e.target.value, address:formData.address})
    // else if(e.target.name=="address") 
    //   setFormData({name:formData.name, address:e.target.value})

    // const newFormData = {...formData} ;
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,      
    })
  }
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault(); //Will stop the default behaviour of Button
    axios.post("http://localhost:5000/api/suppliers", formData)
    alert("Form submitted");
  }

  return (
    <>
      <div>Add Operation</div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange}/>
        <input name="address" value={formData.address} onChange={handleChange}/>
        <button>Save</button>
      </form>
      {JSON.stringify(formData)}
    </>
  )
}

export default AddOperation