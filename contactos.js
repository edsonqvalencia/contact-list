// 1
let contactos = [
  {
    id: 5960927,
    nombre: "Edson",
    apellidos: "Quispe Valencia",
    telefono: 60357555,
    ubicaciones: [{ ciudad: "Cochabamba", direccion: "Av Villarroel" }],
  },
  {
    id: 1234567,
    nombre: "Jasmin",
    apellidos: "Pimentel Chavez",
    telefono: 77909871,
    ubicaciones: [{ ciudad: "Cochabamba", direccion: "Av Pando" }],
  },
  {
    id: 7654321,
    nombre: "Andres",
    apellidos: "Cadima Zeballos",
    telefono: 79724780,
    ubicaciones: [{ ciudad: "Cochabamba", direccion: "Av Perú" }],
  },
];

// 2
function holaContacto(id, nombre, apellidos, telefono, ubicaciones) {
  contactos.push({
    id: id,
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
  });
}

// 3
function chauContacto(nombre) {
  let index = contactos.findIndex((contacto) => contacto.nombre === nombre);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

// 4
function contactosLog() {
  contactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Ubicaciones:`);
    contacto.ubicaciones.forEach((ubicacion) => {
      console.log(`Ciudad: ${ubicacion.ciudad}`);
      console.log(`Dirección: ${ubicacion.direccion}`);
    });
    console.log("---");
  });
}
