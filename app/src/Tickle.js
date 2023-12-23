import './Tickle.css';
import { useState } from 'react';

function Heading() {
  const [active, setActive] = useState(false);
  const player = document.getElementById("bg-aud");
  const [spanClass, setSpanClass] = useState("fa fa-play");

  function play_bg() {
    if (!active) {
      setSpanClass("fa fa-pause");
      player.play();
      
    } else {
      setSpanClass("fa fa-play");
      player.pause();
    }

    setActive(!active);
  }

  return (
    <div className='head'>
      <button id='home'>Home <span className='fa fa-home'></span></button>
      <h1>Tickle</h1>
      <button id='audio-btn' onClick={play_bg}>Audio <span className={spanClass}></span></button>
    </div>
  );
}

function DashBoard() {
  return (
    <div className='dash'>
      <p id='player'>You</p>
      <p id='opp'>AI</p>
    </div>
  );
}

function MainScreen() {
  return(
    <>
      <Heading />
      <DashBoard />
    </>
  );
}

export default MainScreen;
