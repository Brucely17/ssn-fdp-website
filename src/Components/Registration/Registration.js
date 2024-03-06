import React from 'react'
import './Registration.css'
function Registration() {
  return (
    <div className="register">
      <h1 >Registration Details</h1>

      <h4>Registration and payment to ENGSS-FDP is through the
following link.</h4>
<div className="reglink">
      <a href="https://forms.gle/xhwKUT3KnXbFWrrU7">Click to register<img src="/images/verify.png" style={{width:"30px",height:"30px",marginTop:"10px"}}></img></a>

      <h3>Registration Fee is as follows:</h3>
      <h4><b>Faculty: Rs.500/-</b></h4>
      <h4><b>Research scholars: Rs.300/-</b></h4>
      <h4><b>Industry participants: Rs.1000/-</b></h4>
      <h3><em>Registration is mandatory.</em></h3>

      <img src="/images/scanqr.png"></img>
      <h4>Scan to Pay</h4>

      </div>
    </div>
  )
}

export default Registration
