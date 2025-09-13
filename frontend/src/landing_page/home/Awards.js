import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-12 col-md-6 p-5 ">
          <img
            src="media/images/largestBroker.svg"
            alt="LargestBroker image"
            className="award-image"
          ></img>
        </div>
        <div className="col-12 col-md-6 p-5 mt-3   ">
          <h1> Largest stock broker in India </h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in
          </p>
          <ul className="row mt-5">
            <div className="col-6">
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p> Commodity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </div>
            <div className="col-6">
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>
                <p>Bonds and Contracts</p>
              </li>
            </div>
          </ul>
          <img
            src="media\images\pressLogos.png"
            alt="press logos"
            className="logos"
          ></img>
        </div>
      </div>
    </div>
  );
}
