import '../AppCss.css';

function App() {
    return (
      <div id="footerBottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <img src="facebook1.png" width="22" height="18" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="twitter1.png" width="22" height="18" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="youtube1.png" width="22" height="18" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_top">
                    <img src="viadeo1.png" width="22" height="19" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_top">
                    <img src="linkedin1.png" width="22" height="18" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="rss1.png" width="22" height="18" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-8 align-right">
              <p className="copyright">© 2023 </p>
            </div>
          </div>
          <div className="content" style={{fontSize:"11px", textAlign:"center"}}></div>
        </div>
      </div>
    );
  }
  
  export default App;

