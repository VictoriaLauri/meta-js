const car = {
wheels: 4,
type: "sedan",
maxSpeed: 100,
}

const fastCar = Object.create(car);
fastCar.maxSpeed = 200;

console.log ("For in Loop results:")
for (prop in fastCar) {
console.log(prop, ":" , fastCar[prop]);
}
// lists all props of object and prototype

console.log ("Object.keys results:")
for (prop of Object.keys(fastCar)) {
console.log(prop, ":" , fastCar[prop]);
}
// lists all props of object only