const { getCrearArchivo } = require("./helpers/multiplicar");
const base = 2;

getCrearArchivo(base)
  .then((msg) => console.log(msg, "creado"))
  .catch((err) => console.log(err, "ERROR!"));
