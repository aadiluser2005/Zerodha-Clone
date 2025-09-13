
import axios  from "axios";
import { VerticalGraph } from "./VerticalGraph.js";
import { useNavigate } from "react-router-dom";


const Holdings = ({allHoldings}) => {
      const navigate=useNavigate();
  const handleRedirect=()=>{
     navigate("/holdingGraph");
  }
 
     




const labels=allHoldings.map((subArray)=>subArray["name"]);

const data={
  labels,
  datasets:[{
       label: 'Stock Price',
       data:allHoldings.map((stock) => stock.price),
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }]
}

// console.log(labels);


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

         {allHoldings.map((stock,index)=>{
             const currValue=stock.price*stock.qty;
             const  isProfit=currValue-stock.avg*stock.qty>=0.0;
             const  profClass=isProfit?"profit":"loss";
             const dayClass =stock.isLoss?"loss":"profit";
            


             return(
                 <tr key={index} >
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currValue}</td>
            <td className={profClass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
             );




             
         })}

            </tbody>
        </table>
      </div>

      <div className="row holdingRow">
        <div className="col holdingCol">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col holdingCol">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col holdingCol">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
       
      <span className="barGraph"><VerticalGraph data={data} ></VerticalGraph></span>
      <button type="button" class="btn btn-primary d-md-none" onClick={handleRedirect}>See Holdings Graph</button>
     
    </>
  );
};

export default Holdings;