import MainPaperSubmission from './MainPaperSubmission';
import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
function PaperSubmission() {
        return (
            <div className='container'>
              <div className='row'>
                <section className='col-12'>
                  <div className='row2'>
                    <MainPaperSubmission></MainPaperSubmission>
                    <RelatedConference></RelatedConference>
                  </div>
                </section>
              </div>
              <Footer></Footer>
        
            </div>
          );
  }

  export default PaperSubmission;
  