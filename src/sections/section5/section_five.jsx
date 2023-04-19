import "./section_five.css";

import {SiDiscord} from 'react-icons/si';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';

import { BsChevronDoubleUp } from "react-icons/bs";

function SectionFive() {
  return (
    <div className="section s5" id="contact">
      <h1>_Get in Touch_</h1>

      <div className="socials">
        <SiDiscord className="icon" style={{ "--i": 1 }} onClick={()=>{window.open('https://discord.gg/xMvPeBwRFF', '_blank')}}/>
        <AiFillInstagram className="icon" style={{ "--i": 2 }} onClick={()=>{window.open('https://www.instagram.com/dismal_soul05', '_blank')}} />
        <FaFacebookSquare className="icon" style={{ "--i": 3 }} onClick={()=>{window.open('https://www.facebook.com/GoDFaTheR2k02', '_blank')}}/>
      </div>

      <div className="to-top">
        <a href="#home">
          Home <BsChevronDoubleUp />
        </a>
      </div>
    </div>
  );
}

export default SectionFive;
