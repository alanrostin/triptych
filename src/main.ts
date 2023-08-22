import './style.css';
import { init, GameLoop, Sprite, initKeys, keyPressed } from 'kontra';

init();

const { canvas, context } = init();

const vaultW = window.innerWidth / 5;
const vaultH = window.innerHeight / 3;

// canvas.width = vaultW;
// canvas.height = vaultH;

const player = Sprite({
  x: canvas.width / 2 - 10,
  y: canvas.height - 30,
  width: 20,
  height: 30,
  color: 'red',
  // dx: 1,
  // dy: 1,
});

initKeys();

let loop = GameLoop({
  update: function () {
    if (keyPressed('d')) {
      player.x += 3;
    }

    if (keyPressed('a')) {
      player.x -= 3;
    }

    player.update();
  },
  render: function () {
    player.render();
  },
});

loop.start();
