// let brickRowCount = 4;
// let brickColumnCount = 7;
// let brickWidth = 72;
// let brickHeight = 24;
// let brickPadding = 12;
// let brickOffsetTop = 32;
// let brickOffsetLeft = 32;

// // Create variable to create score
// let score = 0;

// // Creating arrays for the bricks
// let bricks = [];
// for( c = 0; c < brickColumnCount; c++ ) {
//     bricks[c] = [];
//     for( r=0; r < brickRowCount; r++ ) {
//         // set the x and y position of the bricks
//         bricks[c][r] = { x: 0, y: 0, status: 1 };
//     }
// }

// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
// document.addEventListener('mousemove', mouseMoveHandler, false);

// function keyDownHandler(e) {
//     if( e.keyCode === 39 ) {
//         rightPressed = true;
//     }
//     else if( e.keyCode === 37 ) {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if( e.keyCode === 39 ) {
//         rightPressed = false;
//     }
//     else if( e.keyCode === 37 ) {
//         leftPressed = false;
//     }
// }

// function mouseMoveHandler(e) {

// }

// Mendapatkan elemen bola
var ball = document.getElementById("ball");

// Inisialisasi posisi dan kecepatan bola
var x = 200; // posisi horizontal awal bola
var y = 200; // posisi vertikal awal bola
var vx = 2; // kecepatan horizontal bola
var vy = 2; // kecepatan vertikal bola

// Fungsi untuk menggerakkan bola
function moveBall() {
  // Mengupdate posisi bola
  x += vx;
  y += vy;

  // Mengecek batasan atas dan bawah
  if (y + 50 >= 400 || y <= 0) {
    vy = -vy; // memantulkan bola
  }

  // Mengecek batasan kanan dan kiri
  if (x + 50 >= 400 || x <= 0) {
    vx = -vx; // memantulkan bola
  }

  // Memperbarui posisi bola
  ball.style.top = y + "px";
  ball.style.left = x + "px";
}

// Menggerakkan bola setiap 10 milidetik
setInterval(moveBall, 10);
