const mostrarReloj = () =>{
  let fecha = new Date();
  let hr = formatoHora( fecha.getHours() );
  let min = formatoHora( fecha.getMinutes() );
  let seg = formatoHora( fecha.getSeconds() );
  document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre']
  const dias = ['Domingo', 'Lunes', 'Martes' , 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = `${diaSemana} ${dia} de ${mes}`;
  document.getElementById('fecha').innerHTML = fechaTexto;

  document.getElementById('hora').classList.toggle('animar');

  alertaMedioDia(hr,min,seg);
}

const formatoHora = (hora) => {
  if(hora < 10)
    hora = '0'+ hora;
  return hora;
}

function alertaMedioDia(hr, min, seg){
  if (hr == 12 && min == 00 && seg == 00) {
    alert('Alerta es medio día')
  }
}




setInterval(mostrarReloj, 1000);
