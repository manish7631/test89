import axios from "axios";
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {Routes, Route} from "react-router-dom"

import { Home } from "./Home";



export const Login = () => {
const [userdata, setUserdata] = useState({
  "username":"",
  "password":""
})
 

 
 
 
    
      const handleChange = (e) => {
        const {name, value} = e.target; 
   
       
         setUserdata({
           ...userdata,
           [name]: value,
       })
         
        
         }


         
     const handleSubmit = (e) => {
      e.preventDefault()
         
        axios.get("http://localhost:8080/users").then(({ data }) => {
          console.log(userdata)
         // console.log('data', data);
          data.map((elem) => {
            if(elem.username === userdata.username && elem.pass === userdata.password){
             console.log("here")
               return (
                <Route path="/" element={<Home />} />
               )
            }
          })
         
        }).catch((err) => { console.log('error', err) })
  }

  


  return (
    <div>
      


 <form action="" onSubmit={handleSubmit}>

 <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
        <input  className="submit" type="submit" value="Submit" />
 </form>


      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
     
    </div>
  );
};
