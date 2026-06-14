//zad1
function odliczanieSylwestrowe() {
    console.log("Odliczanie pętlą FOR:");
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log("Happy New Year!");

    console.log("Odliczanie pętlą WHILE:");
    let j = 10;
    while (j > 0) {
        console.log(j);
        j--;
    }
    console.log("Happy New Year!");
}
odliczanieSylwestrowe();

//zad2
function silnia(n) {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;
    let wynik = 1;
    for (let i = 2; i <= n; i++) {
        wynik *= i;
    }
    return wynik;
}
console.log(`Silnia z 5 to: ${silnia(5)}`);

//zad3
window.onload = function() {
    let wiek = prompt("Podaj swój wiek:");
    if (wiek !== null && parseInt(wiek) < 18) {
        window.open("https://www.w3schools.com/", "_self");
    }
};

//zad4
const przyciski = document.querySelectorAll('.kolor-btn');
przyciski.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
        przyciski.forEach(btn => btn.style.backgroundColor = '');
        this.style.backgroundColor = 'lightgreen';
    });
});

//zad5
document.getElementById('toggle-btn').addEventListener('click', function() {
    const element = document.getElementById('element-do-ukrycia');
    element.classList.toggle('ukryty');
});

//zad6
document.getElementById('dodaj-do-listy-btn').addEventListener('click', function() {
    const input = document.getElementById('wartosc-listy');
    if (input.value.trim() !== '') {
        const ul = document.getElementById('moja-lista');
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
});

//zad7
document.getElementById('dodaj-do-tabeli-btn').addEventListener('click', function() {
    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');

    if (imie.value.trim() !== '' && nazwisko.value.trim() !== '') {
        const tabela = document.getElementById('moja-tabela');
        const nowyWiersz = tabela.insertRow();
        const komorkaImie = nowyWiersz.insertCell();
        const komorkaNazwisko = nowyWiersz.insertCell();

        komorkaImie.textContent = imie.value;
        komorkaNazwisko.textContent = nazwisko.value;

        imie.value = '';
        nazwisko.value = '';
    }
});

//zad8
function naFahrenheita(celsius) {
    return (celsius * 9/5) + 32;
}

function naCelsjusza(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

document.getElementById('na-fahrenheit').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temp-input').value);
    if (!isNaN(temp)) {
        document.getElementById('temp-wynik').textContent = naFahrenheita(temp).toFixed(2) + " °F";
    }
});

document.getElementById('na-celsjusz').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temp-input').value);
    if (!isNaN(temp)) {
        document.getElementById('temp-wynik').textContent = naCelsjusza(temp).toFixed(2) + " °C";
    }
});

//zad9
function obliczNWD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

document.getElementById('oblicz-nwd').addEventListener('click', function() {
    const l1 = parseInt(document.getElementById('liczba1').value);
    const l2 = parseInt(document.getElementById('liczba2').value);
    if (!isNaN(l1) && !isNaN(l2)) {
        document.getElementById('nwd-wynik').textContent = obliczNWD(l1, l2);
    }
});