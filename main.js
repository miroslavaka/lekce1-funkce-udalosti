// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {string} selector
 * @param {int} a
 * @param {int} b
 */
function secti(selector, a, b) {
    let c = a + b;
    document.querySelector(selector).innerHTML = c;
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

/**
 * Zmen farbu stvorca na zelenu.
 * 
 * @param {}
 */

function zmenfarbu() {
    stvorec.style.background = 'green';
}