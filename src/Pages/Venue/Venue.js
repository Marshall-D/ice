import MainVenue from './MainVenue';
import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
function Venue() {
        return (
            <div className='container'>
              <div className='row'>
                <section className='col-12'>
                  <div className='row2'>
                    <MainVenue></MainVenue>
                    <RelatedConference></RelatedConference>
                  </div>
                </section>
              </div>
              <Footer></Footer>
        
            </div>
          );
  }

  export default Venue;
  