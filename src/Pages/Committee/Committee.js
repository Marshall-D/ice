
import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
import MainCommittee from './MainCommittee';
function Committee() {
  return (
    <div className='container'>
      <div className='row' 
      style={{paddingLeft:"20px",
      paddingRight:"20px"}}>
        <section className='col-12'>
          <div className='row2'>
            <MainCommittee></MainCommittee>
            <RelatedConference></RelatedConference>
          </div>
        </section>
      </div>
      <Footer></Footer>

    </div>
  );
}

  export default  Committee;
  