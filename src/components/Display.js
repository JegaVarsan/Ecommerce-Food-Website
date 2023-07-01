import React, { useContext, useState, useEffect } from "react";
import { content } from "./Recipes";
import "./Display.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function Display() {
  const [quantity, setquantity] = useState(0);

  const navigate = useNavigate();

  const style = {
    color: "black",
  };

  const d = useContext(content);
  const data = d.data;

  const changecart = async () => {
    setquantity((prevval) => {
      return prevval + 1;
    });
    const val = {
      _id: d.id,
      image: data.recipe.image,
      label: data.recipe.label,
    };
    try {
      const res = axios.post(`http://localhost:4000/user/cart/${d.id}`, val);
    } catch (err) {
      console.log("Errorrr" + err);
    }
  };

  // useEffect(() => {
  //   setquantity(JSON.parse(window.localStorage.getItem("quantity")));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("quantity", quantity);
  // }, [quantity]);

  return (
    <div className="col">
      <Navbar></Navbar>
      <div className="main my-3" style={{ width: "100%" }}>
        <center>
          <h1 style={style}>{data.recipe.label}</h1>
        </center>
        <br></br>
        <br></br>
        <center>
          <img src={data.recipe.image}></img>
        </center>
        <br></br>

        <div className="price_block">
          <div className="Ingredients">
            <center>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate(`/recipe/${data.recipe.label}`);
                }}
              >
                Ingredients
              </button>
            </center>
          </div>

          <div>
            <center>
              <button type="button" className="btn btn-primary">
                Price ₹100
              </button>
            </center>
          </div>

          <div>
            <center>
              <button
                type="button"
                className="btn btn-primary"
                onClick={changecart}
              >
                Cart + {quantity}
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
