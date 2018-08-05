// This class is not to be instantiated but should only ever be used 
// as a template for other kinds od vehicles, such as cars and trucks

class Vehicle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.previousX = 0;
    this.previousY = 0;
    this.width = 0;
    this.height = 0;

    this.velocity = 0;
    this.acceleration = 0;
    this.deceleration = 0;
    this.maxVelocity = 0;
  }

  render() {
    console.error('Must implement override render() method in extending class.');
  }

  update() {
    console.error('Must implement override update() method in extending class.');
  }

  updatePosition() {
    // This function may only ever update the position of the vehicle and not change anything else, also if it is overridden.
    this.previousX = this.x;
    this.previousY = this.y;
    this.x += this.velocity;
  }

  resetPosition() {
    this.x = this.previousX;
    this.y = this.previousY;
  }

  collides(otherVehicle) {
    const myLeft      = this.x;
    const myRight     = this.x + this.width;
    const myTop       = this.y;
    const myBottom    = this.y + this.height;
    const theirLeft   = otherVehicle.x;
    const theirRight  = otherVehicle.x + otherVehicle.width;
    const theirTop    = otherVehicle.y;
    const theirBottom = otherVehicle.y + otherVehicle.height;

    return myRight > theirLeft && myRight < theirRight      // this collides with other from the left
    || myLeft < theirRight && myLeft > theirLeft            // this collides with other from right
    || myBottom > theirTop && myBottom < theirBottom        // this collides with other from above
    || myTop < theirTop && myTop > theirBottom              // this collides with other from below
  }

  wouldCollide(otherVehicle) {
    // Check if this would collide with otherVehicle if the update were performed
    this.updatePosition();
    const result = this.collides(otherVehicle);
    this.resetPosition();
    return result;
  }
}