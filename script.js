/*
let js = "Amazing";
console.log(40 + 65);
console.log('riyaz');

let first= "riyaz super";
console.log(first);
console.log(js);
let myfirstjob ='coder';
console.log(myfirstjob);
let mysecjob ='programmer';
console.log(mysecjob);
console.log(myfirstjob);
console.log(first);
console.log(first);
console.log(first);
*/

/*
let riyazisagoodboy ='true';
console.log(riyazisagoodboy);
//riyazahamed
let riyazahamed ='true';
console.log(typeof true);
console.log(typeof riyazahamed);
console.log(riyazahamed);

// typeof which type is this
console.log(typeof riyazahamed);
console.log(typeof 32);
console.log(typeof dinesh);
console.log(typeof $);
console.log(typeof false);

//change the variable value riyazahamed assign the new value of the riyazahamed
riyazahamed ='fine';
console.log(riyazahamed);

//undefined variable year  (is one of the datatype)
let year;
console.log(year);
console.log(typeof year);

//defined variable
let be ='nice';
console.log(be);

//without 'let' assign the value
year ='year was 2020';
console.log(year);

let nul='undefined';
console.log(nul);
*/
/*
let age ='30';
age ='25';
console.log(age);

// constant never change if we assign the new value also
const birthyear =2003;
//birthyear ='2000';
console.log(birthyear);
const job ='tec';

var velaijob ='it';
velaijob ='mec';
let myfirstname ='Riyaz Ahamed The Mass';
console.log(myfirstname);
*/

/*
//basic operators
const now =2024;
const riyazage =now-2003;
console.log(riyazage);
let riyazages =2065-2003;
console.log(riyazages);
console.log(riyazage,riyazages);
console.log(now);

console.log(now*2,riyazages/2); //operation

const firstname ='Riyaz';
const lastname ='Ahamed';
console.log(firstname +  ' ' + lastname);

//assignment operator
let x = 30+5;
x += 30;
x++;   //increased the value by 1
console.log(x);     // output is 15



/*
 let ahamed ='riya';
ahamed ='shafiq';
ahamed ='nabisha';
const riyaz =ahamed;
console.log(riyaz);
ahamed ='shafiq';
console.log(riyaz);
console.log(riyaz,ahamed);
*/
/*
//comparator operator
console.log(riyazage > riyazages);  //o/p is false;
console.log(riyazage == riyazages);    //""""
console.log(riyazage < riyazages);
*/
/*
let x,y;
x = y = 25 - 10 -5;   //right to left executed
console.log(x,y);
*/
/*
                                          //coding challenge 1!
const massmark =78;
const heightmark =1.69;
const massjohn =92;
const heightjohn =1.95;

const BMIMark = massmark/heightmark ** 2;
const BMIjohn = massmark/ (heightmark * heightjohn);
const markhieghtbmi = BMIMark > BMIjohn;
console.log(markhieghtbmi);
console.log(BMIMark, BMIjohn);


let firstname ='riyazahamed';
firstname ='riyaz';
const job ='IT';
const birthyear ='2003';
const year ='2023';
const hello =  " I'am "+firstname+" ,a " + (year-birthyear)  +  " years old "  + " and iam pusuing in " + job + "!";
console.log(hello);
riyaz ='ahmed';
console.log(riyaz);

const time ='12.00';
console.log(time);

let times  ='goodtime';

console.log(times);
 console.log(massmark);
//console.log(heightmark);
//console.log(massjohn);
//console.log(heightjohn);
console.log('string with \n\
muliple  \n\
times');
console.log('riyaz \n\ is \n\ the \n\ dedication');
*/

// taking decision if/else statements
/*
const age = 15;
if(age >=18) {
console.log('suriya can start driving lincense ');
}   else {
    const years = 18 - age;
    console.log("suriya is too young. wait for another  " +   (years)   + "  years");
  }
*/

/*
if () {

} else {


}*/
//or
/*
const ages =19;
if(ages >=18); {
console.log('suriya can start driving lincense ');
}*/

