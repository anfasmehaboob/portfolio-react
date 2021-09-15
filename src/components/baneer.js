import React from 'react'
import '../App.scss';

const Banner = () => {
    return ( 
        <div className="intro_page">
            <div className="bub bubble1"></div>
            <div className="bub bubble2"></div>
            <div className="bub bubble3"></div>
            <div className="bub bubble4"></div>


            <div className="container-fluid ">
                <div className="row justify-content-between">
                    <div className="col-lg-6  img_container mt-5">
                        <img  src="images/anfas.jpg" alt=""/>
                    </div>
                    
                    <div className="col-lg-6  content_container mt-5 ">
                        <div className="contain pt-4 px-5 pb-5">
                            <h2 className="text-capitalize">Anfas mehaboob</h2>
                            <p className="mt-4 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit dicta at nesciunt perspiciatis deserunt quos ut, optio minima est! Totam ipsam soluta fugit fugiat, nemo facilis aperiam quam impedit.</p>
                            <a className="my_button mt-2 px-5 py-3 text-capitalize" >download CV</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
   
     );
}
 
export default Banner;