import '../AppCss.css';
import { Link, NavLink } from 'react-router-dom';


function Header() {
    return (
      <header >
        <div className="topHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-3 "></div>
              <div className="access"></div>
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="container">
            <div className="row">
              <div
                role="banner"
            
                className="logo"
              >
                <Link  to="/"
                className='logoA' 
                href="">
                  {" "}
                  <img
                    src="https://ice-bm.space/grandeur.jpg"
                    style={{ height: "122px", paddingTop: "10px" }}
                  />
                </Link>
              </div>
              <nav
                
                className="profilsMenu"
              >
                <ul className="collapse">
                  <a
                  className='collapseA'
                    href="https://form.jotform.com/222753456046457"
                    target="_blank"
                  >
                    <img
                      src="https://ice-bm.space/Download-PDF-Button.png"
                      style={{ height: "60px" }}
                    />
                  </a>
                </ul>
              </nav>
              <nav
                role="navigation"
                
                className="mainmenu"
              >
            {/* <Link to="reg" className="burger_menu2">Registration</Link> */}
                <ul className="collapse2">
                  <li className="nonActive ">
                  <Link to="/" className="aNotSelected">Home</Link>
                    {/* <a href="ICEBM-2023.htm" className="aSelected">
                      Home
                    </a> */}
                  </li>

                  <li className='nonActive'>
                  <Link to="call" className="aNotSelected">Call For Paper</Link>

                    {/* <a className="aNotSelected" 
                    href="callforpaperr.htm">Call For Paper</a> */}
                    {/* <ul>
                      <li className="ICEBM-2023.htm">Home</li>
                      <li>
                        <a href="#">Dauphine Facts &amp; Figures</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className='nonActive'>
                    <Link to="committee" className="aNotSelected" 
                     href="committee.htm">Committee</Link>
                    {/* <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">Dauphine Facts &amp; Figures</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className='nonActive'>
                    <Link to="paperSubmission" className="aNotSelected" 
                    href="papersubmission.htm">Paper Submisison</Link>
                    {/* <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">Dauphine Facts &amp; Figures</a>
                      </li>
                    </ul> */}
                  </li>

                  <li className='nonActive'>
                    <Link to="venue" className="aNotSelected"  
                    href="venue.htm">Venue</Link>
                    {/* <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">Dauphine Facts &amp; Figures</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className='nonActive'>
                    <Link to="payment" className="aNotSelected" 
                     href="Registrationandfee.htm">Registration and Payment</Link>
                    {/* <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">Housing services</a>
                      </li>
                    </ul> */}
                    {/* <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">Research </a>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li>
                    <a href="#">Gallery</a>
                    <ul>
                      <li className="hidden-md hidden-lg">Home</li>
                      <li>
                        <a href="#">International Team</a>
                      </li>
                      <li>
                        <a href="#">Dauphine International</a>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className='nonActive'>
                    <a className="aNotSelected"  href="Registrationandfee.htm">Payment</a>{" "}
                  </li> */}

                  <li className='nonActive'>
                    <Link to="contact" className="aNotSelected"  href="contact.htm">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              {/* <div className="visible-xs button-nav">
                {" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#mainMenu > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>About</span> Dauphine
                    </span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#profilsMenu > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>You</span> are...
                    </span>{" "}
                    <span className="icon-profil"></span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed accessButton"
                    data-toggle="collapse"
                    data-target=".accessLinks > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>Direct</span> access
                    </span>{" "}
                    <span className="icon-access"></span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="visible-xs button-nav">
                {" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#mainMenu > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>About</span> Dauphine
                    </span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#profilsMenu > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>You</span> are...
                    </span>{" "}
                    <span className="icon-profil"></span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="col-xs-4">
                  {" "}
                  <button
                    type="button"
                    className="navbar-toggle collapsed accessButton"
                    data-toggle="collapse"
                    data-target=".accessLinks > ul"
                  >
                    {" "}
                    <span className="title">
                      <span>Direct</span> access
                    </span>{" "}
                    <span className="icon-access"></span>{" "}
                  </button>{" "}
                </div>{" "}
              </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;