import Header from './Header';
import Carousel from './Carousel';
import Home from '../Pages/Home/Home';
import '../AppCss.css';


      
      function MainPage() {
        return (
          <body className="accueil">
            <ul className="skip">
              <li className="skipLi">
                <a className="skipA" href="#">Menu</a>
              </li>
              <li className="skipLi">
                <a className="skipA" href="#">Content</a>
              </li>
              <li className="skipLi">
                <a className="skipA" href="#">Search</a>
              </li>
            </ul>
            <Header></Header>
            <Carousel></Carousel>
            <Home></Home>
          </body>
        );
      }
      
      
      export default MainPage;
      