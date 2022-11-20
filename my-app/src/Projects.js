import him from './images/him.jpg';

const fillerpic = {
    name: 'fillerpic',
    imageUrl: him,
    imageHeight: 300,
    imageWidth: 300,
};


export default function Projects(){
    return(
<div>
<div className="px-4 py-5 my-5">
  <div className="container col-xxl-8 px-4 py-5 ">

    <div className="col-lg-6 text-center">
      <h1 className="display-5 fw-bold lh-1 py-5" id="ProjectSection">Things I've made</h1>
    </div>
  

    <div id="projectCard" className="card mb-3">
            <div className="row g-0">

              <div className="col-md-4">
                {/* <span className="hover-imgBW"> */}
                  <img src={fillerpic.imageUrl} className="img-fluid rounded-start" alt="..."></img>
                {/* </span> */}
              </div>

              <div className="col-md-8">
                <div className="card-body">
                <h7 className="text-align-start">featured project</h7>
                  <h2 className="card-title">Neighborly</h2>
                  <p className="card-text">A social media site focused on building local connections, 
                                          getting to know your neighbors, and creating a smalle-scale barter economy 
                                          with other individuals in your community.</p>
                  <a className="card-text"><small className="text-muted" href="#">Link to project webpage</small></a>
                </div>
              </div>

            </div>
      </div>


    <div id="projectCard" className="card mb-3">
          <div className="row">

            <div className="col-md-8">
              <div className="card-body">
                <h7 className="text-align-start">featured project</h7>

                <h2 className="card-title">Weather App</h2>
                <p className="card-text">The first "real" project that I made for Awesome Inc's bootcamp, 
                                        refactored with cleaner code and more design features.
                                        View your current location's weather or search for a different location.</p>
                <a className="card-text"><small className="text-muted" href="#">Link to project webpage</small></a>
              </div>
            </div>

            <div className="col-md-4">
              {/* <span className="hover-imgBW"> */}
                <img src={fillerpic.imageUrl} className="img-fluid rounded-end" alt="..."></img>
              {/* </span> */}
            </div>

          </div>
    </div>
  </div>
</div>
    
    


    <div className="row">
      <div className="card-group px-6">

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={fillerpic.imageUrl} className="card-img-top" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Tic Tac Toe</h5>
          <p className="card-text">A simple tic tac toe game coded in Javascript, styled in my Heartbreaker palette.</p>
          <a href="#">Visit site</a>
        </div>
      </div>

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={fillerpic.imageUrl} className="card-img-top" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">2Dew</h5>
          <p className="card-text">A to-do list app that utilizes local storage to keep user data.</p>
          <a href="#">Visit site</a>
        </div>
      </div>

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={fillerpic.imageUrl} className="card-img-top" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Mind Reader</h5>
          <p className="card-text">A fortune-teller that utilizes state manipulation to change page views.</p>
          <a href="#">Visit site</a>
        </div>
      </div>
    </div>


</div>
</div>    
    )
}