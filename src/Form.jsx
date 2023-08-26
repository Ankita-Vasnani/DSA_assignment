import React, { useEffect, useState } from 'react';
import  './Form.css';

const Form = ()=>{
    const [user , setUser] = useState({
        fname: "",
        email: "",
        phone: "",
       
        
    });


    const inputEvent = (event)=> {
     
        const {value, name} = event.target;
        // console.log(name, value);
 
         setUser({
         ...user,
         [name]: value,
      }
      );
      
 
 
 
 };

    const [selectedGender, setSelectedGender] = useState({
        gender: "",
    });
    const genderChange = (event)=>{
       setSelectedGender(event.target.value);
    //    console.log('Selected Gender:' , event.target.value);
    }
    
 


const onSubmit = (event)=>{
    event.preventDefault();
    if(!user.fname || !user.email || !user.phone){
        alert("Enter all details");
    }
else{
    const formData = {user, selectedGender};
    localStorage.setItem('formData', JSON.stringify(formData));
    alert("form submitted");

}

//  console.log('form data saved to local storage:', formData);


};

useEffect(()=>{
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
     if(storedFormData){
        setUser(storedFormData.user);
        setSelectedGender(storedFormData.selectedGender);
     }
    
}, []);
   
        
 return(
<>

<div className='body_form'>
<div className='heading'>
  
  <h1> Login </h1>
</div>
<form action="" onSubmit={onSubmit} className='form_class'>


    <br/>
   <div className='class_name'>
    <label className='formLabel' htmlFor="name">Enter your Name:</label>
    <input className='inputField'type = "text" name = 'fname' placeholder='Enter Your name'
    onChange={inputEvent}  value = {user.fname}
    autoComplete='off'/>
    </div>
  <br/>
  <div className='class_name'>
    <label className='formLabel' htmlFor="email">Enter your Email:</label>
    <input className='inputField' type = "email" name = 'email' placeholder='Enter your Email'
    onChange={inputEvent} value = {user.email} autoComplete='off'
     />
    </div>
    <br/>
    <div className='class_name'>
    <label className='formLabel' htmlFor="phone">Enter your Mobile Number:</label>
    <input className='inputField' type = "tel" name = 'phone' placeholder='Enter your Phone Number'
    onChange={inputEvent}  value ={user.phone} autoComplete='off'/>
    </div>
    <br/>
    <div className='class_name'>
        <label className='formLabel' htmlFor="gender">Select your Gender:</label>
    
    <label className='formLabel' htmlFor="male">
    <input type = "radio" name = 'gender' 
    onChange={genderChange} value = 'Male' checked = {selectedGender === 'Male'}/>
    Male
    </label>
   
 
    <label className='formLabel' htmlFor="female">
    <input type = "radio" name = 'gender' 
    onChange={genderChange} value="Female" checked = {selectedGender === 'Female'}/>
    Female
    </label>
       
       
    </div>    
    <br/>
    <div className='button_class'>
   <button className='submitBtn' onClick={onSubmit}> SUBMIT</button>
    </div>








    

</form>
</div>





</>
 );


};


export default Form;