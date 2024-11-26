var balance = 1000;
var phone_price = 100;
var accessory_price = 10;
var vat = 0.2;
var counter = 0;

var total_price = phone_price + (phone_price * vat) + accessory_price + (accessory_price * vat);

while (balance >= total_price) {
    balance -= total_price;
    counter++;
    console.log("You have purchased a phone and an accessory. Your remaining balance is: $" + balance);
    console.log("You have made " + counter + " purchases.");
}

if (balance < total_price) {
    console.log("You don't have enough balance to make another purchase.");
}