import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const ctx = canvas.getContext('2d');
fdgd
//ctx.clearRect(0, 0, canvas.width, canvas.height);
console.log(canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);