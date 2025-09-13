import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import HoldingGraph from "./HoldingGraph";

 




const Dashboard = () => {
      const[allHoldings,setAllHoldings]=useState([]);
   const backendURL=process.env.REACT_APP_BACKEND_URL;
  useEffect(()=>{ 

      
        axios.get(`${backendURL}/zerodha/dashboard/allHoldings`,{withCredentials:true})
        .then( (response)=>{
         
          setAllHoldings(response.data.allHoldings);
        }).catch(e=>{
          const baseURL=process.env.REACT_APP_API_URL;
          if( e.response&&e.response.status===401){
            window.location.href=`${baseURL}/error`;
          }
         
          console.log("error occured while fecthing data")});
        
  },[]);

  const labels=allHoldings.map((subArray)=>subArray["name"]);

const data={
  labels,
  datasets:[{
       label: 'Stock Price',
       data:allHoldings.map((stock) => stock.price),
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }]
}
   
  
  return (
    <div className="dashboard-container">
      
       <WatchList></WatchList>
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings allHoldings={allHoldings} />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/holdingGraph" element={<HoldingGraph data={data} />} />
         
        </Routes>
      </div>
      
    </div>
  );
};

export default Dashboard;
