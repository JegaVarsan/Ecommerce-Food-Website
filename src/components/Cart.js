import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const del = require("../assets/delete_symbol.png");

export default function Cart() {
  const { id } = useParams();
  const [count, setcount] = useState(0);
  const [data, setdata] = useState([]);
  const [price, setprice] = useState(0);

  const navigate = useNavigate();

  const func = () => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/cart/${id}`)
      .then((val) => {
        // console.log(val.data.data[0].mycart);
        setdata(val.data.data[0].mycart);
        setcount(val.data.data[0].mycart.length);
        // setprice(0);
        for (let i = 0; i < data.length; i++) {
          setprice((prev) => {
            return prev + data[i].price;
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [count]);
  //   console.log(id);
  return (
    <div className="cart_maindiv">
      <style>{"body { background-color: white; }"}</style>
      <br></br>
      <h1>
        <b>
          <center>My Cart</center>
        </b>
      </h1>
      <h5>
        <center>{count} Items</center>
      </h5>
      <br></br>
      <br></br>
      <center>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Item Name </th>
              <th className="th">Quantity</th>
              <th className="th">Price</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((val) => {
                  return (
                    <tr key={val.name} className="tr">
                      <td className="td">{val.name}</td>
                      <td className="td">{val.quantity}</td>
                      <td className="td">{val.price}</td>
                      <td className="del_column">
                        <button
                          onClick={async () => {
                            const ob = {
                              name: val.name,
                              id: id,
                            };
                            axios
                              .post(`http://localhost:4000/user/del`, ob)
                              .then((res) => {
                                console.log(res);
                                window.location.reload();
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                        >
                          <img src={del} className="del_symbol"></img>
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <center>
                  <b>Total Price</b>
                </center>
              </td>
              <td>
                <b>₹{price}</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </center>
      <br></br>
      <br></br>
      <center>
        <button onClick={func}>Back</button>
      </center>
    </div>
  );
}
