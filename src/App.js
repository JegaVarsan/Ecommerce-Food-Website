import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Recipes from "./components/Recipes";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/:id" element={<HomePage></HomePage>}></Route>
          <Route path="/:search/:id" element={<Recipes></Recipes>}></Route>
          <Route
            path="/recipe/:recipe_name"
            element={<RecipeDetails></RecipeDetails>}
          ></Route>
          <Route path="/cart/:id" element={<Cart></Cart>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
