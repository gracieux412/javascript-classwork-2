//string concatenation

let dealerName= "Gracieux Kitsa";
let location = "Uganda";

const message= "Dealer: "+dealerName+"| Location: "+location;
console.log(message);

//use of backticks for clean code

const message2=`Dealer: ${dealerName} | Location: ${location}`;
console.log(message2)

//type checking and conversion
const greeting="hello";

console.log(typeof(greeting));

const val = "900";

//before, it is still string
console.log(typeof(val));
const newVal = parseInt(val);

//after it is int
console.log(typeof(newVal));

let a = 456;

console.log(typeof(String(a)));

//string methods

const firstName="fred";
let lastName="okia";

console.log(firstName.toUpperCase());
console.log(lastName.toUpperCase());

console.log(`${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`);

//removing spaces in a string
const middleName = "  joseph  ";
console.log(middleName);
console.log(middleName.trim());


//--------------- end -------------------------------------------------//

//================= 3rd December 2025 ==================================//

let procurementTonnage = 2000;
let minTonnage = 1000;

const tonnageValidation = procurementTonnage >= minTonnage;
console.log(tonnageValidation);

//now trying to change the procurement tonnage value

procurementTonnage =100;
const tonnageValidation2 = procurementTonnage >= minTonnage;
console.log(tonnageValidation2);


//comparing cost as a string and as a number

let costStr = '5000';
let constNum = 5000;

// Testing it now

console.log(costStr == constNum);// bring true
console.log(costStr === constNum); // bring false because one is a string and the other is a number

if(costStr === constNum){
    console.log("the numbers are the same");
}else{
    console.log("there are no matches in the expected number")
}

//for complex validation
const dealerName2 = "Kitsa";
const costUgx =10000;

if(dealerName2.length >= 2 && costUgx >= 10000){
    console.log("Right dealer");
}else{
    console.log(`Wrong Dealer ${dealerName2}`);
}


//date Logging

const date = new Date(2025, 11, 3);  // 3rd December 2025

const day = date.getDate();          // returns 3
const month = date.getMonth() + 1;   // returns 12 (because months start at 0)
const year = date.getFullYear();     // returns 2025

console.log("Sales on: " + day + "/" + month + "/" + year);



//........................... 8th december 2025 .............exercise on loops...............................

let dailyProcurement = [1200, 850, 1000, 900];

let sum =0;
let average=0;
for(let index=0; index<dailyProcurement.length; index++){
    sum += dailyProcurement[index];
        average=sum/dailyProcurement.length;
   
}
console.log(average)

//trying to check the length of the array
console.log(dailyProcurement.length)

//............ 
//creating an array for credit check

let creditStatus = ['paid','due','paid','due'];

for(let items of creditStatus){
    if(items ==='paid'){
        continue;
        
    }console.log(items)
}

//................
//Manager alert

let beanQuantity = 10;

while(true){
    if(beanQuantity>0){
        console.log("Beans available: ", beanQuantity);
        beanQuantity --;
    }else if(beanQuantity === 0){
        console.log(`manager: Beans are now out of stock`);
        break;
    }
}