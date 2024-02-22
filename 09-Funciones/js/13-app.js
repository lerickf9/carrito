const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:() => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la plyalist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la plylist ${nombre}`),

    //METODOS DE PROPIEDAD
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }


}

reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Haavy Metal');
reproductor.crearPlaylist('Bachata');
reproductor.reproducirPlaylist('Bachata');