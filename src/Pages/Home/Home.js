import Footer from '../../components/Footer';
import HomeDIv from './HomeDiv';
import HomeTable from './HomeTable';
import RelatedConference from './RelatedConference';
import '../../AppCss.css';

function Home() {
    return (
      <div
        id="main"
        
        style={{ paddingBottom: "25px", position: "relative" }}
        className="container"
      >
        <div className="row">
          <section
            role="main"
            className="content col-md-12 col-sm-12 col-xs-12"
          >
            <div className="row">
              <div className="col-md-9">
                <div id="c128283" className="csc-default">
                  <div className="agenda-home">
                    <h2>Home</h2>
                    <p>
                      Welcome to the Official Website of the&nbsp;{" "}
                      <strong>
                        {" "}
                        International Conference on Education, Business &amp;
                        Management
                      </strong>
                      <strong> - ICEBM 2023</strong>
                      <strong>
                        . It will be held during 22nd - 26th May 2023
                        &nbsp;Canada. ICEBM 2023
                      </strong>
                      <strong> </strong>is being organized by Beyond Banking
                      Group. The aim of the conference is to provide the
                      platform for Students, Researchers and Academicians to
                      share the knowledge and ideas in the recent trends in the
                      field of{" "}
                      <strong>Education, Business &amp; Management.</strong>
                    </p>
                    <div id="skd_home_common">
                      <p>
                        <strong>ICEBM 2023</strong>
                        <strong> </strong>will provide an excellent
                        international forum for sharing knowledge and a result
                        in <strong>Education, Business &amp; Management</strong>
                        .The aim of the Conference is to provide a platform to
                        the researchers and practitioners from both academia as
                        well as industry to meet the share cutting-edge
                        development in the field.
                      </p>
                      <ul type="disc">
                        <li>
                          The Proceeding will be archived in Digital Library.
                        </li>
                        <li>
                          Each Paper will be assigned Digital Object Identifier
                          (DOI) from CROSSREF.
                        </li>
                        <li>
                          The Proceeding will be submitted to ISI Thomson for
                          review and indexing.
                        </li>
                        <li>
                          The Proceedings will be published in International
                          Journals with ISSN Numbers.
                        </li>
                      </ul>
                      The primary goal of the conference is to promote research
                      and developmental activities in{" "}
                      <strong>Education, Business &amp; Management. </strong>
                      Another goal is to promote scientific information
                      interchange between researchers, developers, students, and
                      practitioners working in and around the world. The
                      conference will be held every year to make it an ideal
                      platform for people to share views and experiences in{" "}
                      <strong>Education, Business &amp; Management</strong>
                      related areas. English is the official language of the
                      conference. We welcome paper submissions. Prospective
                      authors are invited to submit full (and original research)
                      papers (which is NOT submitted/published/under
                      consideration anywhere in other conferences/journal) in
                      (doc only) format via email to{" "}
                      <strong>
                        <u>inquiry@blader.com</u>
                      </strong>
                      <hr></hr>
                      <hr></hr>
                      <h2>Important Dates :</h2>
                      <HomeTable></HomeTable>
                      <HomeDIv></HomeDIv>
                    </div>
                  </div>
                </div>
              </div>
              <RelatedConference></RelatedConference>
            </div>
            <div id="c128283" className="csc-default">
              <div className="actus-home">
                <h2></h2>
                <div className="row"></div>
              </div>
            </div>{" "}
            <Footer></Footer>
          </section>
        </div>
      </div>
    );
  }
  
  export default Home;