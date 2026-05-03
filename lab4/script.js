//zad1
alert("It's muffin time!");

//zad2
let a = 10, b = 20, c = 23.2;

let suma = a + b + c;
let roznica = a - b - c;
let iloczyn = a * b * c;
let iloraz = a / b;

let wynikiStr = `Suma: ${suma}, Różnica: ${roznica}, Iloczyn: ${iloczyn}, Iloraz: ${iloraz}`;

console.log(wynikiStr); 
alert(wynikiStr);       
document.getElementById("wynik-zadanie-2").innerHTML = wynikiStr; 

/* 
Typy zmiennych w JS:
Number: liczby całkowite i zmiennoprzecinkowe.
String: ciągi znaków (tekst).
Boolean: wartości logiczne (true/false).
Object: złożone struktury danych.
Undefined: zmienna, której nie przypisano wartości.
Null: celowy brak wartości.
*/

//zad3
for (let i = 0; i <= 100; i++) {
    
    if (i % 2 === 0) console.log("Parzysta: " + i);
    
    /
    if (i % 5 === 0) document.getElementById("wynik-zadanie-3b").innerHTML += i + " ";
    
    
    if (i > 0 && i % 13 === 0) alert("Liczba podzielna przez 13: " + i);
}

//zad4
let bokA = 3, bokB = 4, bokC = 5;
let polObwodu = (bokA + bokB + bokC) / 2;
let pole = Math.sqrt(polObwodu * (polObwodu - bokA) * (polObwodu - bokB) * (polObwodu - bokC));
console.log("Pole trójkąta wynosi: " + pole);

//zad5
let imie = prompt("Jak masz na imię?");
alert("Witaj, " + imie + "!");

//zad6
let liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
document.write("Wynik dodawania: " + (liczba1 + liczba2));

//zad7
let n1 = parseFloat(prompt("Podaj liczbę 1:"));
let n2 = parseFloat(prompt("Podaj liczbę 2:"));
let n3 = parseFloat(prompt("Podaj liczbę 3:"));
console.log("Największa liczba to: " + Math.max(n1, n2, n3));

//zad8
let x = Math.abs(parseInt(prompt("NWD - Podaj pierwszą liczbę:")));
let y = Math.abs(parseInt(prompt("NWD - Podaj drugą liczbę:")));
while (y) {
    x %= y;
    [x, y] = [y, x];
}
console.log("Największy wspólny dzielnik (NWD) to: " + x);

//zad9
function graj() {
    let wylosowana = Math.floor(Math.random() * 101);
    let proby = 0;
    let strzal;

    while (true) {
        strzal = parseInt(prompt("Zgadnij liczbę (0-100):"));
        proby++;

        if (strzal === wylosowana) {
            alert(`Gratulacje! Odgadłeś liczbę ${wylosowana} w ${proby} próbach.`);
            break;
        } else if (strzal < wylosowana) {
            console.log("Podana liczba jest mniejsza od wylosowanej.");
        } else {
            console.log("Podana liczba jest większa od wylosowanej.");
        }
    }
}
graj();