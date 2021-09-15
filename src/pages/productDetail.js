import React from 'react'
import {useParams} from 'react-router-dom'


 const ProductDetails = ({projects}) => {


     return ( 

        <div class="detailpage mt-5">
        <div class="container-fluid">
            <h3 class="text-capitalize project_heading">{projects}</h3>
            <div class="tecnology">
                <h5 class="text-capitalize my-4">technologies</h5>
                <p> HTML , CSS , SASS, JAVASCRIPT , DJANGO, PYTHON</p>
            </div>
            <div class="detailssection">
                <h5 class="text-capitalize">project details</h5>
                <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque corporis eaque inventore autem rem ipsam tenetur illo qui maiores temporibus distinctio, dolor voluptas veniam quisquam assumenda labore consectetur cum! dolor, sit amet consectetur adipisicing elit. Nemo facilis placeat repellendus. Mollitia temporibus, explicabo, aut reiciendis iure ipsam itaque quod, fugiat impedit est atque sit aliquid accusantium quos veritatis?</p>
            </div>
            <div class="links">
                
            </div>   

        </div>
    </div>



      );
 }
  
 export default ProductDetails;