import logo from './logo.svg';
import './App.css';
import AIprofilePic from './images/headshot.jpg'


// ADD THIS PIC TO THE ABOUT PAGE COMPONENT WHEN FINISHED WITH DRAFT
const profilePic = {
  name: 'AIprofilePic',
  imageUrl: AIprofilePic,
  imageHeight: 300,
  imageWidth: 300,
};

function App() {
  return (
    <div className="App">

      <div classNameName="navbar">
        {/* ASK JOSH WHY ^^ THIS ^^ IS A THING??? classNameName works but className doesn't??? */}
        <nav className="navbar navbar-expand-lg bg-light">

          <div className="container-fluid">

            <a className="navbar-brand" href="#">Alyssa Holbert</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link"  href="/#AboutSection">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#ProjectSection">Work</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>

              </ul>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
                <label id="langToggle" className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div>

              <div className="d-flex">
                <button className="btn btn-outline-primary" type="submit">Resumé</button>
              </div>

            </div>

          </div>
        </nav>

{/* END NAVBAR */}


<div>
  <div className="px-4 py-5 my-5 ">

      <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse  g-5 py-5">

              <div className="col-10 col-sm-8 col-lg-6">
                  <img className="d-block mx-lg-auto img-fluid" 
                      loading="lazy" 
                      alt="my profile photo from Awesome Inc" 
                      src= {profilePic.imageUrl}
                      style={{
                          width: profilePic.imageWidth,
                          height: profilePic.imageHeight
                          }}
                  ></img>
              </div>

              <div className="col-lg-6">

                  <h1 className="display-5 fw-bold lh-1 mb-3" id="AboutSection">About Me</h1>
                    <div>
                        <p>Hi! My name is Alyssa, and I enjoy developing web applications.</p>
                        <p>Perfectly dust; grievous decaying charm. Aquiline form heavy-hearted state basement 
                            I fear that ill health? Vault abandon fall relic doorstep providence perfume allurem
                            nt suffocating pendulum disquiet. Cartilaginous coach and six stricken suffocating da
                        </p>
                        <p>Look at my skills:</p>
                    </div>

                        <ul id="skill-list">
                          <li>skill</li>
                          <li>here's another</li>
                          <li>oops all skills</li>
                          <li>look, skill</li>
                          <li>hi I'm a skill</li>
                          <li>skill?</li>
                        </ul>
              </div>
          </div>
        </div>

  </div>
</div>

{/* END ABOUT ME SECTION */}

<div className="px-4 py-5 my-5 ">
  <div className="container col-xxl-8 px-4 py-5">

  <div className="col-lg-6">

<h1 className="display-5 fw-bold lh-1 mb-3" id="ProjectSection">Things I've made</h1>
  <div>
      
  <div id="projectCard" className="card mb-3">
          <div className="row g-0">

            <div className="col-md-4">
              <img src={profilePic.imageUrl} className="img-fluid rounded-start" alt="..."></img>
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Featured Project: Project Name</h5>
                <p className="card-text">Information about the project, what the requirements were, what tech was used to make it, what I learned from it.</p>
                <a className="card-text"><small className="text-muted" href="#">Link to project webpage</small></a>
              </div>
            </div>

          </div>
    </div>

    <div id="projectCard" className="card mb-3">
          <div className="row g-0">

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Featured project: Project Name</h5>
                <p className="card-text">Information about the project, what the requirements were, what tech was used to make it, what I learned from it.</p>
                <a className="card-text"><small className="text-muted" href="#">Link to project webpage</small></a>
              </div>
            </div>

            <div className="col-md-4">
              <img src={profilePic.imageUrl} className="img-fluid rounded-end" alt="..."></img>
            </div>

          </div>
    </div>

    
    <div id="projectCardSmall" className="card">
      <img src={profilePic.imageUrl} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Project Name</h5>
        <p className="card-text">Info about project</p>
        <a href="#">Visit site</a>
      </div>
    </div>




  </div>

</div>



  </div>
</div>










{/* vvvv DON'T TOUCH THESE DIVS vvvv */}
      </div>
    </div>
  );
}

export default App;
