import React, { useRef, useState } from 'react'
import './Navbar.css'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="" class='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#header'><p onClick={()=>setMenu("header")}>Home</p></AnchorLink>{menu=="header"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu=="about"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu=="skills"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#resume'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu=="education"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={()=>setMenu("experience")}>Experience</p></AnchorLink>{menu=="experience"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu=="projects"?<img src={nav_underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></div>
    </div>
  )
}

export default Navbar