    // Tickle (Part of Intersect Gaming)
    // Copyright (C) 2023  Himank Deka

    // This program is free software: you can redistribute it and/or modify
    // it under the terms of the GNU Affero General Public License as
    // published by the Free Software Foundation, either version 3 of the
    // License, or (at your option) any later version.

    // This program is distributed in the hope that it will be useful,
    // but WITHOUT ANY WARRANTY; without even the implied warranty of
    // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    // GNU Affero General Public License for more details.

    // You should have received a copy of the GNU Affero General Public License
    // along with this program.  If not, see <https://www.gnu.org/licenses/>.
import './Tickle.css';
import { useState } from 'react';
import {getPC, setPC, getOC, setOC, getTurns, incrementTurns, getClass, setClass} from './classState';


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
      <button id='home' onClick={window.location.href = 'http://localhost:3000/'}>Home <span className='fa fa-home'></span></button>
      <h1>Tickle</h1>
      <button id='audio-btn' onClick={play_bg}>Audio <span className={spanClass}></span></button>
    </div>
  );
}

function DashBoard() {
  return (
    <div className='dash'>
      <p id='player' className={getPC()}>You (X)</p>
      <p id='opp' className={getOC()}>(O) AI</p>
    </div>
  );
}

function Footer() {
  const obj = new Date();
  const getYear = () => {return obj.getFullYear()};
  return (
    <div className='copy'>
      <p>Copyright &copy; 2023-{getYear()} Himank Deka. All rights reserved</p>
    </div>
  );
}

function Square({val, onClickHandler, classThis}) {
  return (
    <button className={classThis} onClick={onClickHandler}>{val}</button>
  );
}


function MainScreen() {
  function winHandler() {
    var key = checkWinner();

    if (winner) {
      if (board[key[0]] == 'X') {
        window.location.href = 'http://localhost:3000/success/';
      } else {
        window.location.href = 'http://localhost:3000/fail/';
      }
    } else {
      var anyNull = false;

      for (var i = 0; i < board.length; i++) {
        if (board[i] == null) {
          anyNull = true;
        }
      }

      if (!anyNull) {
        window.location.href = 'http://localhost:3000/draw/';
      }
    }
  }
  var winner = false;

  function aiClick(list) {
     const rand = Math.floor(Math.random() * ((list.length - 1) - 0) + 0);
     return list[rand];
  }

  const [board, setBoard] = useState(Array(9).fill());

  function checkWinner() {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (var i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i].slice();
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = true;
        setClass(a, ' win-btn');
        setClass(b, ' win-btn');
        setClass(c, ' win-btn');
        return [a, b, c];
      }
    }
  }

  async function handle(val) {
    let newBoard = board.slice();
    if (newBoard[val] == null) {
      newBoard[val] = 'X';
      setOC('glow');
      setPC('');
      incrementTurns();
      setBoard(newBoard);

      setTimeout(function() {
        var newBoard2 = newBoard.slice();

        var list_new = [];

        for (var i = 0; i < newBoard2.length; i++) {
          if (newBoard2[i] == null) {
            list_new.push(i);
          }
        }

        if (list_new == []) {
          winHandler();
        } else {
          var index = aiClick(list_new);
          newBoard2[index] = 'O';
          incrementTurns();
          setBoard(newBoard2);
          setPC('glow');
          setOC('');
          winHandler();
        }
      }, 2000);
    } else {
      alert('You cannot click here!');
    }
    
  }

  winHandler();

  return(
    <>
      <Heading />
      <DashBoard />
      <p id='turns'>{getTurns()} turns</p>
      <div className='board-row top'>
        <Square val={board[0]} onClickHandler={() => handle(0)} classThis={getClass(0)}/>
        <Square val={board[1]} onClickHandler={() => handle(1)} classThis={getClass(1)}/>
        <Square val={board[2]} onClickHandler={() => handle(2)} classThis={getClass(2)}/>
      </div>
      <div className='board-row'>
        <Square val={board[3]} onClickHandler={() => handle(3)} classThis={getClass(3)}/>
        <Square val={board[4]} onClickHandler={() => handle(4)} classThis={getClass(4)}/>
        <Square val={board[5]} onClickHandler={() => handle(5)} classThis={getClass(5)}/>
      </div>
      <div className='board-row'>
        <Square val={board[6]} onClickHandler={() => handle(6)} classThis={getClass(6)}/>
        <Square val={board[7]} onClickHandler={() => handle(7)} classThis={getClass(7)}/>
        <Square val={board[8]} onClickHandler={() => handle(8)} classThis={getClass(8)}/>
      </div>
      <Footer />
    </>
  );
}

export default MainScreen;
