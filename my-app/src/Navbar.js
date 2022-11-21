import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (

<div classNameName="navbar">
        {/* ASK JOSH WHY ^^ THIS ^^ IS A THING??? classNameName works but className doesn't??? */}
    <nav id="navbar" className="navbar navbar-expand-lg">

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
                  <a className="nav-link" href="/#BlogSection">Blog</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#ContactSection">Contact</a>
                </li>

              </ul>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
                <label id="langToggle" className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div>

              <div className="d-flex">
                <button className="btn btn-outline-light" type="submit">
                  resumé <FontAwesomeIcon icon={faDownload} />
                  </button>
              </div>

            </div>

          </div>
        </nav>
        </div>
    )
}