import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './Pages/Home/Home';
// import './AppCss.css';
import CallForPaper from './Pages/CallForPaper/CallForPaper';
import Committee from './Pages/Committee/Committee';
import Venue from './Pages/Venue/Venue';
import PaperSubmission from './Pages/PaperSubmission/PaperSubmission';
import Payment from './Pages/Payment/Payment';
import ContactUs from './Pages/ContactUs/ContactUs';
import MainPage from './components/Basic';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Routes, Route } from "react-router-dom";


function App() {
    return (
      <body className="accueil">
        <ul className="skip">
          <li className="skipLi">
            <a className="skipA" href="#">
              Menu
            </a>
          </li>
          <li className="skipLi">
            <a className="skipA" href="#">
              Content
            </a>
          </li>
          <li className="skipLi">
            <a className="skipA" href="#">
              Search
            </a>
          </li>
        </ul>
        <Header></Header>
        <Carousel></Carousel>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call" element={<CallForPaper />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/paperSubmission" element={<PaperSubmission />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </body>
    );
}

export default App;

