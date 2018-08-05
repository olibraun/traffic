// Set up canvas to fill the window (combined with CSS style tag in index.html)
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

// Fill canvas gray
context.fillStyle = '#606060'
context.fillRect(0, 0, canvas.width, canvas.height);

// Create cars
const cars = [];
cars.push(new Car(10, 10, '#FF0000'));
cars.push(new Car(380, 10, '#00FF00'));
cars[1].maxVelocity = 5;

// Animate
function main() {
  // Fill canvas gray
  context.fillStyle = '#606060'
  context.fillRect(0, 0, canvas.width, canvas.height);

  cars.forEach(car => {
    car.update();
    car.render();
  });

  requestAnimationFrame(main);
}

main();