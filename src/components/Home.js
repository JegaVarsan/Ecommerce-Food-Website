import React from "react";
import { useNavigate } from "react-router-dom";
const food = require("../assets/strawberry.jpg");

export default function Home() {
  const myStyle = {
    backgroundImage: `url(${food})`,
    height: "100vh",
    width: "100%",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
  };

  const navigate = useNavigate();

  return (
    <div style={myStyle}>
      <div className="content">
        <center>
          <br></br>
          <div className="log_sig_home">
            <h3>
              <button
                className="button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </h3>
            <h3>
              <button
                className="button"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            </h3>
          </div>
          <br></br>
          <br></br>
          <h1>
            <b>The Cookbook</b>
          </h1>
          <h1 className="text">
            <center>
              <i>Discover the best food & drinks</i>
            </center>
          </h1>
        </center>
      </div>
    </div>
  );
}
