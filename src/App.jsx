/*
import './style.css';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Webcontent(){
    return(
        <>
            <div className='open-menu'>
                <BiMenuAltRight id='m' className='open' />
                <AiOutlineClose id='m' className='close' />
            </div>

            <div className="menu">
                <ul>
                    <a href='#home' className='active'>
                        home
                    </a>
                    <a href='#community'>community</a>
                    <a href='#games'>games</a>
                    <a href='#streams'>streams</a>
                    <a href='#contact'>contact</a>
                </ul>
            </div>
         </>
    );
    
}


export default Webcontent
*/

import "./style.css";

import SectionOne from "./sections/section1/section_one";
import SectionTwo from "./sections/section2/section_two";
import SectionThree from "./sections/section3/section_three";
import SectionFour from "./sections/section4/section_four";
import SectionFive from "./sections/section5/section_five";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Webcontent() {
  return (
    <>
      <div className="open-menu">
        <BiMenuAltRight id="m" className="open" />
        <AiOutlineClose id="m" className="close" />
      </div>

      <div className="menu">
        <ul>
          <a href="#home" className="active">
            home
          </a>
          <a href="#community">community</a>
          <a href="#games">games</a>
          <a href="#streams">streams</a>
          <a href="#contact">contact</a>
        </ul>
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export default Webcontent;
