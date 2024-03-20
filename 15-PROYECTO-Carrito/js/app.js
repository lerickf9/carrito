// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos'); 
let articulosCarrito = [];

cargarEventListener();

function cargarEventListener(){
    //Agregar un curso presionando "Agregar curso"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar varrito
    vaciarCarritobtn.addEventListener('click', ()=>{
        console.log('vaciando carrito');
        articulosCarrito = []; //resetear el carrito
        limpiarHtml();
    });
}

//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Elimina un curso del carrito
function eliminarCurso(e){
    console.log(); //vemos los nombres de los elementos que está en el carrito 
    if(e.target.getAttribute('data-id')){
       console.log(e.target.getAttribute('data-id'));

        const cursoId = e.target.getAttribute('data-id');
       //Elimina del arreglo
       articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

       carritoHTML(); //Itera sobre el carrito y mostrar el html
    }
}

//Lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){

    //Crear un objeto con el contenido actual
    const infoCurso ={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad :1
    }
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        //Actualizar la cantidad
        const cursos= articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito=[...cursos]
    }else{
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //limipiar el html
    limpiarHtml();

    //Recorre el carrito y gnera el html
    articulosCarrito.forEach(curso =>{
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class='borrar-curso' data-id="${id}"> X </a>
            </td>
        `;
        //Agrega el html del carrito al dbody
        contenedorCarrito.appendChild(row);
    })

}

function limpiarHtml(){
    //forma lenta
    // contenedorCarrito.innerHTML='';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}