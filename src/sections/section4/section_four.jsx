import "./section_four.css";

import val_t from "../props/val_trailer.mp4";
import mine_t from "../props/mine_trailer.mp4";
import gta_t from "../props/gta_trailer.mp4";
import cs_t from "../props/cs_trailer.mp4";

function SectionFour() {
  return (
    <div className="section s4" id="streams">
      <h1>
        It's just a 
        <span>[TRAILER]</span>
       A small glimpse...
      </h1>

      <div className="streams-container">
        <div className="stream stream1">
          <video src={val_t} autoPlay controls loop></video>
        </div>
        <div className="stream stream2">
          <video src={mine_t} autoPlay controls loop></video>
        </div>
        <div className="stream stream3">
          <video src={gta_t} autoPlay={true} controls loop></video>
        </div>
        <div className="stream stream4">
          <video src={cs_t} autoPlay controls loop></video>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
