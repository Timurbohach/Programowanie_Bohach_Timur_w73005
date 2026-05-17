function wypiszEkran(tekst) {
    document.getElementById('output-box').textContent = tekst;
}

// --- ZADANIE 1 ---
function zadanie1() {
    let arr = [];
    wypiszEkran("Uruchomiono Zadanie 1. Wpisz liczby w wyskakujących okienkach prompt...");
    
    for (let i = 0; i < 10; i++) {
        let val = prompt(`Zad 1: Podaj liczbę całkowitą (${i + 1}/10):`);
        if (val === null) return; // Przerwanie jeśli użytkownik anulował
        arr.push(parseInt(val) || 0);
    }
    
    console.log("Zad 1 - Tablica użytkownika:", arr);
    
    let searchVal = prompt("Zad 1: Podaj liczbę całkowitą do wyszukania w tablicy:");
    if (searchVal === null) return;
    let search = parseInt(searchVal) || 0;
    
    let count = arr.filter(x => x === search).length;
    
    let wynik = `Tablica: [${arr.join(', ')}]\nWyszukiwana liczba: ${search}\nLiczba powtórzeń: ${count}`;
    console.log("Zad 1 - Wynik:", wynik);
    wypiszEkran(wynik);
}

// --- ZADANIE 2 ---
function zadanie2() {
    let arr = [1, 2, 3, 4, 5, 6];
    wypiszEkran("Uruchomiono Zadanie 2. Sprawdź okienka prompt...");
    
    let numVal = prompt("Zad 2: Podaj liczbę całkowitą do wstawienia:", "99");
    let idxVal = prompt("Zad 2: Podaj indeks, na który wstawić (0 - 5):", "2");
    if (numVal === null || idxVal === null) return;
    
    let num = parseInt(numVal) || 0;
    let index = parseInt(idxVal) || 0;
    
    let staraTablica = [...arr];
    arr.splice(index, 0, num);
    
    let wynik = `Tablica początkowa: [${staraTablica.join(', ')}]\nWstawiono liczbę ${num} na indeks ${index}.\nTablica po zmianie: [${arr.join(', ')}]`;
    console.log("Zad 2 - Wynik:", wynik);
    wypiszEkran(wynik);
}

// --- ZADANIE 3 ---
function zadanie3() {
    let tekst = prompt("Zad 3: Podaj ciąg znaków do odwrócenia:", "Laboratorium");
    if (tekst === null) return;
    
    let odwrócony = tekst.split('').reverse().join('');
    
    let wynik = `Oryginalny ciąg: ${tekst}\nOdwrócony ciąg: ${odwrócony}`;
    console.log("Zad 3 - Wynik:", odwrócony);
    wypiszEkran(wynik);
}

// --- ZADANIE 4 ---
function zadanie4() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1); // Liczby losowe od 1 do 100
    }
    
    let wynik = "Zadanie 4 (Tablica wypełniona losowo): " + arr.join(', ');
    console.log("Zad 4 -", wynik);
    wypiszEkran(wynik); 
}

// --- ZADANIE 5 ---
function zadanie5() {
    let arr = [12, 5, 8, 3, 15, 8, 20]; 
    let logi = [];
    
    logi.push("Tablica wejściowa: [" + arr.join(', ') + "]");

  
    let suma = arr.reduce((a, b) => a + b, 0);
    logi.push("a. Suma wartości: " + suma);

    
    let parzyste = arr.filter(x => x % 2 === 0);
    logi.push("b. Liczby parzyste: [" + parzyste.join(', ') + "]");

    
    let pomnozone = arr.map(x => x * 3);
    logi.push("c. Wartości pomnożone x3: [" + pomnozone.join(', ') + "]");

    
    let numerAlbumu = 73005; 
    arr.push(numerAlbumu);
    let indexAlbumu = arr.indexOf(numerAlbumu);
    logi.push(`d. Dodano numer albumu (${numerAlbumu}). Jego indeks to: ${indexAlbumu}`);

    
    let nowaSuma = arr.reduce((a, b) => a + b, 0);
    let srednia = nowaSuma / arr.length;
    logi.push("e. Średnia arytmetyczna: " + srednia.toFixed(2));

    
    let max = Math.max(...arr);
    logi.push("f. Największa liczba: " + max);

    
    let wybranaWartosc = 8;
    let iloscWystapien = arr.filter(x => x === wybranaWartosc).length;
    logi.push(`g. Ilość wystąpień wartości (${wybranaWartosc}): ${iloscWystapien}`);

    let ostatecznyWynik = logi.join('\n');
    console.log("Zad 5 -\n" + ostatecznyWynik);
    wypiszEkran("Zadanie 5 wykonane. Wyniki wypisano poniżej i w konsoli:\n\n" + ostatecznyWynik);
}

