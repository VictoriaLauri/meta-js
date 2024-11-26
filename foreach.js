const fruits = ['apple', 'banana', 'mango'];

fruits.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

console.log("Compare");

function logFruit() {
  for ([index, value] of fruits.entries()) {
    console.log(`${index + 1}. ${value}`);
  }
}

logFruit();