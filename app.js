
const cancion = document.getElementById('cancion');

const progreso =
document.getElementById('progress');

const botonPlayPause =
document.getElementById('play-pause');

const iconoControl =
document.getElementById('iconoControl');


// DURACIÓN DEL AUDIO
cancion.addEventListener('loadedmetadata', () => {

    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;

});


// PLAY Y PAUSE
botonPlayPause.addEventListener('click', () => {

    if(cancion.paused){

        cancion.play();

        iconoControl.classList.remove('bi-play-fill');
        iconoControl.classList.add('bi-pause-fill');

    } else {

        cancion.pause();

        iconoControl.classList.remove('bi-pause-fill');
        iconoControl.classList.add('bi-play-fill');

    }

});


// MOVER BARRA AUTOMÁTICAMENTE
cancion.addEventListener('timeupdate', () => {

    progreso.value = cancion.currentTime;

});


// CAMBIAR TIEMPO MANUALMENTE
progreso.addEventListener('input', () => {

    cancion.currentTime = progreso.value;

});

