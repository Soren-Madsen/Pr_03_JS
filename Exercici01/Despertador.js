
document.body.style.backgroundColor = window.opener.colorFilla;
window.opener.mostraHorafilla();
window.setInterval(checkHoraAlarma,1000);

function checkHoraAlarma(){
    let hora_alarma = document.getElementById("div_hora_alarma").innerText;
    let hora_actual = document.getElementById("div_hora_actual").innerText;
    if(hora_actual==hora_alarma && hora_actual!=""){
        window.setInterval(function(){
        window.document.body.style.backgroundColor=llista_colors[numeroColor%4];
        numeroColor++;
        },500)
    }
}
let numeroColor=0;
let llista_colors = new Array();
llista_colors[0]="yellow";
llista_colors[1]="orange";
llista_colors[2]="pink";
llista_colors[3]="red";


