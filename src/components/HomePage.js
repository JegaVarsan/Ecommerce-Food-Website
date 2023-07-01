import React from "react";
import Navbar from "./Navbar";
import "./Display.css";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const { id } = useParams();

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="HomePageText">Foodie Zone</h1>
      <br></br>
      <h2 className="HomePageText">
        <i>THE WORLD'S 20 BEST FOOD !!</i>
      </h2>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>20.Arepas, Venezuela</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://www.aimadeitforyou.com/wp-content/uploads/2020/08/Reina-Pepiada-Thumbnail-1-500x375.jpg"
                  alt="Arepas"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>19.Bunny chow, South Africa</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujLE0IpYCzav_Ub5DiUvwkW92XEU9FPSqOw&usqp=CAU"
                  alt="Bunny chow"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>18.Shish kebab</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80WIlc_IQmclaqSfqsqZNZr4p7JwfZ8maOg&usqp=CAU"
                  alt="Shish kebab"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>17.Lobster</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdf49lUjExQbfUq0e9D0kb5lu8lWE1tue0dw&usqp=CAU"
                  alt="Lobster"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>16.Pastel de nata, Portugal</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznNyDOrEfcKd_JgquqZmiHScNkRWB7dQL4g&usqp=CAU"
                  alt="Pastel de nata"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>15.Pierogi, Poland</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJqpu20wNerpUc1KPHFsuMjCMYprzsnMYwA&usqp=CAU"
                  alt="Pierogi"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>14.Donuts, United States</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QVKKpxkNNE0g6HD_lSdffeY-hWpGUpOxPg&usqp=CAU"
                  alt="Donuts"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>13.Corn on the cob</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYiMNy5S3_gcfU7FoBGs_KzW3VzXPpOG31w&usqp=CAU"
                  alt="Corn"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>12.Piri-piri chicken, Mozambique</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtD-WJPOxg1UvjKpcSNOtWJoBukinoDSIEA&usqp=CAU"
                  alt="Piri-piri chicken"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>11.Rendang, Indonesia</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgnDyRSJglQwtSJmzGttcY06E3g3bSSZExw&usqp=CAU"
                  alt="Rendang"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>10.Chicken muamba, Gabon</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ04ManERpYwEKsrO2dtqK9Rsf9ps-WvE9Vw&usqp=CAU"
                  alt="Chicken muamba"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>9.Ice cream</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-INC8Uxem8uE4TAKRkFweuiW_FEwCUnLqaA&usqp=CAU"
                  alt="Ice cream"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>8.Tom yum goong, Thailand</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBQ1d9u8nyoWULcLk33A5ChvkgsWuZ2dFJg&usqp=CAU"
                  alt="Tom yum goong"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>7.Penang assam laksa, Malaysia</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-e3K88gc5O0jGxKbS7kuXK529IIQonIWpw&usqp=CAU"
                  alt="Penang assam laksa"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>6.Hamburger, Germany</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LpuC1C7bUNu-pvJSarvQjfoqgee7Skn56A&usqp=CAU"
                  alt="Hamburger"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>5.Peking duck, China</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCUvWNjJBgzeYcE-O9z-099GN37TlkJGPhQ&usqp=CAU"
                  alt="Peking duck"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>4.Sushi, Japan</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylzcYvyHKYoFuNhrU4KLSxuIfchV-ljnRXA&usqp=CAU"
                  alt="Sushi"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>3.Chocolate, Mexico</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDPM0EYLT72UqwwsBJhcKE6VDtzXdzhUldA&usqp=CAU"
                  alt="Chocolate"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>2.Neapolitan pizza, Italy</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuewk3L3qHrYsmRSxm7mZvHM5MLOX-9fNKQ&usqp=CAU"
                  alt="Neapolitan pizza"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="HomeBox">
              <br></br>
              <h2 className="textcolor">
                <center>1.Massaman curry, Thailand</center>
              </h2>
              <br></br>
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXC4gEVVleLJAgHlip5PDelPWYLVcCZhqSQ&usqp=CAU"
                  alt="Massaman curry"
                  className="HomeImage"
                ></img>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
