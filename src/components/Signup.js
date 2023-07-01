import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const sunset = require("../assets/sunset.jpg");

export default function Login() {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${sunset})`,
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    display: "flex",
    AlignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "white",
    // flexDirection: "column",
  };

  const buttonn = {
    width: "30%",
    height: "1.5%",
    backgroundColor: "white",
    color: "black",
  };

  const box = {
    borderRadius: "10%",
    width: "25%",
    height: "48%",
    backgroundImage: `url(${sunset})`,
    backgroundSize: "100% 100%",
    marginTop: "12%",
  };

  const input = {
    width: "50%",
  };

  const [info, setinfo] = useState({
    gmail: "",
    password: "",
    Username: "",
  });

  const ChangingGmail = (event) => {
    setinfo({ ...info, gmail: event.target.value });
  };

  const ChangePass = (event) => {
    setinfo({ ...info, password: event.target.value });
  };

  const ChangingUN = (event) => {
    setinfo({ ...info, Username: event.target.value });
  };

  const formsubmit = async (event) => {
    event.preventDefault();
    if (
      info.gmail.length > 0 &&
      info.password.length > 0 &&
      info.Username.length > 0
    ) {
      try {
        const val = await axios.post("http://localhost:4000/user/signup", info);
        console.log(val);
        if (
          val.data.message ==
          "Email Address Already Exits.Please use Other Email"
        ) {
          alert("Email Address Already Exits.Please use Other Email");
        } else {
          navigate("/login");
        }
      } catch (err) {
        alert("Email Address Already Exits.Please use Other Email");
        console.log(err);
      }
    } else {
      if (info.gmail.length == 0) alert("Enter proper Gmail Address!!");
      else if (info.password.length == 0) alert("Enter proper Password!!");
      else alert("Enter proper Username!!");
    }
  };

  return (
    <>
      <div style={styles}>
        <div style={box}>
          <h2>
            <center>Sign UP</center>
          </h2>
          <br></br>
          <form onSubmit={formsubmit}>
            <center>
              <label>Username:</label>
              <input
                style={input}
                type="text"
                name="username"
                placeholder="Enter UserName"
                value={info.Username}
                onChange={ChangingUN}
              ></input>
            </center>
            <br></br>
            <br></br>
            <center>
              <label>Gmail:</label>
              <input
                style={input}
                type="email"
                placeholder="Enter gmail"
                value={info.gmail}
                onChange={ChangingGmail}
              ></input>
            </center>
            <br></br>
            <br></br>
            <center>
              <label>Password:</label>
              <input
                style={input}
                type="password"
                placeholder="Enter Password"
                value={info.password}
                onChange={ChangePass}
              ></input>
            </center>
            <br></br>
            <br></br>
            <center>
              <button type="submit">Sign In</button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
