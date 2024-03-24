//console.log(autos);
//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max-10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}



//Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); //Muestras los autos al cargar


    //Lena las opciones de años
    llenarSelect();
});

//Event listener para los select de busqueda
marca.addEventListener('change', e =>{
    //console.log(e.target.value); //Se comenta en consola el cambio de marca cuando presionas una opcion
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e =>{
    
    datosBusqueda.year = parseInt(e.target.value);
    // console.log(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});

//Funciones
function mostrarAutos(autos){

    limpiarHTML(); // elimina el HTML previo

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio}
            - Color: ${color}
        `;

        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}

//limpiar html 
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//Genera los años del select
function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//Agrega las opciones a select
    }
}


//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    //console.log('filtrando...');
    //los filter es una funcion de array method entonces se puede concatenar con otros filtros
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )

    // console.log(resultado);
    mostrarAutos( resultado );
}


function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca == marca;
    }
    return auto;//Se mantiene los valores iniciales
}

function filtrarYear (auto) {
    const { year } = datosBusqueda;
    console.log(typeof year);
    if( year ){
        return auto.year === year;
    }
    return auto;
}