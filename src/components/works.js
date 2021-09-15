import React from 'react'
const Work = () => {

    const works = [

      {
        id:'1',
        name:'front-end development ',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci architecto esse hic mollitia est vel, iure',
        images:'images/web-design.png'
      },
      {
        id:'2',
        project_name:'web app development',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci architecto esse hic mollitia est vel, iure',
        images:'images/monitor.png'
      },
      {
        id:'3',
        project_name:'responsive design ',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci architecto esse hic mollitia est vel, iure',
        images:'images/responsive-design.png'
      },
      {
        id:'4',
        project_name:'back-end development ',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci architecto esse hic mollitia est vel, iure',
        images:'images/icons8-backend-development-96.png'
      },
    ]

    const renderWorks = works.map(work => {
      return(
        <div key={work.id} className="row col-lg-6 col-md-6 justify-content-between mt-5 p-4">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6"><img className="w-100" src={work.images} alt=""/></div>
              <div className="col-lg-10 col-md-12">
                <h5 className="text-capitalize "> {work.name} </h5>
                <p> {work.details}</p>
              </div>
            </div>
      )
    })

    return ( 
        <div className="my_services my-5 py-5">
     
      
        <div className="container-fluid">
          <h2 className="text-capitalize mt-5 mb-3">my service</h2>
          <div className="underline mb-5"></div>
          <div className="row justify-content-between pt-5">

            {renderWorks}
            
          </div>
        </div>
      </div>
     );
}
 
export default Work;