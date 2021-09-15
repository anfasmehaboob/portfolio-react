import React from 'react'

const Footer = () => {
    return ( 
        <footer class="py-4 mt-5">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-lg-4 col-md-4 col-sm-12 copy"> 
              <p class="mb-0 text-capitalize"> <span>	&copy;</span> coptright 2021 . all rights reserved</p>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-12 row icons ">
              
             <a class="col-3" href="https://www.linkedin.com/in/anfas-mehaboob/">
              <i class="fab fa-linkedin-in "></i>
             </a>
             <a class="col-3" href="#">
              <i class="fab fa-gitlab "></i>
             </a>
              <a class="col-3" href="#">
                <i class="fab fa-github "></i>
              </a>
              
              
            </div>
          </div>
        </div>
      </footer>
     
     );
}
 
export default Footer;