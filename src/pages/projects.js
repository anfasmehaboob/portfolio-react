import React from 'react'

const Projects = () => {


    const projects = [
        {
          id:'1',
          project_name:'project1',
          details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium provident',
          images:'images/pexels-startup-stock-photos-7377.jpg'
        },
        {
          id:'2',
          project_name:'project2',
          details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium provident',
          images:'images/pexels-startup-stock-photos-7377.jpg'
        },
        {
          id:'3',
          project_name:'project3',
          details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium provident',
          images:'images/pexels-startup-stock-photos-7377.jpg'
        },
      ]
  
      const renderProjects = projects.map((project) => {
        return(
            <div key={project.id} class="col-lg-4 col-md-4 projects_container my-4">
            <div class="img-container">
              <img  src={project.images} alt=""/>
              <div class="overlay">
                  <div class="content px-3">
                    <h5 class="text-white mb-4">{project.project_name} </h5>
                    
                    
                    <p class="text-light">{project.details}</p>
                    <a class="px-3 py-2" href="">view more <i class="fas fa-angle-right"></i></a>
                  </div>
              </div>
            </div>
        </div>
        )
      })
  


    return ( 
        <div class="projects">
        <div class="container-fluid">
          <h2 class="text-capitalize mt-5 mb-3">projects</h2>
          <div class="underline mb-5"></div>
  
          <div class="row justify-content-between">

           
          {renderProjects}
  
      
            
          </div>
  
          
   
        </div>
      </div>
     );
}
 
export default Projects;