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
    height: "42%",
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
  });

  const ChangingGmail = (event) => {
    setinfo({ ...info, gmail: event.target.value });
    // console.log("email" + gmail);
  };

  const ChangePass = (event) => {
    setinfo({ ...info, password: event.target.value });
    // console.log("pass" + password);
  };

  const formsubmit = async (event) => {
    event.preventDefault();
    if (info.gmail.length > 0 && info.password.length > 0) {
      const val = await axios.post("http://localhost:4000/user/login", info);
      console.log(val);
      if (val.data.message.mes == "Logged In Successfully") {
        navigate(`/${val.data.message.id}`);
      } else {
        alert("GMAIL AND PASSWORD NOT MATCHED !!");
      }
    } else {
      if (info.gmail.length == 0) alert("Enter proper Gmail Address!!");
      else alert("Enter proper Password!!");
    }
  };

  return (
    <>
      <div style={styles}>
        <div style={box}>
          <h2>
            <center>Login</center>
          </h2>
          <br></br>
          <form onSubmit={formsubmit}>
            <center>
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
              <button type="submit">Login</button>
            </center>
            <button
              type="button"
              className="btn btn-danger"
              style={buttonn}
              onClick={() => {
                navigate("/signup");
              }}
            >
              New User?
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
