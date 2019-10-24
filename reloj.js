
var updateHour=function(){
var date=new Date(),
    hours=date.getHours();
    ampm,
    minutes=date.getMinutes(),
    seconds=date.getSeconds(),
    dayWeek=date.getDay(),
    day=date.getDate(),
    month=date.getMonth(),
    year=date.getFullYear();

var pHoras=document.getElementById("horas"),
    pAMPM=document.getElementById('ampm'),
    pMinutes=document.getElementById('minutos'),
    pSegundos=document.getElementById('segundos'),
    pDiaSemana=document.getElementById('diaSemana'),
    pDia=document.getElementById('dia'),
    pMes=document.getElementById('mes'),
    pYear=document.getElementById('year');
   
var semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
console.log(dayWeek)

pDiaSemana.textContent=semana[dayWeek];
pDia.textContent=day;
var meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
pMes.textContent=meses[month];
pYear.textContent=year;

if(hours>=12){
    hours=horas-12;
    ampm='PM';
}else{
    ampm="AM";
}

if (hours==0){
    hours=12;
 };
pHoras.textContent=hours;
pAMPM.textContent=ampm;
if (minutes<10){
    minutes=`0${minutes}`;
}
if(seconds<10){
    seconds=`0${seconds}`;
}
pMinutes.textContent=minutes;
pSegundos.textContent=seconds;


};
updateHour()
var intervalo=setInterval(updateHour,1000);

