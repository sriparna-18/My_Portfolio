// import React, { useState } from 'react'
// import './Navbar.css'
// import coded from '../../assets/coded.jpg'
// const Navbar=() => {
//   const [menu,setMenu]=useState("home");
//   return (
//     <div className='navbar'>
//         <img src={coded} alt=""/>
//         <ul className='nav-menu'>
//             <li><AnchorLink className='anchor-link' href='home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home" ?</AnchorLink></li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("service")}>Projects</p></AnchorLink></li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#achievement'><p onClick={()=>setMenu("achievement")}>Achievements</p></AnchorLink></li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
//         </ul>
//         <div className="nav-connect">Connect with Me</div>
//     </div>
//   )
// }
// export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import coded from '../../assets/coded.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={coded} alt="coded" />
      <ul className='nav-menu'>
        <li>
          <Link
            className='anchor-link'
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='about'
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='service'
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("service")}
          >
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='achievement'
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("achievement")}
          >
            <p>Achievements</p>
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='contact'
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
}

export default Navbar;
