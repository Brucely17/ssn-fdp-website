import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import './Speaker.css'
function Speakers() {
  return (
    <>    <h1 style={{color:"rgb(32, 32, 172)",fontSize:"3.2em"}}>Speakers</h1>
    <div className="speakerMain">
<div className="speakerCards">
      <ProfileCard imageUrl={"/images/speakers/Balasubramanian.png"} Name="Balasubramaniyan Munnuswamy"
       Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
        Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 

 Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
       />
       <ProfileCard imageUrl={"/images/speakers/BalaMurugan.png"} Name="Balamurugan SP"
       Proficiency="Co-Founder - GUVI" 
        Description="Software Engineer with an entrepreneurial mindset. Been part of IT industry for a decade and worked with world class individuals and corporates. Had an enormous learning of how the industry works and what it takes to be a successful individual in this field. "
       />
       <ProfileCard imageUrl={"/images/speakers/Thajudeen.png"} Name="Thajudeen Aboobaker"
       Proficiency="Founder at URBAN TRASH, Revolutionizing B2B waste Management" 
        Description="As the founder of Urban Trash, I am on a mission to transform the way waste is managed and utilized in urban areas. I have over 7 years of experience in the waste management industry, having founded and led two other startups, cleancircle.earth and cleanlier, that focused on organic waste management and circular economy solutions."
       />
       <ProfileCard imageUrl={"/images/speakers/Balasubramanian.png"} Name="Balasubramaniyan Munnuswamy"
       Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
        Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 

 Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
       />
       
       </div>
       <div className="speakerCards">
       <ProfileCard imageUrl={"/images/speakers/Balasubramanian.png"} Name="Balasubramaniyan Munnuswamy"
       Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
        Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 

 Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
       />
       </div>
    </div>
    </>
  )
}

export default Speakers
