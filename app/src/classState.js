
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
let playerClass = 'glow';

export const setPC = (value) => {
    playerClass = value;
}

export const getPC = () => {
    return playerClass;
}

let oppClass = '';

export const setOC = (value) => {
    oppClass = value;
} 

export const getOC = () => {
    return oppClass;
}

let turns = 0;

export const getTurns = () => {
    return turns;
}

export const incrementTurns = () => {
    turns++;
}

let squareClass = ['btn-game', 'btn-game', 'btn-game', 'btn-game', 'btn-game', 'btn-game', 'btn-game', 'btn-game', 'btn-game'];

export const getClass = (index) => {
    return squareClass[index];
}

export const setClass = (index, value) => {
    squareClass[index] += value;
}