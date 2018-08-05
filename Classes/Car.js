class Car extends Vehicle {
  constructor(x, y, colorString) {
    super();
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 20;
    this.color = colorString;

    this.acceleration = 2;
    this.deceleration = 2;
    this.maxVelocity = 10;
  }

  render() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.velocity;
    this.velocity += this.acceleration;
    if(this.velocity > this.maxVelocity) {
      this.velocity = this.maxVelocity;
    }
    if(this.x > canvas.width) {
      this.x = -this.width;
    }
  }
}