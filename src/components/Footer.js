import '../Styles/Footer.css';

function App() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="social">
                <li className="socialLi">
                  <a className="socialA" href="#" target="_blank">
                    <img src="https://icebm.icmbpsgroup.com/facebook1.png" width="22" height="18" />
                  </a>
                </li>
                <li className="socialLi">
                  <a className="socialA" href="#" target="_blank">
                    <img src="https://icebm.icmbpsgroup.com/twitter1.png" width="22" height="18" />
                  </a>
                </li>
                <li className="socialLi">
                  <a className="socialA" href="#" target="_blank">
                    <img src="https://icebm.icmbpsgroup.com/youtube1.png" width="22" height="18" />
                  </a>
                </li>
                <li className="socialLi">
                  <a className="socialA" href="#" target="_top">
                    <img src="https://icebm.icmbpsgroup.com/viadeo1.png" width="22" height="19" />
                  </a>
                </li>
                <li className="socialLi">
                  <a className="socialA" href="#" target="_top">
                    <img src="https://icebm.icmbpsgroup.com/linkedin1.png" width="22" height="18" />
                  </a>
                </li>
                <li className="socialLi">
                  <a className="socialA" href="#" target="_blank">
                    <img src="https://icebm.icmbpsgroup.com/rss1.png" width="22" height="18" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-8 align-right">
              <p className="copyright">© 2023 </p>
            </div>
          </div>
          <div
            className="content"
            style={{ fontSize: "11px", textAlign: "center" }}
          ></div>
        </div>
      </div>
    );
  }
  
  export default App;

