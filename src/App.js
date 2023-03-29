import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './Pages/Home/Home';
import './AppCss.css';
import CallForPaper from './Pages/CallForPaper/CallForPaper';
import Committee from './Pages/Committee/Committee';
import Venue from './Pages/Venue/Venue';
import PaperSubmission from './Pages/PaperSubmission/PaperSubmission';
import Payment from './Pages/Payment/Payment';



function App() {
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
        {/* <Home></Home> */}
        {/* <CallForPaper></CallForPaper> */}
        {/* <Committee></Committee> */}
        {/* <PaperSubmission></PaperSubmission> */}
        {/* <Venue></Venue> */}
        <Payment></Payment>
      </body>
    );
}

export default App;

