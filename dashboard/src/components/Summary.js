import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Summary = () => {
    const[userName,setUserName]=useState("");

   useEffect(()=>{
            ;(async()=>{
              const backendURL=process.env.REACT_APP_BACKEND_URL;
              const res= await axios.get(`${backendURL}/zerodha/dashboard/user`,{withCredentials:true});
              const user=res.data.user;
               // console.log(user[0].username);
               setUserName(user[0].username);
   
            })()
      },[]);
  return (
    <>
      <div className="username">
        <h6>Hi, {userName}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;