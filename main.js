// Set up canvas to fill the window (combined with CSS style tag in index.html)
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

// Fill canvas gray
context.fillStyle = '#606060'
context.fillRect(0, 0, canvas.width, canvas.height);