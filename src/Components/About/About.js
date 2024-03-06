import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
    useEffect(()=>{
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

},[])
    return (
        <div className="About">
            <h1>ABOUT THE PROGRAM</h1>
            <div class="slider">
            <div class="item">
            
                <h2 style={{color:"rgb(32, 32, 172)"}}>Objectives</h2>
                <ul>
                    <li>To provide participants with a comprehensive
                    understanding of the latest trends and technologies in field of IOT,big data,AI and related technologies.</li>

                    <li>To familiarize participants with the practical aspects of designing ,implementing and integrating smart solutions.</li>
                </ul>
            </div>
            <div class="item">
            <h2 style={{color:"rgb(32, 32, 172)"}}>Objectives</h2>
                <ul>
                    <li>To create an environment for participants to exchange ideas and expereiences with each other ,and to develop new professional relationships</li>

                    <li>To provide participants with an understanding of the potential commercial appliations of smart solutions and how they can be used to create new business opportunities.</li>
                </ul>
            </div>
            <div class="item">
            <h2 style={{color:"rgb(32, 32, 172)"}}>Topics to be  covered</h2>
            
                <ol>
                <li> Al and loT blended.</li>
<li>Green and Self-Powered IoT.</li>
<li>Case Studies on Sustainable Solutions for Smart Applications.</li>

<li> Healthcare informatics and medical imaging.</li>
<li> Speech Processing: Recent Advancements.</li>
</ol>
            </div>
            <div class="item">
            <h2 style={{color:"rgb(32, 32, 172)"}}>Topics to be  covered</h2>
            
            <ol>
            <li> Case Studies on Al-driven healthcare systems</li>
<li>Digital Twins and Predictive Maintenance.</li>
<li>Privacy Issues in building Smart Solutions.</li>

<li> Open Discussion - Opportunities and Research
Challenges in Smart Solutions.</li>

</ol>
            </div>
            <div class="item">
            <h2 style={{color:"rgb(32, 32, 172)"}}>Objectives</h2>
                <ul style={{paddingLeft:"20px"}}>
                    <li>Faculty</li>

                    <li>Reasearch scholars</li>
                    <li>Industrial persons</li>
                </ul>
                
            </div>
            {/* <div class="item">
                <h1>Slide 6</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
            </div>
            <div class="item">
                <h1>Slide 7</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
            </div> */}
            <button id="next"><img src="/images/right-arrow-angle.png" style={{width:"75px",height:"100px"}}></img></button>
            <button id="prev"><img src="/images/left-arrow.png" style={{width:"75px",height:"100px"}}></img></button>
        </div>
    
        </div>
    );
}

export default About;
// import React, { useEffect } from 'react';
// import './About.css';

// function About() {
//     useEffect(() => {
//         const items = document.querySelectorAll('.slider .item');
//         const next = document.getElementById('next');
//         const prev = document.getElementById('prev');
//         let active = 0;

//         function loadShow() {
//             items.forEach((item, index) => {
//                 if (index === active) {
//                     item.style.transform = 'none';
//                     item.style.zIndex = 1;
//                     item.style.filter = 'none';
//                     item.style.opacity = 1;
//                 } else {
//                     const distance = 120 * Math.abs(index - active);
//                     const scaleFactor = 1 - 0.2 * Math.abs(index - active);
//                     const rotation = index - active < 0 ? 1 : -1;

//                     item.style.transform = `translateX(${distance}px) scale(${scaleFactor}) perspective(16px) rotateY(${rotation}deg)`;
//                     item.style.zIndex = -Math.abs(index - active);
//                     item.style.filter = 'blur(5px)';
//                     item.style.opacity = Math.abs(index - active) > 2 ? 0 : 0.6;
//                 }
//             });
//         }

//         loadShow();

//         next.onclick = function () {
//             active = active + 1 < items.length ? active + 1 : active;
//             loadShow();
//         };

//         prev.onclick = function () {
//             active = active - 1 >= 0 ? active - 1 : active;
//             loadShow();
//         };
//     }, []);

//     return (
//         <div className="About">
//             <h1>ABOUT THE PROGRAM</h1>
//             <div className="slider">
//                 <div className="item">
//                     <h1>Slide 1</h1>
//                     <h2>Objectives</h2>
//                     <p></p>
//                 </div>
//                 <div className="item">
//                     <h1>Slide 2</h1>
//                     <h4>Hi</h4>
//                 </div>
//                 <div className="item">
//                     <h1>Slide 3</h1>
//                 </div>
//                 <div className="item">
//                     <h1>Slide 3</h1>
//                 </div>
//                 <div className="item">
//                     <h1>Slide 3</h1>
//                 </div>
//                 <button id="next">
//                     <img src="/images/right-arrow-angle.png" alt="Next" style={{ width: "75px", height: "100px" }} />
//                 </button>
//                 <button id="prev">
//                     <img src="/images/left-arrow.png" alt="Previous" style={{ width: "75px", height: "100px" }} />
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default About;
