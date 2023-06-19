// var score = 70;
// var Physicssubject = true;
// var Chemistrysubject = false;
// var discipline = false;
// var checkStudent = score >=70 && (Physicssubject || Chemistrysubject) && !discipline? 
// "Eligible" : "Not eligible";
// console.log(checkStudent);


// var weather = 20;
// var sunny = true;
// var checkWeather = weather >30 && sunny? "It's a hot sunny day" : "The weather is moderate";
// console.log(checkWeather);

// var age = 18;
// var allegy = false;
// var checkPerson = age>=18 && !allegy? "Allowed to Own a Pet" : "Not Allowed to Own a Pet";
// console.log(checkPerson);


// let originalPrice = 165;
// let discountedPrice = originalPrice <=50? (10/100) * originalPrice : originalPrice >50 
// && originalPrice <=100? (20/100) * originalPrice : (30/100) * originalPrice;

// let finalPrice = originalPrice - discountedPrice;

// console.log(finalPrice);




let originalPrice = 60;
var weekendPrice = true;
let discountedPrice = originalPrice <=50? (10/100)*originalPrice : originalPrice >50 && originalPrice 
<=100 && !weekendPrice? (15/100)*originalPrice : (20/100)*originalPrice;

let finalCost = originalPrice - discountedPrice;
console.log(finalCost);
// console.log(discountedPrice);


