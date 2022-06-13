//  variablen "btn", der henviser til ".toggle-btn"
//  variablen "menu", der henviser til ".main-menu"
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");
//  funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  menu.classList.toggle("shown");
}
/* toogle = går imellem at add og remove en klasse */
const menuShown = menu.classList.contains("shown");
// a) toggle klassen "shown" på menu vha. classList.toggle

// b)  variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")

// c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)),
if (menuShown) {
  console.log(menuShown); // se i konsollen
  // sæt btn.textContent til "Luk", hvis menuShown er "true"
  btn.textContent = "luk";
} else {
  console.log(menuShown); // se i konsollen
  // sæt btn.textContent til "Menu", hvis menuShown er "false"
  btn.textContent = "Menu";
}
// "toggleMenu()" slutter her
btn.addEventListener("click", toggleMenu);
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
