import img from '../props/Msi-Wallpaper-05-1920-x-1080.jpg';
import './section_one.css';

import {SiDiscord} from 'react-icons/si';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';

function SectionOne() {
  return (
    <>
      <div className='section s1' id='home'>
        <h3>Home</h3>
        <div className='bg-wp'>
          <img src={img} alt='' />
        </div>

        <div className='text-container'>
          <h1>Follow</h1>
          <h2>your passion</h2>

          <span>
          Gamer's dont die, they Respawn... 
          </span>

          <a href='#community' className='explore-btn'>
            explore
          </a>
        </div>

        <div className='socials'>     
          <SiDiscord className='icon' onClick={
            ()=>{
              window.open('https://discord.gg/xMvPeBwRFF', '_blank')
            }
          }/> 

          <AiFillInstagram className='icon' onClick={
            ()=>{
              window.open('https://www.instagram.com/dismal_soul05', '_blank')
            }
          }/>

          <FaFacebookSquare className='icon' onClick={
            ()=>{
              window.open('https://www.facebook.com/GoDFaTheR2k02', '_blank')
            }
          }/> 
        </div>
      </div>
    </>
  );
}

export default SectionOne;
