// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
    let c = a + b;
    //return c;
    document.querySelector("#vysledek").innerHTML = c;
}

/**
 * Upozorní uživatele při spuštění.
 */
let stvorec = document.querySelector('.ctverecek');

function upozorni() {
    let text = "Gratulace, právě jsi spustila tuto funkci!";
    alert(text);
    console.log(text);
    stvorec.innerHTML = text;
    stvorec.style.lineHeight = '2';
}

function zmenfarbu() {
    //document.querySelector('.ctverecek').style.background = 'green';
    stvorec.style.background = 'green';
}