import React from 'react'
import Banner from '../components/baneer'
import Work from '../components/works'
import Testimonial from '../components/testmonials'
import Projects from '../components/projects'
import Footer from '../components/footer'

const Home = () => {
    return ( 
        <div>
            <Banner />
            <Work />
            <Testimonial />
            <Projects />
            <Footer />
        </div>
     );
}
 
export default Home;