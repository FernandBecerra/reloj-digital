function mueveReloj(){

    momentoActual = new Date()
    const mes = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO",
                    "JUNIO","JULIO","AGOSTO","SEPTIEMPRE","OCTUBRE",
                    "NOBRIEMBRE", "DICIEMPRE"];
                    
const dia=["lunes","martes","miercoles","JUEVES","VIERNES","SABADO"]
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
    numeroDia=momentoActual.getDate();
    anio=momentoActual.getFullYear();
    nombreeDia=dia[momentoActual.getDay()];
    fecha = mes[momentoActual.getMonth()];
    

    hora=checkTime(hora);
    segundo=checkTime(segundo);
    minuto=checkTime(minuto);


    ap=(hora<12)?"<span>AM</span>" : "<span>PM</span>";
    hora=(hora==0)?12:hora;
    hora=(hora>12)?hora-12:hora;

    horaImprimible = hora + " : " + minuto + " : " + segundo+ap;
    fechaImprimible=nombreeDia+" / "+numeroDia+" / "+anio
document.getElementById("hora").innerHTML=horaImprimible;
document.getElementById("mes").innerHTML=fecha;
document.getElementById("dia").innerHTML=fechaImprimible;

    setTimeout("mueveReloj()",1000)
}

function checkTime(i) {
   if (i < 10) {
       i = "0" + i;
   }
   return i;
}
