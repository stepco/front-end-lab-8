let kursEuro_Uah = 33.2090;//12.02.2018
let kursUsd_Uah = 27.0585; //12.02.2018
let kursEuro_Usd = kursEuro_Uah/kursUsd_Uah;
let howMuchEuro = Number(prompt("how much euro you want to buy?"));
let howMuchUsd = Number(prompt("how much dollars you want to buy?"));
let sumUahEuro = howMuchEuro * kursEuro_Uah;
let sumUahUsd = howMuchUsd * kursUsd_Uah;
console.log(howMuchEuro + " euros are equal " + sumUahEuro.toFixed(4) + " UAH , " + howMuchUsd + " dollars are equal " + sumUahUsd.toFixed(4) + " UAH, one euro is equal " + kursEuro_Usd.toFixed(4) + " dollars.")