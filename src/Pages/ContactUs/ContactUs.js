import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
function Payment() {
        return (
          <div className="container">
            <div className="row">
              <section className="col-12">
                <div className="row2">
                  <div className="agendaHome"  style={{position: "relative",   paddingRight: "500px"}}
>
                    <h2 className='agendaHomeH2'>Contact Us</h2>

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
                      Mail us on: inquiry@blader.com.
                    </p>

                    <p>
                      <em>WhatsApp:</em>+1 343 800 2457.
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
  