import React from 'react'
import Footer from '../components/footer'

const Contact = () => {
    return ( 
        <div>
            <div className="contact">
            <div className="container-fluid">
                <h2 className="text-capitalize">get in touch</h2>
                <div className="underline mb-5"></div>
                <div className="row justify-content-between">
                    <div className="forms col-lg-6">
                        <form className="px-1" action="">
                            <input className="p-2 pl-5" type="text" placeholder="Full Name" />
                            <input className="p-2" type="text" placeholder="Email Address" />
                            <input className="p-2" type="text" placeholder="Subject" />
                            <textarea className="p-2" name="message" placeholder="Message" id="" cols="30" rows="10" />
                            <input id="submit" className="px-4 py-2 mt-4" type="submit" value="Send Message" />
                        </form>
                    </div>
                    <div className="contact_img col-lg-5">
                        <img className="w-100" src="images/contact.jpg" alt="" />
                    </div>
                </div>

                <br />
                <div className="row infos justify-content-center">
                    <div className="row col-lg-5 mt-5 ">
                        <div className="col-3 text-center">
                            <img src="images/smartphone.png" alt="" />
                        </div>
                        <div className="col-7 contents">
                            <h6>
                                <a href="tel:+917994010405">7994010405</a>
                            </h6>
                            <p> Personal mobile number to contact  </p>
                        </div>
                    </div>
                    <div className="row col-lg-5 mt-5 ">
                        <div className="col-3 text-center">
                            <img src="images/gmail (1).png" alt=""/>
                        </div>
                        <div className="col-7 contents px-0">
                            <h6>
                            <a href="mailto:anfas.mehaboob@gmail.com">
                                anfas.mehaboob@gmail.com
                            </a>
                            </h6>
                            <p> Personal mail address you can mail </p>
                        </div>
                    </div>
                </div>
                
            
        </div>
    </div>
        <Footer />
        </div>

     );
}
 
export default Contact;