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
    const self = this;

    cars.forEach(other => {
      if(other !== self) {
        if(this.wouldCollide(other)) {
          this.velocity -= this.deceleration;
        } else {
          this.velocity += this.acceleration;
        }
      }
    });

    // Limit velocity
    if(this.velocity > this.maxVelocity) {
      this.velocity = this.maxVelocity;
    }
    if(this.velocity < 0) {
      this.velocity = 0;
    }

    // Update position
    this.updatePosition();

    // Handle left and right side of the road
    if(this.x > canvas.width) {
      this.x = -this.width;
    }
    if(this.x < 0) {
      this.x = canvas.width;
    }
  }
}