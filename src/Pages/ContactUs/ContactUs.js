import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
import '../../AppCss.css';

function Payment() {

        return (
          <div className="container">
            <div className="row">
              <section className="col-12">
                <div className="row2" 
                style={{paddingLeft:"10px",
                paddingRight:"10px"}}>
                  <div
                    className="agendaHome"
                    // style={{ position: "relative", paddingRight: "500px" }}
                  >
                    <h2 className="agendaHomeH2">Contact Us</h2>

                    <p>
                      <strong>General Inquiry:</strong>
                      <br />
                    </p>
                    <p>
                      Conference Manager -<br />
                      Wilson Cambridge <br />
                    </p>
                    <p>
                      <em>For any Complaint or query</em>
                      <br />
                      Mail us on: noreplyicebm@gmail.com
                    </p>

                    <p>
                      <em>WhatsApp:</em>+1 (256) 398‑1089
                    </p>

                    <br />
                  </div>{" "}
                  <RelatedConference></RelatedConference>
                </div>
              </section>
            </div>
            <Footer></Footer>
          </div>
        );
  }

  export default Payment;
  