import '../AppCss.css';
import { Link, NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import React, {useContext} from 'react'
import { AuthContext } from '../Context/Context';
import Mobile from "./Mobile";
import {ImMenu} from "react-icons/im"
import {MdClose} from "react-icons/md"
import TopHeader from './TopHeader';
import grandeur from "../images/grandeur.jpeg"
import download from "../images/Download-PDF-Button.png"






function Header() {
  const { showSide, toggleSide} = useContext(AuthContext)

    return (
      <header>
        <TopHeader/>
        {/* <div className="topHeader">
        {!showSide ? (
            <div
              style={{
                position:"fixed",
                paddingLeft: "20px",
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                // height: "100%",
              }}
              onClick={toggleSide}
            >
              <ImMenu   color="red" fontSize="2em" />
            </div>
          ) : (
            <div
              style={{
                position:"fixed",
                paddingLeft: "20px",
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                // height: "100%",
              }}
              onClick={toggleSide}
            >
              <MdClose color="red" fontSize="2em" />
            </div>
          )}
          <div className="container">
            <div className="row">
              <div className="col-md-3 "></div>
              <div className="access"></div>
            </div>
          </div>
        </div> */}
        <div className="header_extra_2">
          {/* {!showSide ? (
            <div
              style={{
                position:"fixed",
                paddingLeft: "20px",
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                // height: "100%",
              }}
              onClick={toggleSide}
            >
              <ImMenu   color="red" fontSize="2em" />
            </div>
          ) : (
            <div
              style={{
                position:"fixed",
                paddingLeft: "20px",
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                // height: "100%",
              }}
              onClick={toggleSide}
            >
              <MdClose color="red" fontSize="2em" />
            </div>
          )} */}
          <div></div>
        </div>
        {showSide && (
          <div className="burger" onClick={toggleSide}>
            <Mobile />
          </div>

        )}

        <div className="nav">
          <div className="container">
            <div className="row">
              <div role="banner" className="logo">
                <Link to="/" className="logoA" href="">
                  {" "}
                  <img
                    src={grandeur}
                    className="logo_img"
                  />
                </Link>
              </div>
              <nav className="profilsMenu">
                <ul className="collapse">
                  <a
                    className="collapseA"
                    href="
                    https://form.jotform.com/230584044583558"
                    target="_blank"
                  >
                    <img
                      src={download}
                      className="jotform_img"
                    />
                  </a>
                </ul>
              </nav>
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;