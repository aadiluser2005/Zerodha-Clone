import React, { useState, useContext, useEffect } from "react";

import {Tooltip ,Grow} from "@mui/material";
import axios from "axios";
import { KeyboardArrowDown,KeyboardArrowUp, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnutChart";










const WatchList = () => {
   
  const [watchlist,setWatchList]=useState([]);
  
  useEffect(()=>{ 
      
       const backendURL=process.env.REACT_APP_BACKEND_URL;
        axios.get(`${backendURL}/zerodha/dashboard/allwatchlist`,{withCredentials:true})
        .then( (response)=>{
          console.log(response.data);
          setWatchList(response.data);
        }).catch(e=>{
          if( e.response&&(e.response.status===401||e.response.status===403)){
              const baseURL=process.env.REACT_APP_API_URL;
            window.location.href=`${baseURL}`;
          }
         
          console.log("error occured while fecthing data")});
        
  },[]);


    
  const labels=watchlist.map((subArray)=>subArray["name"]);
    const colors = watchlist.map((_, i) => 
  `hsl(${(i * 360) / watchlist.length}, 70%, 60%)`
);
 console.log(labels);
    const data = {
  labels,
  datasets: [
    { 
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    },
  ],
};

   const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 12,
        font: {
          size: 10
        }
      }
    }
  }
};
   


  return(
    <div className="watchlist-container">
       <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
       {watchlist.map((stock,index)=>{
        return(
        <li> 
          <WatchListItem stock={stock} key={index}></WatchListItem>
        </li>
        )})}
      </ul>

     <div style={{width:"100%", height:"400px"}}>
           <DoughnutChart data={data} options={options}></DoughnutChart>
        </div>
    </div>
  );
};



export default WatchList;


const WatchListItem=({stock})=>{
  const[showWatchlistActions,setshowWatchlistActions]=useState(false);

  const handleMouseEnter=(e)=>{
    setshowWatchlistActions(true);
  }
  const handleMouseLeave=(e)=>{
    setshowWatchlistActions(false);
  }

   return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

     <div className="item">
      <p className={stock.isDown?"down":"up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        
     {stock.isDown?(<KeyboardArrowDown className="down"></KeyboardArrowDown>):(<KeyboardArrowUp className="up"></KeyboardArrowUp>)}
        <span className="price">{stock.price}</span>
      </div>
     </div>
    {showWatchlistActions && <WatchListActions uid={stock.name}></WatchListActions>}
    </li>
   )
}

const WatchListActions=({uid})=>{
    return(
     <span className="actions">
        <Tooltip 
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
         
          <Tooltip 
        title="Sell (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
       
        <Tooltip 
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon"></BarChartOutlined></button>
        </Tooltip>
         <Tooltip 
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}>
          <button className="more"><MoreHoriz></MoreHoriz></button>
        </Tooltip>
      </span>
      
      
    )
}