// --- ZADANIE 6 ---
function funkcjaZad6(tablica) {
    if (tablica.length < 2) return "Tablica ma za mało elementów";
    let posortowane = [...tablica].sort((a, b) => b - a);
    return posortowane[0] + posortowane[1];
}
function zadanie6() {
    let testArr = [4, 12, 1, 8, 23, 9];
    let wynikSuma = funkcjaZad6(testArr);
    let tekst = `Tablica testowa: [${testArr.join(', ')}]\nSuma dwóch największych liczb wynosi: ${wynikSuma}`;
    console.log("Zad 6 -", tekst);
    wypiszEkran(tekst);
}

// --- ZADANIE 7 ---
function funkcjaZad7(tablica) {
    return [...new Set(tablica)];
}
function zadanie7() {
    let testArr = [1, 2, 2, 3, 4, 4, 4, 5, 1, 6];
    let bezDuplikatów = funkcjaZad7(testArr);
    let tekst = `Tablica z duplikatami: [${testArr.join(', ')}]\nPo usunięciu duplikatów: [${bezDuplikatów.join(', ')}]`;
    console.log("Zad 7 -", tekst);
    wypiszEkran(tekst);
}

// --- ZADANIE 8 ---
function funkcjaZad8(ksiazki) {
    let unikalne = new Set(ksiazki);
    return {
        zbior: unikalne,
        liczba: unikalne.size
    };
}
function zadanie8() {
    let wydaneKsiazki = ["Wiedźmin", "Hobbit", "Wiedźmin", "Harry Potter", "Hobbit"];
    let wynik = funkcjaZad8(wydaneKsiazki);
    
    let tekst = `Wszystkie wydane książki: [${wydaneKsiazki.join(', ')}]\n`;
    tekst += `Zbiór unikalnych tytułów: [${[...wynik.zbior].join(', ')}]\n`;
    tekst += `Liczba unikalnych tytułów: ${wynik.liczba}`;
    
    console.log("Zad 8 - Unikalne książki:", wynik.zbior, "Ilość:", wynik.liczba);
    wypiszEkran(tekst);
}

// --- ZADANIE 9 ---
function funkcjaZad9(lancuch) {
    return new Set(lancuch.split(''));
}
function zadanie9() {
    let tekstTestowy = prompt("Zad 9: Wpisz łańcuch znaków:", "programowanie");
    if (tekstTestowy === null) return;
    
    let unikalneZnaki = funkcjaZad9(tekstTestowy);
    let tekstWyniku = `Oryginalny tekst: "${tekstTestowy}"\nZbiór unikalnych znaków: [${[...unikalneZnaki].join(', ')}]`;
    
    console.log("Zad 9 - Zbiór znaków:", unikalneZnaki);
    wypiszEkran(tekstWyniku);
}

// --- ZADANIE 10 ---
function funkcjaZad10(slowa) {
    let mapa = new Map();
    for (let slowo of slowa) {
        let czysteSlowo = slowo.toLowerCase();
        if (mapa.has(czysteSlowo)) {
            mapa.set(czysteSlowo, mapa.get(czysteSlowo) + 1);
        } else {
            mapa.set(czysteSlowo, 1);
        }
    }
    return mapa;
}
function zadanie10() {
    let tablicaSlow = ["apple", "banana", "apple", "orange", "banana", "apple"];
    let wynikMapa = funkcjaZad10(tablicaSlow);
    
    let tekst = `Tablica słów: [${tablicaSlow.join(', ')}]\n\nWynikowa Mapa (Słowo => Wystąpienia):\n`;
    for (let [klucz, wartosc] of wynikMapa) {
        tekst += `${klucz} => ${wartosc}\n`;
    }
    
    console.log("Zad 10 - Mapa słów:", wynikMapa);
    wypiszEkran(tekst);
}

