import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Display from "./Display";
import axios from "axios";
import Navbar from "./Navbar";

export const content = React.createContext();

export default function Recipes() {
  const { search, id } = useParams();

  // console.log("Recipe" + id);

  const [data, setdata] = useState([]);

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=3008d469&app_key=9e787c4e7fad01f8d0b9ca72f1e3cb12
`;
    axios
      .get(url)
      .then((res) => {
        setdata(res.data.hits);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container text-center">
        <div className="row">
          {data.map((data) => {
            return (
              <content.Provider
                value={{ data: data, search: search, id: id }}
                key={data.recipe.image}
              >
                <Display key={data.recipe.image}></Display>
              </content.Provider>
            );
          })}
        </div>
      </div>
    </div>
  );
}
