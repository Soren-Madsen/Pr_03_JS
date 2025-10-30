//Permet iniciar la finestra Despertador.html en el que es mostri la hora actual
let ref_window;
const btn_mostra_despertador = document.getElementById("btn_mostra_despertador");
btn_mostra_despertador.onclick = function(){
   ref_window = window.open("Despertador.html", "Despertador", "width=300,height=200","toolbar=no","scrollbars=no");
}

const btn_tanca_despertador = document.getElementById("btn_tanca_despertador");
btn_tanca_despertador.onclick = function(){
    ref_window.close();
}