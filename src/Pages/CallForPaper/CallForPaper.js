import CfpTable from './CfpTable';
import Footer from '../../components/Footer';


function CallForPaper() {
    return (
      <div>
        <div
          className="container"
          style={{paddingBottom: "25px", position: "relative"}}
        >
          <div className="row">
            <section role="main" className="col-12">
              <div className="row">
                <div className="col-md-9">
                  <div className="csc-default">
                    <div className="agendaHome">
                      <h2 className='agendaHomeH2' >Call For Paper</h2>
                      <p className='agendaHomeP'>
                        <strong>
                          International Conference on Education, Business &amp;
                          Management (ICEBM)
                        </strong>{" "}
                        provides a leading forum for the presentation of new
                        advances and research results in the fields of{" "}
                        <strong>Education, Business &amp; Management</strong>.
                        The conference will bring together leading researchers,
                        Business man and scientists in the domain of interest
                        from around the world. Accordingly, Topics of interest
                        for submission include, but are not limited to:{" "}
                      </p>

                      <p >
                        send paper abstract to{" "}
                        <strong>noreplyicebm@gmail.com</strong>
                      </p>
                      <CfpTable></CfpTable>
                    </div>
                  </div>
                </div>
              </div>
              <Footer></Footer>
              {/* footer bottom  */}
            </section>
          </div>
        </div>
      </div>
    );
}

export default CallForPaper;