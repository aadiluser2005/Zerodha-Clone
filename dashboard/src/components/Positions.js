import React from "react";


import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Positions = () => {
   
  const[allPositions,setAllPositions]=useState([]);

  useEffect(()=>{
     const backendURL=process.env.Backend_URL;
   axios.get(`${backendURL}/zerodha/dashboard/allPositions`,{withCredentials:true}).then((res)=>{
      setAllPositions(res.data);
    }).catch(e=>{
      const baseURL=process.env.REACT_APP_API_URL;
        if( e.response&&e.response.status===401){
            window.location.href=`${baseURL}/error`;
          }
      console.log(`error occured while fetching positions`,e)});
  },[]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
         
         {allPositions.map((stock,index)=>{ 
               const currValue=stock.price*stock.qty;
               const isProfit=currValue-stock.avg*stock.qty>0.0;
               const profClass=isProfit?"profit":"loss";
               const dayClass=stock.isLoss?"loss":"profit";

          return(
            <tr>
            <td>{stock.product}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={dayClass}>{stock.day}</td>
           
            </tr>
          );
         })}
        

            
         
        </table>
      </div>
    </>
  );
};

export default Positions;