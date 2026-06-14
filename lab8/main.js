document.addEventListener("DOMContentLoaded", () => {
    console.log("Inicjalizacja skryptu walidacji. Autor: Timur Bohach (73005)");

    const formularz = document.getElementById("form-rejestracja");
    const wszystkiePola = formularz.querySelectorAll("input, select");

    // Narzędzia walidacyjne
    const czyWypelnione = (wartosc) => wartosc.trim().length > 0;
    const czyPoprawnyMail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const czyWymaganaDlugosc = (haslo) => haslo.length >= 8;

    const weryfikujWiek = (dataString) => {
        if (!dataString) return false;
        const urodziny = new Date(dataString);
        const dzisiaj = new Date();
        let wiekLata = dzisiaj.getFullYear() - urodziny.getFullYear();
        const roznicaMiesiecy = dzisiaj.getMonth() - urodziny.getMonth();
        
        if (roznicaMiesiecy < 0 || (roznicaMiesiecy === 0 && dzisiaj.getDate() < urodziny.getDate())) {
            wiekLata--;
        }
        return wiekLata >= 18;
    };

    // Główny silnik sprawdzający pojedyncze pole
    const sprawdzPole = (element) => {
        let wiadomoscBledu = "";
        element.setCustomValidity(""); // Reset

        // Pola, które omijamy przy pierwszej pętli pustej
        const ignorowanePuste = ["adres-kor", "adres-zam", "pole-wojewodztwo", "wybor-kraju"];

        if (!czyWypelnione(element.value) && !ignorowanePuste.includes(element.id)) {
            wiadomoscBledu = "To pole nie może być puste.";
        } else {
            switch(element.id) {
                case "pole-email":
                    if (!czyPoprawnyMail(element.value)) wiadomoscBledu = "Wpisz poprawny adres e-mail.";
                    break;
                case "pole-haslo":
                    if (!czyWymaganaDlugosc(element.value)) wiadomoscBledu = "Hasło to minimum 8 znaków.";
                    break;
                case "pole-haslo-powtorz":
                    const pierwszeHaslo = document.getElementById("pole-haslo").value;
                    if (element.value !== pierwszeHaslo) wiadomoscBledu = "Podane hasła się różnią.";
                    break;
                case "pole-data":
                    if (!weryfikujWiek(element.value)) wiadomoscBledu = "Wymagana jest pełnoletność (18+).";
                    break;
            }
        }

        // Aktualizacja widoku błędów
        const pojemnikBledu = document.getElementById(`blad-${element.id}`);
        if (wiadomoscBledu) {
            element.setCustomValidity(wiadomoscBledu);
            if(pojemnikBledu) pojemnikBledu.innerText = wiadomoscBledu;
        } else {
            element.setCustomValidity("");
            if(pojemnikBledu) pojemnikBledu.innerText = "";
        }
        
        return wiadomoscBledu === "";
    };

    // Nasłuchiwanie na wpisywanie z klawiatury
    wszystkiePola.forEach(pole => {
        pole.addEventListener("input", (zdarzenie) => {
            sprawdzPole(zdarzenie.target);
        });
    });

    // Ograniczenie telefonu do samych cyfr
    const inputTelefon = document.getElementById("pole-telefon");
    inputTelefon.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, ''); 
        sprawdzPole(this);
    });

    // --- Logika adresów i województw ---
    const listaKrajow = document.getElementById("wybor-kraju");
    const wrapperWoj = document.getElementById("kontener-wojewodztwo");
    let inputWoj = document.getElementById("pole-wojewodztwo");
    const poleAdresZam = document.getElementById("adres-zam");
    const poleAdresKor = document.getElementById("adres-kor");
    const checkboxAdres = document.getElementById("check-adres");
    const sekcjaKor = document.getElementById("sekcja-adres-kor");

    const aktualizujDostepnoscAdresow = () => {
        const wpisaneWoj = inputWoj.value.trim() !== "";
        poleAdresZam.disabled = !wpisaneWoj;
        
        if (!checkboxAdres.checked) {
            poleAdresKor.disabled = !wpisaneWoj;
        }
    };

    listaKrajow.addEventListener("change", function() {
        const wybranyKraj = this.value;
        
        if (wybranyKraj === "PL") {
            wrapperWoj.innerHTML = `
                <select id="pole-wojewodztwo" name="wojewodztwo">
                    <option value="">-- Wybierz województwo --</option>
                    <option value="Podkarpackie">Podkarpackie</option>
                    <option value="Małopolskie">Małopolskie</option>
                    <option value="Mazowieckie">Mazowieckie</option>
                    <option value="Lubelskie">Lubelskie</option>
                </select>`;
        } else {
            wrapperWoj.innerHTML = `<input type="text" id="pole-wojewodztwo" name="wojewodztwo" placeholder="Wpisz nazwę regionu">`;
        }
        
        inputWoj = document.getElementById("pole-wojewodztwo");
        inputWoj.disabled = (wybranyKraj === "");
        
        inputWoj.addEventListener("input", aktualizujDostepnoscAdresow);
        inputWoj.addEventListener("change", aktualizujDostepnoscAdresow);
        
        aktualizujDostepnoscAdresow();
    });

    checkboxAdres.addEventListener("change", function() {
        if (!this.checked) {
            sekcjaKor.style.display = "block";
            poleAdresKor.disabled = poleAdresZam.disabled;
        } else {
            sekcjaKor.style.display = "none";
            poleAdresKor.value = "";
            poleAdresKor.disabled = true;
        }
    });

    // Zatrzymanie wysyłania i finałowa walidacja
    formularz.addEventListener("submit", (zdarzenie) => {
        zdarzenie.preventDefault(); 
        let czyCalyPoprawny = true;
        
        const identyfikatoryDoSprawdzenia = [
            'pole-imie', 'pole-nazwisko', 'pole-email', 
            'pole-haslo', 'pole-haslo-powtorz', 
            'pole-telefon', 'pole-data', 'pole-plec'
        ];
        
        identyfikatoryDoSprawdzenia.forEach(id => {
            const el = document.getElementById(id);
            if (!sprawdzPole(el)) {
                czyCalyPoprawny = false;
            }
        });

        if (czyCalyPoprawny) {
            alert("Świetnie! Formularz przeszedł walidację i jest gotowy do wysyłki."); 
        }
    });
});