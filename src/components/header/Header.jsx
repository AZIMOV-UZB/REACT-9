import React, { memo,useState } from "react";
import "./header.css";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo  from '../../asset/LOGO.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchRes] = useState(null);
  const [searchFocus] = useState(false);

  // alert ( "• ASSALOMU ALEKUM SAYTIMIZGA XUSH KELIBSIZ •")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header  bg-gray-100 ">
      <div className="container mx-auto ">
        <nav className="navbar py-2 flex items-center justify-between">
          <div className="navbar__logo">
         <Link to={"/"}  >    <img
              className="w-[150px] h-[80px] object-contain "
              src={logo}
              alt="FOTO"
            /></Link>  

          </div>
          <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar__collection flex text-xl gap-7">
<li>BIZ BILAN BOG'LANISH</li>

<li>
          <a target="_blank" class="nav-link" href="https://t.me/Islom_Zaripov11">TELEGRAM
          PRO'FIL</a>
              
              </li>
              
              <li>
          <a target="_blank" class="nav-link" href="https://t.me/zardesign11">TELEGRAM
          KANALMIZ</a>
              
              </li>
             
            </ul>
          </div>
          <div className="div">
            <div className="relative hidden sm:block">
              <div
                className={`absolute top-[50px] left-0 w-[210px] p-4 bg-[#fff] h-[150px] bg-[#eee] overflow-y-scroll ${
                  searchFocus ? "" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-4 ml-1 text-[13px] ">
                  {searchRes?.products?.map((product) => product.title)}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar__number  flex-col text-base font-medium ">
          <a class="nav-link" href="tel: 97 490 20 07">TEL : 97 490 20 07</a>
          </div>
          <di  
          
          v onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </di>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header)
