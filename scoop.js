let value
let display = document.getElementsByClassName("mnu");
function collapseMenu() { // functie om het menu in en uit te klappen


    if (value == 0) { // als de waarde 0 is

        value++; // verhoog de waarde
        display = document.getElementsByClassName("mnu"); // vind alle elementen met de class mnu
        for (var lk = 0; lk < display.length; lk++) { // voor elk element
            display[lk].style.display = "none"; // verberg de elementen
        }

    } else if (value !== 0) { // als de waarde niet gelijk is aan 0

        for (var lk = 0; lk < display.length; lk++) { // voor elk element
            display[lk].style.display = "flex"; // laat de elementen zien
        }
        value = 0; // maak de waarde gelijk  aan 0

    }
}

let valueT;
let displayT = document.getElementsByClassName("text");
function removeInfo() { // functie om het menu in en uit te klappen


    if (valueT == 0) { // als de waarde 0 is

        valueT++; // verhoog de waarde
        displayT = document.getElementsByClassName("text"); // vind alle elementen met de class text
        for (var lk = 0; lk < displayT.length; lk++) { // voor elk element
            displayT[lk].style.display = "block"; // verberg de elementen
        }

    } else if (valueT !== 0) { // als de waarde niet gelijk is aan 0

        for (var lk = 0; lk < displayT.length; lk++) { // voor elk element
            displayT[lk].style.display = "none"; // laat de elementen zien
        }
        valueT = 0; // maak de waarde gelijk  aan 0

    }
}