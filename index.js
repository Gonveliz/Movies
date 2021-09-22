const peliculas = [];
const escritos = [];

let formValues = document.getElementById("formValues");

const myForm = (event) => {
    event.preventDefault();

    let idNumber = peliculas.length + 1;
    let name = document.getElementById("nombre");
    let anio = document.getElementById("anio");
    

    peliculas.push({nombre: name.value, anio: anio.value, id: idNumber})

    escritos.push(
      `<ul>
        <li><h3>${name.value}</h3></li>
        <li><h2>${anio.value}</h2></li>
      </ul>`);

    let idCurrent = escritos.length - 1

    escritura(idCurrent);
    contador()
}

function escritura (parametro) {
  formValues.innerHTML += escritos[parametro]
}

function contador() {
    if( peliculas.length === 5){
    alert('Tienes Buenos Gustos')
    }
}




// console.log(escritos);

// const escritura = (parametro) => {
//   formValues.innerHTML(parametro)
// }

// function quitarPeli(idAborrar){
//     for (const i of peliculas) {
//         if (i.id === idAborrar){
//             peliculasFiltrado = peliculas.filter(valor => {return valor.id != i.id})
//             peliculas = peliculasFiltrado
//         } 
//     }
// }



// const agregarPeli () => {

// }