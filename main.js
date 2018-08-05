// Set up canvas to fill the window (combined with CSS style tag in index.html)
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

// Fill canvas gray
context.fillStyle = '#606060'
context.fillRect(0, 0, canvas.width, canvas.height);

// Create a car and render it
const car1 = new Car(10, 10);
const car2 = new Car(80, 10);
car2.maxVelocity = 8;
//car.render();

// Animate
function main() {
  // Fill canvas gray
  context.fillStyle = '#606060'
  context.fillRect(0, 0, canvas.width, canvas.height);

  [car1, car2].forEach(car => {
    car.update();
    car.render();
  });

  requestAnimationFrame(main);
}

main();