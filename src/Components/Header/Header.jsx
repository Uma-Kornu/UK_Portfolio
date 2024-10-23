import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Adjust the path if necessary
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Header() {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  const roles = [
    "Quality Analyst",
    "Data Analyst",
    "Data Scientist"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      const isFinishedTyping = !isDeleting && displayedText === currentRole;
      const isFinishedDeleting = isDeleting && displayedText === '';

      if (isFinishedTyping) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before starting to delete
      } else if (isFinishedDeleting) {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        const updatedText = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);

        setDisplayedText(updatedText);
        setSpeed(isDeleting ? 50 : 150); // Typing speed when erasing is faster
      }
    };

    const typingInterval = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingInterval); // Cleanup on unmount
  }, [displayedText, isDeleting, roles, currentRoleIndex, speed]);
 
  return (
    <div id = "header" className="header">
      <div>
        <div className='header-navbar'>
          <img src={menu_open} onClick={openMenu} alt="" class='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href='#header'><p onClick={()=>setMenu("header")}>Home</p></AnchorLink>{menu=="header"?<img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu=="about"?<img src={nav_underline} alt=''/>:<></>}</li>
                {/* <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu=="skills"?<img src={nav_underline} alt=''/>:<></>}</li> */}
                <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={()=>setMenu("experience")}>Experience</p></AnchorLink>{menu=="experience"?<img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu=="projects"?<img src={nav_underline} alt=''/>:<></>}</li>
                {/* <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={nav_underline} alt=''/>:<></>}</li> */}
                <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
            </ul>
        </div>
        <div className="header-title">
          <h1>Hi! I'm Uma Kornu</h1>
          <p className="header-subtitle">
            <strong className="text-slider">{displayedText}</strong>
            <span className="typed-cursor"></span>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
