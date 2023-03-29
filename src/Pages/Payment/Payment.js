import MainPayment from './MainPayment';
import Footer from '../../components/Footer';
import RelatedConference from '../../components/RelatedConference';
function Payment() {
        return (
          <div className="container">
            <div className="row">
              <section className="col-12">
                <div className="row2">
                  <MainPayment></MainPayment>
                  <RelatedConference></RelatedConference>
                </div>
              </section>
            </div>
            <Footer></Footer>
          </div>
        );
  }

  export default Payment;
  