//Metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist(nombre){
        console.log(`Creando la plyalist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduccion la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Haavy Metal');
reproductor.crearPlaylist('Bachata');
reproductor.reproducirPlaylist('Bachata');