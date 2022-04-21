import './App.css';
import Axios from 'axios';
import React, { useState } from "react";

function App() {
  const [itemFname, setFname] = useState("");
  const [itemLname, setLname] = useState("");
  const [itememail, setemail] = useState("");
  const [itempassword, setpassword] = useState("");
  const reg = () => {
    Axios.post("http://13.127.127.40/api/user/", {
      first_name: itemFname,
      last_name: itemLname,
      email: itememail,
      password: itempassword,
    }).then((response) => {
      console.log(response);
    })
    setFname("");
    setLname("");
    setemail("");
    setpassword("");
    setTimeout(() => {
      alert("Your form submit!!")
    }, 100);
  }
  return (
    <div className="main" >
      <div className="form_div">
        <div className="sign_div">
          <h3>Register Form</h3>
          <div className="form-group">
            <label ><i className="zmdi zmdi-account"></i></label>
            <input type="text" onChange={(e) => {
              setFname(e.target.value)
            }} name="Fname"  value={itemFname} placeholder="Fisrt Name" className="input" />
          </div>
          <div className="form-group">
          <label ><i className="zmdi zmdi-account"></i></label>
            <input type="text" name="Lname" value={itemLname} onChange={(e) => {
              setLname(e.target.value)
            }} placeholder="Last Name" className="input" />
          </div>
          <div className="form-group">
            <label ><i className="zmdi zmdi-email"></i></label>
            <input type="email"
              onChange={(e) => {
                setemail(e.target.value)
                console.log(itememail)
              }}
              placeholder="Email" value={itememail} name="email" className="input" />
          </div>
          <div className="form-group">
            <label><i className="zmdi zmdi-lock"></i></label>
            <input type="password" onChange={(e) => {
              setpassword(e.target.value)
            }} placeholder="Password" value={itempassword} name="password" className="input" />
          </div>
          <button variant="contained" onClick={reg} className="btn">Register</button>
        </div>
        <div className="image">
          <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="something" />
          <p>I am already registerd</p>
        </div>
      </div>
    </div>

        );
}

export default App;
