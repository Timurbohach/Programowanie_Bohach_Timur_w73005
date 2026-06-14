// Zadanie 1
const ksiazka = {
    tytul: "Sztuka podstępu",
    autor: "Kevin Mitnick",
    rokWydania: 2002
};

const pokazInfoOKsiazce = (k) => `${k.tytul} - ${k.autor} (${k.rokWydania})`;
console.log("Zadanie 1:", pokazInfoOKsiazce(ksiazka));


// Zadanie 2
const studentIT = {
    imie: "Timur",
    nazwisko: "Bohach",
    nrAlbumu: "73005",
    oceny: [5.0, 4.0, 4.5, 5.0],
    policzSrednia() {
        const suma = this.oceny.reduce((acc, curr) => acc + curr, 0);
        const srednia = suma / this.oceny.length;
        console.log(`Średnia ocen studenta ${this.imie} ${this.nazwisko} (Album: ${this.nrAlbumu}) to: ${srednia.toFixed(2)}`);
        return srednia;
    }
};
console.log("Zadanie 2:");
studentIT.policzSrednia();


// Zadanie 3
class Trojkat {
    constructor(h, a, nazwa) {
        this.h = h;
        this.a = a;
        this.nazwa = nazwa;
    }
    
    pole() {
        return (this.a * this.h) / 2;
    }

    ktoWiekszy(inny) {
        return this.pole() > inny.pole() ? this : inny;
    }
}

const tr1 = new Trojkat(12, 6, "Trojkat Pierwszy");
const tr2 = new Trojkat(9, 9, "Trojkat Drugi");
const tr3 = new Trojkat(15, 3, "Trojkat Trzeci");

console.log("Zadanie 3 (Większy trójkąt):", tr1.ktoWiekszy(tr2).nazwa);


// Zadanie 4
class Trapez {
    constructor(h, a, b, nazwa) {
        this.h = h;
        this.a = a;
        this.b = b;
        this.nazwa = nazwa;
    }

    aktualizujNazwe(nowa) {
        this.nazwa = nowa;
    }

    pole() {
        return ((this.a + this.b) * this.h) / 2;
    }
}

const trap1 = new Trapez(6, 5, 7, "Trapez A");
const trap2 = new Trapez(12, 3, 9, "Trapez B");
const trap3 = new Trapez(8, 4, 6, "Trapez C");
trap1.aktualizujNazwe("Zaktualizowany Trapez A");

const porownajPola = (figura1, figura2) => {
    const p1 = figura1.pole();
    const p2 = figura2.pole();
    
    if (p1 > p2) {
        console.log(`Zwycięża: ${figura1.nazwa} z polem ${p1}`);
    } else if (p2 > p1) {
        console.log(`Zwycięża: ${figura2.nazwa} z polem ${p2}`);
    } else {
        console.log(`Remis! Obie figury mają pole równe ${p1}`);
    }
};
console.log("Zadanie 4:");
porownajPola(tr1, trap1);


// Zadanie 5
const naFormatJSON = (obiekt) => JSON.stringify(obiekt);
console.log("Zadanie 5:", naFormatJSON({ sztukaWalki: "Muay Thai", stazZajec: 1, kategoriaWagowa: undefined }));


// Zadanie 6
const pulaImion = ["Timur", "Kacper", "Maksym", "Dawid", "Oskar", "Bartosz", "Karol"];
const pulaNazwisk = ["Bohach", "Nowak", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński"];

const losujLiczbe = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generujBaze = (ilosc) => {
    const limitowane = Math.min(ilosc, 20); // Обмеження до 20
    const listaUzytkownikow = [];

    for (let i = 0; i < limitowane; i++) {
        listaUzytkownikow.push({
            name: pulaImion[losujLiczbe(0, pulaImion.length - 1)],
            surname: pulaNazwisk[losujLiczbe(0, pulaNazwisk.length - 1)],
            age: losujLiczbe(5, 50),
            phone: losujLiczbe(5000000, 8000000)
        });
    }
    return listaUzytkownikow;
};

let mojaBaza = generujBaze(10);
console.log("Zadanie 6 (Główna tablica):", mojaBaza);


// Zadanie 7
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-generate');
    if(btn) {
        btn.addEventListener('click', () => {
            const podanaIlosc = parseInt(document.getElementById('input-count').value, 10);
            const dane = generujBaze(podanaIlosc);
            const kontener = document.getElementById('display-area');
            
            let zawartosc = "<ol>"; // Використовуємо нумерований список замість маркованого
            dane.forEach(osoba => {
                zawartosc += `<li><b>${osoba.name} ${osoba.surname}</b> - Wiek: ${osoba.age}, tel: ${osoba.phone}</li>`;
            });
            zawartosc += "</ol>";
            
            kontener.innerHTML = zawartosc;
        });
    }
});


// Zadanie 8
const wybierzPelnoletnich = (tablica) => tablica.filter(osoba => osoba.age >= 18);
console.log("Zadanie 8 (Tylko 18+):", wybierzPelnoletnich(mojaBaza));


// Zadanie 9
const wyciagnijImiona = (tablica) => tablica.map(osoba => osoba.name);
console.log("Zadanie 9 (Sama lista imion):", wyciagnijImiona(mojaBaza));