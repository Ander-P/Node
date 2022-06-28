const fs = require("fs");

const getCrearArchivo = async (base) => {
  try {
    console.log("===========");
    console.log("tabla del: ", base);
    console.log("===========");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCrearArchivo,
};

//   /// Metodo para escribir
//   fs.writeFileSync(`tabla-${base}.txt`, salida);
//   console.log(`tabla-${base}.txt creada`);
// };

// };

// const crearArchivo = (base = 5) => {
//   console.log("tabla del: ", base);

//   let salida = "";

//   for (let i = 1; i <= 10; i++) {
//     salida += `${base} x ${i} = ${base * i}\n`;
//   }
//   console.log(salida);

//   /// Metodo para escribir
//   fs.writeFileSync(`tabla-${base}.txt`, salida);
//   console.log("tabla-5.txt creada");

//   //// Metodo para agregar
//   fs.appendFile(`tabla-${base}.txt`, "Hello content!", function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });
// };
