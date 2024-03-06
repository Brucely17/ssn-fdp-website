import React from 'react'
import './CoOrdinators.css'
function CoOrdinators() {
  return (
    <div className="coord">
    <h1>Co-ordinators</h1>
    <div className="allCards">

    
      <div className="coordCard">
      <h3>Dr.A.Shahina</h3>
      <h4> Professor & Head of the Department</h4>

      </div>
      <div className="coordCard" >
      {/* <div className="coordImg" style={{color:"blue"}}>
      <img src="/images/scanqr.png"></img>
      </div> */}
      
      <h3>Dr.R.Srinivasan</h3>
      <h4>Professor</h4>

      </div>
      <div className="coordCard">
      <h3>Dr.S.Karthika</h3>
      <h4>Associate Professor</h4>

      </div>
      <div className="coordCard">
      <h3>Dr.A.Ashwinth Janarthan</h3>
      <h4>Assistant Professor</h4>

      </div>
      </div>
    </div>
  )
}

export default CoOrdinators;
