var sideA = Number(prompt("Введіть довжину першої сторони трикутника"));
var sideB = Number(prompt("Введіть довжину другої сторони трикутника"));
var sideC = Number(prompt("Введіть довжину третьої сторони трикутника"));
var perymetrOfTriangle;
var squareOfTriangle ;
var typeOfTriangle;

if(sideA === sideB && sideC === sideB){
  typeOfTriangle = 'Equilateral';
} else if (sideA === sideB || sideA === sideC || sideC === sideB){
  typeOfTriangle = 'Isosceles';
} else if (
             (sideA >  sideB === true && sideA > sideC === true) && Math.pow(sideA, 2) === Math.pow(sideB, 2) + Math.pow(sideC, 2) ||
             (sideB > sideA === true && sideB > sideC === true) && Math.pow(sideB, 2) === Math.pow(sideA, 2) + Math.pow(sideC, 2)  ||
             (sideC > sideB === true && sideC > sideA === true) && Math.pow(sideC, 2) === Math.pow(sideB, 2) + Math.pow(sideA, 2)  ) {
  typeOfTriangle = 'Right triangle';        
} else {
  typeOfTriangle = 'Scalene'; 
  }  
if( ( ((typeof sideA) === 'number')  && ((typeof sideA) === 'number') && ((typeof sideA) === 'number')) &&
   (sideA > 0 && sideB > 0 && sideC > 0) &&
   (sideA + sideB > sideC && sideB + sideC > sideA & sideA + sideC > sideB) ) {
   perymetrOfTriangle = sideA + sideB + sideC;
   squareOfTriangle = Math.sqrt(perymetrOfTriangle*(perymetrOfTriangle - sideA)*(perymetrOfTriangle - sideB)*(perymetrOfTriangle - sideC));
 } else { 
    console.log('Incorrect data');
}


console.log("Type of triangle is " + typeOfTriangle + " triangle and square is " + squareOfTriangle.toFixed(2) );