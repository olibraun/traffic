class Car extends Vehicle {
  constructor() {
    super();
    this.x = 10;
    this.y = 10;
    this.width = 50;
    this.height = 20;

    this.acceleration = 2;
    this.deceleration = 2;
    this.maxVelocity = 10;
  }

  render() {
    context.fillStyle = '#FF0000';
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