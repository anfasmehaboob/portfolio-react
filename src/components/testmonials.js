import React from 'react'

const Testimonial = () => {
    return ( 
        <div className="testimonials py-5">
      <div className="container-fluid">
        <h2 className="text-capitalize mt-5 mb-3">testimonials</h2>
        <div className="underline mb-5"></div>
        <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-between mb-5">
                  <div className="col-lg-5 glass_container my-4 mx-4 p-5">
                    <p>"Lorem ipsum dolor sit amet consectetur Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  iusto ipsa, explicabo "</p>
                    <div className="row customer_detail mt-5"> 
                      <div className="col-lg-3">
                        <img className=" rounded-circle" src="images/cutomer.jpg" alt=""/>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <h5>customer name</h5>
                        <p>founder ceo sanjari</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-5 glass_container my-4 mx-4 p-5">
                    <p>"Lorem ipsum dolor sit amet consectetur Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  iusto ipsa, explicabo "</p>
                    <div className="row customer_detail mt-5"> 
                      <div className="col-lg-3">
                        <img className=" rounded-circle" src="images/cutomer.jpg" alt=""/>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <h5>customer name</h5>
                        <p>founder ceo sanjari</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div className="carousel-item">
                

                <div className="row justify-content-between mb-5">
                  <div className="col-lg-5 glass_container my-4 mx-4 p-5">
                    <p>"Lorem ipsum dolor sit amet consectetur Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  iusto ipsa, explicabo "</p>
                    <div className="row customer_detail mt-5"> 
                      <div className="col-lg-3">
                        <img className=" rounded-circle" src="images/cutomer.jpg" alt=""/>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <h5>customer name</h5>
                        <p>founder ceo sanjari</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-5 glass_container my-4 mx-4 p-5">
                    <p>"Lorem ipsum dolor sit amet consectetur Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  amet consectetur  Itaque  iusto ipsa, explicabo "</p>
                    <div className="row customer_detail mt-5"> 
                      <div className="col-lg-3">
                        <img className=" rounded-circle" src="images/cutomer.jpg" alt=""/>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <h5>customer name</h5>
                        <p>founder ceo sanjari</p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
              
            </div>
            
          </div>

        </div>

      </div>
      
    </div>
     );
}
 
export default Testimonial;