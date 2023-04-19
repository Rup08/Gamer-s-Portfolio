import './section_two.css';
import img1 from '../props/ed385c111181481.5ffd527711542.jpg';
import img2 from '../props/EnahPGSW8AMSwuN.jpg';
import img3 from '../props/hossein-diba-4.jpg';

import { BsChevronDoubleRight } from 'react-icons/bs';

function SectionTwo() {
  return (
    <div className='section s2' id='community'>
      <div className='container'>
        <h3>Community</h3>

        <div className='card' style={{ '--k': 1 }}>
          <img src={img1} alt='' />
          <p>
            VALORANT <br />
            <i>
            Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.
            </i>
          </p>
        </div>

        <div className='card' style={{ '--k': 2 }}>
          <img src={img2} alt='' />
          <p>
            MINECRAFT <br/>
            <i>
            Players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain and may discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.
            </i>
          </p>
        </div> 

        <div className='card' style={{ '--k': 3 }}>
          <img src={img3} alt='' />
          <p>
            GTA-V
            <br />
            <i>
            An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.
            </i>
          </p>
        </div> 

        <div className='members'>
          <span>View more</span>
          <BsChevronDoubleRight className='arrow-right' />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
