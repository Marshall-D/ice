import '../AppCss.css';

import pic1 from "../images/2_pic.jpg"
import pic2 from "../images/5_pic.jpg"
import pic3 from "../images/7_pic.jpg"
import pic4 from "../images/8_pic.jpg"


function RelatedConference() {
    return (
      <div className="col-md-3_2 ">
        <div className="agendaHome">
          <center>
            {" "}
            <span className="agendaHome2">Related Conference </span>{" "}
          </center>

          <br />

          <a href="https://itfbis.space/" target="_blank" className="conflist">
            <strong>ITFBIS 2023</strong>
          </a>
          <br />
          <br />
          <br />
          <br />

          {/* <br />

          <a
            href="http://internationalconference.ueuo.com/iWomen-Health%20Conference-2019.htm"
            target="_blank"
            className="conflist"
          >
            <strong>iWomen-AUG-2019</strong>
          </a>
          <br />

          <br />

          <a href="http://#" target="_blank" className="conflist">
            <strong>ICSET</strong>
          </a>
          <br /> */}

          <span className="agendaHome2">Index / Supported By</span>

          <table
            className="table"
            width="100%"
            cellspacing="0"
            cellpadding="10"
            border="0"
          >
            <tbody style={{ boxSizing: "border-box" }}>
              <tr>
                <td align="center">
                  <img src={pic1} />
                </td>
              </tr>
              <tr>
                <td align="center">
                <img src={pic2} />
                </td>
              </tr>
              <tr>
                <td align="center">
                <img src={pic3} />
                </td>
              </tr>
              <tr>
                <td align="center">
                <img src={pic4} />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/12_pic.gif" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/10_pic.png" />
                </td>
              </tr>
              <tr>
                <td align="center">&nbsp;</td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/4_pic.jpg" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img
                    src="https://icebm.icmbpsgroup.com/1_pic.jpg"
                    width="241"
                    height="65"
                  />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/6_pic.jpg" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/11_pic.png" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/13_pic.jpg" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img src="https://icebm.icmbpsgroup.com/9_pic.png" />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img
                    src="https://icebm.icmbpsgroup.com/3_pic.jpg"
                    width="228"
                    height="58"
                  />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img
                    src="https://icebm.icmbpsgroup.com/doiii.jpg"
                    width="107"
                    height="71"
                  />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <img
                    src="https://icebm.icmbpsgroup.com/jg.jpg"
                    width="75"
                    height="89"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </div>
    );
  }
  
  export default RelatedConference;

