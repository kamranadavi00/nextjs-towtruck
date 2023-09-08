
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillHouseFill ,BsFillTelephoneOutboundFill } from "react-icons/bs";
const Footer=()=>{
    return(
      <div className='text-center flex flex-col items-center justify-center  bg-zinc-500   container mx-auto '>
{/* <div className=' flex items-stretch bg-slate-950  p-20 text-white container mx-auto '>
  <div>
    <ul >
      <li> امداد خودرو</li>
      <li>امداد خودرو غرب</li>
      <li>مکانیکی سیار</li>
    </ul >
  </div>
  <div>
    <ul>
      <li> امداد خودرو</li>
      <li>امداد خودرو غرب</li>
      <li>مکانیکی سیار</li>
    </ul>
  </div>

  </div> */}
  <div  >
تمامی حقوق این سایت متعلق به امداد خودرو غرب میباشد.
</div>
<div >
طراحی سایت و سئو توسط <a target="_blank"  href="https://kamiweb.ir">kamiweb.ir</a>
</div>


  
</div>
    ) 
}
export default Footer;





