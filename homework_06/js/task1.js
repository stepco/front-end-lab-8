let a = Number(prompt("enter number"));
let b = Number(prompt("enter number"));
let c = Number(prompt("enter number"));
let perymetrOfTriangle;
let squareOfTriangle;
if (a && b && c && a > 0 && b > 0 && c > 0 && a + b > c && b + c > a & a + c > b) {
      perymetrOfTriangle = a + b + c;
      squareOfTriangle = Math.sqrt(perymetrOfTriangle*(perymetrOfTriangle - a)*(perymetrOfTriangle - b)*(perymetrOfTriangle - c));
 } 


if(a === b && b === c){
  typeOfTriangle = 'Equilateral';
} else if (a === b || a === c || c === b){
  typeOfTriangle = 'Isosceles';
} else if (
             (a >  b === true && a > c === true) && Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2) ||
             (b > a === true && b > c === true) && Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2)  ||
             (c > b === true && c > a === true) && Math.pow(c, 2) === Math.pow(b, 2) + Math.pow(a, 2)  ) {
  typeOfTriangle = 'Right triangle';         
} else {
  typeOfTriangle = 'Scalene'; 
  }  
    
if(squareOfTriangle){
   console.log("Type of triangle is " + typeOfTriangle + " triangle and square is " + squareOfTriangle.toFixed(2) );
   }
   else {
     console.log('Incorrect data');
   }