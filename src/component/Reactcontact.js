import { async } from 'q';
import React,{useState} from 'react'
import './Reactcontact.css';
const Reactcontact = () => {
    const [user,setUser] =useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        message:"",
    });
    let name,value;
const getUserData=(e) =>{
      name=e.target.name;
      value=e.target.value;

      setUser({ ...user,[name]:value});
};  

const postData=async(e) =>{
    e.preventDefault();
  
  
    //FORM VALIDATION
        const{name,email,phone,address,message }=user;

        if(name && email && phone && address && message){
            const res= await fetch("https://login-form-615ee-default-rtdb.firebaseio.com/login-form.json",
            {
              method:"POST",
              headers:{
                  "Content-Type":"application/json",         
              },
              body:JSON.stringify({
                  name,
                  email,
                  phone,
                  address,
                  message,
              }),
          }
          );
          if(res){
            setUser({
                name:"",
                email:"",
                phone:"",
                address:"",
                message:"",
            });
            alert("Data stored successfully");
          }
         
          
        }
        
        else{
            alert("pls fill all the columns");
        }
     
 
 
  
};
 return (
        <>
        <form method="POST">
        <div className="login-div">
        <div className="logo"></div>
        <div className="title">Login-form</div>
        <div className="sub-title">Please fill all the columns given below</div>
        <div className="fields">
        <div className="username">
            <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
            </svg>
        <input
            className="input100"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={getUserData}
            autocomplete="off"
            required />
            </div>


            <div className="phone_no">
            <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
            </svg>
            
            <input
            className="input100"
            type="text"
            name="phone"
            placeholder="Enter your phone"            
            value={user.phone}
            onChange={getUserData}
            autocomplete="off"
            required />
            </div>

            <div className="email">
            <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
            </svg>
            <input
            className="input100"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={getUserData}
            autocomplete="off"
            required />
            </div>
            <div className="address">
            <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
            </svg>          

<           input
            className="input100"
            type="text"
            name="address"
            placeholder="Enter your address"
            value={user.address}
            onChange={getUserData}
            autocomplete="off"
            required />
</div>

  <div className="message">          
     <textarea
            className="ta"
            type="text"
            name="message"
            placeholder="write your message"
            value={user.message}
            onChange={getUserData}
            autocomplete="off"
            required />
            </div>
        </div>
            <button className="signin-button" onClick={postData}>
                Submit
            </button>
            </div>
            </form>
        </>
    );
};

export default Reactcontact
