import { Link } from 'react-router-dom';
import "../Styles/Mobile.css";

function Mobile() {
    return (
      <div>
        <div className="mobile_menu">
          <div>
            <ul className="mobile_menu_ul">
              <li className="mobile_menu_title">
                <div style={{ padding: "15px" }}>
                  International Conference on Education, Business &amp;
                  Management - ICEBM 2023.{" "}
                  <span className="mobile_menu_title_span">
                    ICEBM 2023 |22nd - 26th August 2023| Calgary, Canada
                  </span>
                </div>
              </li>
              <li className="mobile_menu_li">
                <Link to="/" className="mobile_menu_a">
                  Home
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="call" className="mobile_menu_a">
                  Call For Paper
                </Link>
              </li>

              <li className="mobile_menu_li">
                <Link to="committee" className="mobile_menu_a">
                  Committee
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="paperSubmission" className="mobile_menu_a">
                  Paper Submisison
                </Link>
              </li>
           
              <li className="mobile_menu_li">
                <Link to="venue" className="mobile_menu_a">
                  Venue
                </Link>
              </li>
              <li className="mobile_menu_li">
                <Link to="payment" className="mobile_menu_a">
                  Registration and Payment
                </Link>
              </li>

              <li className="mobile_menu_li">
                <Link to="contact" className="mobile_menu_a">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default Mobile;