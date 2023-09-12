// 1
let contactos = [
  "Jasmin Pimentel",
  "Andres Cadima",
  "Laura Grageda",
  "Ismael Callejas",
];

// 2
function holaContactos(nombreApellido) {
  contactos.push(nombreApellido);
}

// 3
function chauContactos(nombreApellido) {
  let index = contactos.indexOf(nombreApellido);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

// 4
function contactosLog() {
  for (let i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
  }
}