// --- ZADANIE 11 ---
function zadanie11() {
    let ksiazkaAdresowa = new Map();
    ksiazkaAdresowa.set("Jan", "123-456-789");
    ksiazkaAdresowa.set("Anna", "987-654-321");
    ksiazkaAdresowa.set("Piotr", "555-666-777");
    
    let tekst = "Książka adresowa (Wyświetlanie imion i numerów):\n";
    for (let [imie, telefon] of ksiazkaAdresowa) {
        tekst += `Imię: ${imie}, Telefon: ${telefon}\n`;
    }
    
    console.log("Zad 11 - Książka adresowa:");
    ksiazkaAdresowa.forEach((tel, imie) => console.log(`${imie}: ${tel}`));
    wypiszEkran(tekst);
}

// --- ZADANIE 12 ---
function zadanie12() {
    let kolejka = [];
    let logi = [];
    
    logi.push("Inicjalizacja puste kolejki.");
    
    
    kolejka.push("Klient A"); logi.push("Dodano: Klient A");
    kolejka.push("Klient B"); logi.push("Dodano: Klient B");
    kolejka.push("Klient C"); logi.push("Dodano: Klient C");
    logi.push("Stan kolejki: [" + kolejka.join(', ') + "]");
    
    
    let obsluzony1 = kolejka.shift(); logi.push(`Obsłużono i usunięto: ${obsluzony1}`);
    let obsluzony2 = kolejka.shift(); logi.push(`Obsłużono i usunięto: ${obsluzony2}`);
    
    logi.push("Końcowy stan kolejki: [" + kolejka.join(', ') + "]");
    
    let ostatecznyWynik = logi.join('\n');
    console.log("Zad 12 -\n" + ostatecznyWynik);
    wypiszEkran(ostatecznyWynik);
}

// --- ZADANIE 13 ---
function funkcjaZad13(ciag) {
    let stos = [];
    let dopasowania = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let znak of ciag) {
        
        if (dopasowania[znak]) {
            stos.push(znak);
        } 
        else if (Object.values(dopasowania).includes(znak)) {
            let ostatniOtwierajacy = stos.pop();
            if (!ostatniOtwierajacy || dopasowania[ostatniOtwierajacy] !== znak) {
                return false;
            }
        }
    }
    return stos.length === 0;
}
function zadanie13() {
    let ciagTestowy = prompt("Zad 13: Podaj ciąg nawiasów do sprawdzenia:", "{[()]}");
    if (ciagTestowy === null) return;
    
    let czyZbalansowany = funkcjaZad13(ciagTestowy);
    let wynikTekst = `Ciąg nawiasów: ${ciagTestowy}\nCzy poprawnie zbalansowany? -> ${czyZbalansowany ? "TAK (True)" : "NIE (False)"}`;
    
    console.log("Zad 13 - Wynik:", czyZbalansowany);
    wypiszEkran(wynikTekst);
}

function uruchomZadanie(numer) {
    console.clear();
    console.log(`--- URUCHOMIONO ZADANIE ${numer} ---`);
    
    switch(numer) {
        case 1: zadanie1(); break;
        case 2: zadanie2(); break;
        case 3: zadanie3(); break;
        case 4: zadanie4(); break;
        case 5: zadanie5(); break;
        case 6: zadanie6(); break;
        case 7: zadanie7(); break;
        case 8: zadanie8(); break;
        case 9: zadanie9(); break;
        case 10: zadanie10(); break;
        case 11: zadanie11(); break;
        case 12: zadanie12(); break;
        case 13: zadanie13(); break;
        default: console.log("Nie ma takiego zadania.");
    }
}