/*
const birthyear =2003;
let century;
if (birthyear >= 2000){
  century =21;
} else {
  century =20;
}
console.log(century);

                                 //coding challenge 2!
const marksBMI =28.3;
const johnBMI =23.9;
if(marksBMI >= johnBMI) {
console.log('marks BMI ' + (marksBMI) +' is higher than johns BMI ' + (johnBMI));
} else {
  console.log('john BMI is higher');
}
*/
/*
                                           // type conversion and coercion
const year ='1991';  //strings
console.log(Number(year), year ,year);  //that fun is converting string into number
console.log(Number(year)  + 18);             //op  1 9 1
console.log(Number('jonas'));
console.log(typeof NaN);
console.log(String(23), 23);             // one is string type and another type is number

// coercion
console.log('iam ' + 23 + 'yearsold');
console.log('23' - '10'  -3);         // now that string is convert into number and minus becoz of  (-)
console.log('23' + '10' +3);          // not converting and that take it is as string
console.log('23' + '2');

let n= '1' + 1;                      // '1'+1 string so 11
n= n-1;                              // 11-1 =n
console.log(n);                      //ouput is 10
*/

// truthy and falsy values

// 5 falsy value: 0,'',indefined,null,NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('riyaz'));
console.log(Boolean({}));
console.log(Boolean(''));

const money =0;
if(money) {
  console.log("don,t spend it all ;)");
} else {
  console.log('you should get a job');
}


let height;                         //is undefined (height)
if(height) {

  console.log('YAY! height is defined');

}   else {
console.log('height is undefined');

}

                               /// equality operator

const age =18;
if(age === 18)                                  //is both value is exactly the same or not;
  console.log("you just became an adult (strict)");
  if(age == 18)
  console.log("you just became an adult(loose)");
  */
/*
const fav =Number(prompt("what's your fav number ?"));
//console.log(fav);
//console.log(typeof fav);
if (fav === 23) {
  console.log("cool; 23 is amazing number!");
}  else if(fav === 7) {
  console.log('7 is also a cool number');
} else if(fav === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Nuumber is not 23 or 7 or 9');
}

if (fav != 23)
console.log('why not 23?');
*/
/*
                               //BOOLEAN LOGIC
                               //LOGIC OPERATION
const a= true;
const b= true;
console.log(a && b);
console.log(a || b);
console.log(!a);

// const drive =a && b;
// if(drive) {
//   console.log('sara able to drive');
// } else {
//   console.log('someone else should drive');
// }
const istired =false;
console.log(a && b && istired);

let drive =a && b && !istired;
if(drive) {
  console.log('sara able to drive');
} else {
  console.log('someone else should drive....');
}


                              //coding challenge 3!
*/

/*
"use strict";

const xyzabc = "23";
if (x === 23)
console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(xyzabc);
*/
/*
const day ='saturday';   //change the day here
switch(day) {
  case 'monday':    // day == 'monday' this code will be executed
    console.log('plan course structure');
    console.log('go to coding meetup');
    break;                // (break) code continues;
    case 'tuesday':
      console.log('prepare theory vedios');
      break;
      case 'wendnesday':
        console.log('go to inplant training');
        break;
        case 'thursday':

          break;
        case 'friday':
            console.log('iam doing work from home');
            break;
            case 'saturday':
              console.log('plan to do');
              break;
              case 'sunday':
                console.log('near to  hostel join the weekend');
                break;
                default:
                  console.log('not a valid day');
}
*/
// const day ='wednesday';
// if(day === 'monday') {
//   console.log('riyaz ahamed');
// } else if(day === 'tuesday') {
//   console.log('ahamed riyaz');
// }  else if(day === 'wednesday') {
//   console.log('i want to kill you');
// }
// if(23 > 10) {
//   const str ='23 is bigger';
// }
// const me ='riyaz ahamed';
// console.log('its ' + (me) + ' iam ' + (2023-2003) +  ' yearsold');


                              // conditional operator(age>=18) conditional part
const age = 15;
// age >= 18 ? console.log('i like to go movie'):
// console.log('i dont want');

const drink =age >= 18 ? 'alcohole': 'water';
console.log(drink);

let drink2;
if(age >= 18) {
  drink2 ='wine';
} else {
  drink2 ='water';
}
console.log(drink2);

console.log('i like to drink');

                        // coding challege 4 !







