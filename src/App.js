import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  

  const[tableData,settableData]=useState([]);
  const [editClick,seteditClick]=useState(false);
  const [editIndex,seteditIndex]=useState("")

  const [Inputs,setInputs] = useState(
      {
          name: "",
          email: "",
          gender:"",
          dob:"",
          phone:"",
          hobbies:"",

      }
  );
  const handleChange = (e) =>{
  setInputs({
      ...Inputs,
      [e.target.name]:e.target.value,
    
  })
  }
  const handlesubmit = (e) =>{

  e.preventDefault();
  if(editClick){
      const tempdata = tableData
      Object.assign(tempdata[editIndex],Inputs)
      settableData([...tempdata])
      seteditClick(false)
  }
  else{
      setInputs({
          name: "",
          email: "",
          gender:"",
          dob:"",
          phone:"",
          hobbies:"",
      })
      settableData([...tableData,Inputs])
  }
 

  }
  

  return (
    <div classNameName="App">
      <h1 id="title" className='text-center'>Employee</h1>
<div id="form-outer">
  <p  id="description">
    Add Employee
  </p>
  <form id="survey-form" onSubmit={handlesubmit} action="">
    <div className="rowTab">
      <div className="labels">
        <label id="fname" for="name">Name: </label>
      </div>
      <div className="rightTab">
        <input autofocus type="text" Value={Inputs.name} onChange={handleChange} name="name" minLength="4" maxLength="20" id="fname" className="input-field" placeholder="Enter your name" required/>
      </div>
    </div>
    
    <div className="rowTab">
      <div className="labels">
        <label for="gender">Gender: </label>
      </div>
      <div className="rightTab">
        <ul style={{listStyle: 'none'}}>
          <li classNameName="radio"><label><input name="radio-buttons" value="male"  type="radio" className="userRatings" checked/>Male</label></li>
          <li className="radio"><label><input name="radio-buttons" value="female"  type="radio" className="userRatings"/>Female</label></li>
    
        </ul>
      </div>
    </div>
  
    <div className="rowTab">
      <div className="labels">
        <label id="dob-label" for="dob">Date Of Birth: </label>
      </div>
      <div className="rightTab">
        <input type="date" max="2023-07-25" name="dob" id="iddob" className="input-field" Value={Inputs.dob}  onChange={handleChange} required/>
      </div>
    </div>
    
    <div className="rowTab">
      <div className="labels">
        <label id="email-label" for="email">Email: </label>
      </div>
      <div className="rightTab">
        <input type="email" name="email" Value={Inputs.email}  onChange={handleChange} id="email" className="input-field" required placeholder="Enter your Email"/>
      </div>
    </div>

    <div className="rowTab">
      <div className="labels">
        <label for="pincode">Phone: </label>
      </div>
      <div className="rightTab">
       <input type="tell" maxLength="10" name="phone" Value={Inputs.phone}  onChange={handleChange} id="idpincode" className="input-field" style={{height:'20px' , resize:'vertical'}} placeholder="Enter Phone"/></div>
    </div>
   
    
       <div className="rowTab">
      <div className="labels">
        <label for="hobbies">Hobbies: </label>
      </div>
      <div className="rightTab">
        <ul id="hobbies" style={{listStyle: "none"}} Value={Inputs.hobbies}  onChange={handleChange}>
          <li className="checkbox"><label><input name="prefer" value="english" type="checkbox" className="userRatings"/>Cricket</label></li>
          <li className="checkbox"><label><input name="prefer" value="tamil" type="checkbox" className="userRatings"/>Chess</label></li>
          <li className="checkbox"><label><input name="prefer" value="hindi" type="checkbox" className="userRatings"/>Music</label></li>
        </ul>
      </div>
    </div>
    <button type='submit' id='submit' className='bg-primary px-2 my-3'>submit</button>
    
  </form>
</div>
       
<table border="4"  cellSpacing={0} id='tab' >
  <caption><h2>Basic</h2></caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>DOB</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Hobbies</th>
    </tr>
  </thead>
  <tbody>
            {
                tableData.map((item,i)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.hobbies}</td>
         
                
                    </tr>
                ))
            }
         </tbody>
     </table>




    </div>
  );
}

export default App;
