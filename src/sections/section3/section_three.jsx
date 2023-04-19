import "./section_three.css";

import img from "../props/cyber.png";
import img_sec from "../props/gaming-gif.gif";

import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";

import val from "../props/RivR0n3.jpg";
import mine from "../props/crop.jpg";
import gta from "../props/GTA-V-iphone-wallpaper-highquality-in-2019-Gta-v-iphone-.jpg";
import csgo from "../props/4af2fa6d2fe37aa7a2e7d688fad8b2f7.jpg";
import pubg from "../props/HD-wallpaper-pubg-pubg-mobile-pubg-gun-battleground.jpg";

import val_logo from "../props/448-4489723_valorant-logo-png-transparent-png.png";
import mine_logo from "../props/minecraft-hd-logo-minecraft-logo-png-clipart.jpg";
import gta_logo from "../props/76-760869_gta-five-transparent-gta-5-logo-clipart-hd.png";
import csgo_logo from "../props/440-4405200_cs-go-logo-png-counter-strike-global-offensive.png";
import pubg_logo from "../props/pubg.png";

function SectionThree() {
  return (
    <div className="section s3" id="games">
      <div className="bg">
        <img src={img} alt="" />
      </div>

      <div className="intro">
        <img src={img_sec} alt="" />
        <h4>
          Explore <b>more</b> Games{" "}
          <BsChevronDoubleRight className="chevron-arrow" />{" "}
        </h4>
      </div>

      <div className="more-games">
        <div className="back">
          <BsChevronDoubleLeft className="chevron-arrow" />
        </div>

        <div className="games-wrapper">
          <div className="game">
            <div className="link val">
              <div className="logo">
                <img src={val_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={val} alt="" />
          </div>

          <div className="game">
            <div className="link mine">
              <div className="logo">
                <img src={mine_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={mine} alt="" />
          </div>

          <div className="game">
            <div className="link gta">
              <div className="logo">
                <img src={gta_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={gta} alt="" />
          </div>

          <div className="game">
            <div className="link csgo">
              <div className="logo">
                <img src={csgo_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={csgo} alt="" />
          </div>

          <div className="game">
            <div className="link pubg">
              <div className="logo">
                <img src={pubg_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={pubg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
