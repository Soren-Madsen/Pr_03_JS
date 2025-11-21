

// Crea i programa un reproductor de música amb les següents funcionalitats dividides en dos html:

// Hauràs de definir un array amb informació sobre el nom de diferents arxius d’àudio ,
// la seva extensió i el seu títol.

const audioFiles = [
    {
        title: "Sonido 1",
        file: "Notification.wav",
        duration: "0:01",
        favorite: false
    },
    {
        title: "Sonido 2",
        file: "Screech.wav",
        duration: "0:08",
        favorite: false
    },
    {
        title: "Sonido 3",
        file: "Spooky.wav",
        duration: "0:02",
        favorite: false
    }
];


// Mostra el llistat de àudios disponibles (hauràs de tenir l’arxiu i la informació a
// l’array).

const select_music = document.getElementById("select_music");

audioFiles.forEach(function(audio) {
    const option = document.createElement("option");
    option.value = audio.file;
    option.textContent = audio.title;
    select_music.appendChild(option);
});

// Permet que l’usuari pugui reproduir, aturar, posar en pausa i pujar i baixar el
// volum qualsevol àudio de l’array.

const audio = new Audio();
let audio_actual = "";

const play_button = document.getElementById("btn_play");
const stop_button = document.getElementById("btn_stop");
const pause_button = document.getElementById("btn_pause");  
const btnvolume_up = document.getElementById("btn_volume_up");
const btnvolume_down = document.getElementById("btn_volume_down");
const inp_time_audio = document.getElementById("inp_time_audio");
const inp_vol_audio = document.getElementById("inp_vol_audio");

play_button.onclick = playMusic;
stop_button.onclick = stopMusic;
pause_button.onclick = pauseMusic;
btnvolume_up.onclick = volumeUp;
btnvolume_down.onclick = volumeDown;

function playMusic() {
    let select_music = document.getElementById("select_music");
    if (audio_actual != select_music.value) {
        audio.src = select_music.value;
        audio_actual = select_music.value;
    }
    audio.oncanplay = function() {
        inp_time_audio.max = audio.duration;
        inp_time_audio.value = audio.currentTime;
        let refIntAudio = window.setInterval(function() {
            inp_time_audio.value = audio.currentTime;
            if (audio.currentTime == audio.duration) {
                window.clearInterval(refIntAudio);
            }
        }, 100);
    };
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}
function volumeDown() {
    if (audio.volume >= 0.1) {
        audio.volume -= 0.1;
    }
    inp_vol_audio.value = audio.volume;
}

function volumeUp() {
    if (audio.volume <= 0.9) {
        audio.volume += 0.1;
    }
    inp_vol_audio.value = audio.volume;
}

//  Permet que l’usuari pugui obrir “Info.html” per m veure la informació de
// qualsevol àudio.

let ref_window;
const btn_mostra_info = document.getElementById("btn_mostra_info");
btn_mostra_info.onclick = function(){
   let altura = screen.availHeight/2;
   let amplada = screen.availWidth/2;
   let width_window = 300;
   let height_window = 300;
   ref_window = window.open("Info.html", "Info", "width="+width_window+"px,height="+height_window+"px,toolbar=no,scrollbars=no,top="
    +(altura-height_window/2)+"px,left="+(amplada-width_window/2)+"px");

}

const btn_tanca_info = document.getElementById("btn_tanca_info");
btn_tanca_info.onclick = function(){
    ref_window.close();
}
const info_button = document.getElementById("btn_info");
info_button.onclick = function() {
    window.open("Info.html", "_blank");
    const selectedAudio = audioFiles.find(audio => audio.file === audio_actual);
    if (selectedAudio) {
        localStorage.setItem("selectedAudio", JSON.stringify(selectedAudio));
    }
};


//  Mostrar els àudios que l’usuari hagi marcat com a preferit.
// Permet afegir/treure i ordenar l’àudio d’una llista privada de reproducció.
// Permet crear/esborrar vàries llistes de reproducció.

//  En Info.html

//  Mostra la informació de l’àudio seleccionat per l’usuari.
//  Mostra si l’àudio s’ha marcat com a preferit o no.
//  Permet marcar o desmarcar l’àudio com a preferit.