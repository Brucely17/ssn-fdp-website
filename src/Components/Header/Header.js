import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll';
function Header() {
  return (
    <div>
        
    <script src="https://kit.fontawesome.com/8862169197.js" crossorigin="anonymous"></script>
        <header class='header'>
    

        <img src='/images/ssn.svg.png' style={{width:"100px"}}></img>
        <nav class='header__nav'>
        <div className='anchors'>
            {/* <a  href='/'>About FDP</a>
            <a href='/'>About Program</a>
            <a href='/'>Speakers</a>
            <a href='/'>Co-ordinators</a>
            <a href='/'>Registration</a>
            <a href='/'>Contact</a> */}
            <Link to="FDP" smooth={true} duration={500}>About FDP</Link>
            <Link to="About" smooth={true} duration={500}>About Program</Link>
            <Link to="speakers" smooth={true} duration={500}>Speakers</Link>
            <Link to="CoOrdinators" smooth={true} duration={500}>Co-ordinators</Link>
            <Link to="Registration" smooth={true} duration={500}>Registration</Link>
            <Link to="footer" smooth={true} duration={500}>Contact</Link>
        </div>
        </nav>
    </header>

    </div>
  )
}

export default Header