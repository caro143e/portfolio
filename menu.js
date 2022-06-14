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
//  toggle klassen "shown" på menu vha. classList.toggle

//   variablen "menuShown", siger, at menu-variablen indeholder klassen "shown"

// c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)),
if (menuShown) {
  console.log(menuShown); // se i konsollen
  // sæt btn.textContent til "Luk", hvis menuShown er "true"
  // hvis vores main menu vises skal vores button være lukket (skjult)
  btn.textContent = "luk";
} else {
  console.log(menuShown); // se i konsollen
  // sæt btn.textContent til "Menu", hvis menuShown er "false"
  //  ellers vises menu kanppen (når viewport er 800px er .shown tilstede)
  btn.textContent = "Menu";
}
// lyt efter om man klikker på menu
btn.addEventListener("click", toggleMenu);
// klik-event til "btn", der sætter toggleMenu-funktionen i gang
