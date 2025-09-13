import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              
              <p className="firstPara">Available margin:</p> 
               <p className="secondPara">4,043.10</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Used margin:</p>
              <p className="secondPara">3,757.30</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Available cash:</p>
              <p className="secondPara">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p className="firstPara">Opening Balance:</p>
              <p className="secondPara">4,043.10</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Opening Balance:</p>
              <p className="secondPara">3736.40</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Payin:</p>
              <p className="secondPara">4064.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">SPAN:</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Delivery margin:</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Exposure:</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Options premium:</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr />
            <div className="data">
              <p className="firstPara">Collateral: (Liquid funds)</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Collateral: (Equity)</p>
              <p className="secondPara">0.00</p>
            </div>
            <hr></hr>
            <div className="data">
              <p className="firstPara">Total Collateral:</p>
              <p className="secondPara">0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;