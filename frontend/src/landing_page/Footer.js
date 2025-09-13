import React from 'react'

export default function Footer() {
  return (
    <footer>
   <div className="container mt-5  border-top">
    <div className='row  p-3'>
      <div className='col-12 col-md-4 footerCol'>
          <img src='media\images\logo.svg' style={{width:"60%"}}></img>
          <p className='mt-2'>&copy; 2010-2024,Not Zerodha Broking Ltd.</p>
          <p>All rights reserved</p>
           <i className="fa-brands fa-twitter "></i>
           <i className="fa-brands fa-facebook  ms-2"></i>
           <i className="fa-brands fa-instagram  ms-2"></i>
           <i className="fa-brands fa-linkedin-in  ms-2"></i>
           <i className="fa-brands fa-telegram  ms-2"></i>
      </div>
      <div className='col-12 col-md-3 footerCol'>
         <a href='' className='fs-5 ' style={{display:"block",textDecoration:"underline", fontWeight:"400", color:"black"}}>Company</a>
        <a href='' className='text-muted mt-3' style={{display:"block",textDecoration:"none"}}>About</a>
        <a  className='text-muted  mt-3'style={{display:"block",textDecoration:"none"}} >Products</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>Refferal programme</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>Careers</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}} >Zerodha tech</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>Press & media</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>Zerodha cares (CSR)</a>

      </div>
      <div className='col-12 col-md-3 footerCol'>
        <a href='' className='fs-5 ' style={{display:"block",textDecoration:"underline", fontWeight:"400", color:"black"}}>Support</a>
        <a href='' className='text-muted mt-3' style={{display:"block",textDecoration:"none"}}>Contact</a>
        <a  className='text-muted  mt-3'style={{display:"block",textDecoration:"none"}} >Support portal</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>Z-Connect blog</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>List of charges</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}} >Downloads & resources</a>
        
      </div>
      <div className='col-12 col-md-2 footerCol'>
        <a href='' className='fs-5 ' style={{display:"block",textDecoration:"underline", fontWeight:"400", color:"black"}}>Account</a>
        <a href='' className='text-muted mt-3' style={{display:"block",textDecoration:"none"}}>Open an account</a>
        <a  className='text-muted  mt-3'style={{display:"block",textDecoration:"none"}} >fund transfer</a>
        <a  className='text-muted mt-3'style={{display:"block",textDecoration:"none"}}>60 day challenge</a>
        
        
      </div>

       <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className='text-center'>
           <a  className='text-muted mt-3'style={{textDecoration:"none"}}>NSE</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>BSE</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>MCX</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>Terms & conditions</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>Policy & procedures</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>Privacy policy</a>
           <a  className='text-muted mt-3 ms-4'style={{textDecoration:"none"}}>Disclosure</a>
        </div>
    </div>
   </div>
   </footer>
  )
}
