//Como se comunica las funciones
iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');
    
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAtenticado('Erick');
}

function usuarioAtenticado(usuario){
    console.log('Autenticando usuario... Espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}