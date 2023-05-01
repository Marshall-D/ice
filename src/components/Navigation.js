import { Link} from 'react-router-dom';
import '../AppCss.css';


function Navigation() {
    return (
      <nav
      role="navigation"
      
      className="mainmenu"
    >
      <ul className="collapse2">
        <li className="nonActive ">
        <Link to="/" className="aNotSelected">Home</Link>
        
        </li>

        <li className='nonActive'>
        <Link to="call" className="aNotSelected">Call For Paper</Link>

     
        </li>
        <li className='nonActive'>
          <Link to="committee" className="aNotSelected" 
           href="committee.htm">Committee</Link>
        
        </li>
        <li className='nonActive'>
          <Link to="paperSubmission" className="aNotSelected" 
          href="papersubmission.htm">Paper Submisison</Link>
      
        </li>

        <li className='nonActive'>
          <Link to="venue" className="aNotSelected"  
          href="venue.htm">Venue</Link>
        
        </li>
        <li className='nonActive'>
          <Link to="payment" className="aNotSelected" 
           href="Registrationandfee.htm">Registration and Payment</Link>
       
        </li>
        

        <li className='nonActive'>
          <Link to="contact" className="aNotSelected"  href="contact.htm">Contact Us</Link>
        </li>
      </ul>
    </nav>
    );
  }
  
  export default Navigation;