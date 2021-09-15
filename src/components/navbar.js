import React from 'react'
import '../App.scss';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="container-fluid px-5  mt-3">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link to='/'  className="navbar-brand"><img src="images/logo.png" alt="logo"/></Link>
              


              <button className="menu navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
              </button>


        
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    
                    <Link to='/' className="nav-link active text-capitalize" aria-current="page" >about me</Link>
                    
                  </li>
                  <li className="nav-item">
                   
                     <Link to='/project' className="nav-link text-capitalize" >Projects</Link>
                    
                  </li>
                  <li className="nav-item">
                   
                      <a  className="nav-link text-capitalize">blog</a>
                    
                  </li>
                  <li className="nav-item">
                    
                      <Link to='/contact' className="nav-link text-capitalize">contact</Link>
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
     );
}
 
export default Navbar;