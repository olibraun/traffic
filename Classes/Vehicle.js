// This class is not to be instantiated but should only ever be used 
// as a template for other kinds od vehicles, such as cars and trucks

class Vehicle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  render() {
    console.error('Must implement override render() method in extending class.');
  }
}