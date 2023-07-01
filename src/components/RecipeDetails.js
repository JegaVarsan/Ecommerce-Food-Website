import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Display.css";
import Navbar from "./Navbar";

export default function RecipeDetails() {
  const { recipe_name } = useParams();

  const [data, setdata] = useState([]);
  const [object, setobject] = useState({});
  const [ingredient, setingredient] = useState([]);
  const [Health, sethealth] = useState([]);

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe_name}&app_id=3008d469&app_key=9e787c4e7fad01f8d0b9ca72f1e3cb12`;
    axios
      .get(url)
      .then((res) => {
        setdata(res.data.hits);
        setobject(res.data.hits[0]);
        setingredient(res.data.hits[0].recipe.ingredientLines);
        sethealth(res.data.hits[0].recipe.healthLabels);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <div className="Recipe_detail_box">
          <h1 className="textcolor">
            {object.recipe ? object.recipe.label : null}
          </h1>
          <br></br>
          <img
            src={object.recipe ? object.recipe.image : null}
            className="img_recipedetail"
          ></img>
          <br></br>
          <br></br>
          <center>
            <h2 className="textcolor">Ingredients:</h2>
            <ul>
              {ingredient.map((ingredient) => {
                return (
                  <li key={ingredient}>
                    <b>{ingredient}</b>
                  </li>
                );
              })}
            </ul>
          </center>
        </div>
        <br></br>
        {object.recipe ? (
          <div className="RecipeFact">
            <center>
              <h2>Recipe Facts</h2>
            </center>
            <div className="Recipe_fact_box">
              <h4>Calories</h4>
              <b>{Math.ceil(object.recipe.calories)}</b>
            </div>
            <div className="Recipe_fact_box">
              <h4>Total Weight</h4>
              <b>{Math.ceil(object.recipe.totalWeight)}</b>
            </div>
            {/* <div className="Recipe_fact_box">
              <h4>Total Time</h4>
              <b>{object.recipe.totalTime}</b>
            </div> */}
            <div className="Recipe_fact_box">
              <h4>Cuisine Type</h4>
              <b>{object.recipe.cuisineType[0]}</b>
            </div>
            <div className="Recipe_fact_box">
              <h4>Meal Type</h4>
              <b>{object.recipe.mealType}</b>
            </div>
            <div className="Recipe_fact_box">
              <h4>DishType</h4>
              <b>{object.recipe.dishType}</b>
            </div>
            <br></br>
            <br></br>
            <center>
              <h3>Health Label</h3>
            </center>
            <ul>
              {Health
                ? Health.map((v) => {
                    return (
                      <li className="healthlabels">
                        <i>
                          <b>{v}</b>
                        </i>
                      </li>
                    );
                  })
                : "NULL"}
            </ul>
          </div>
        ) : null}
      </center>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
