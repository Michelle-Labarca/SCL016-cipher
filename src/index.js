import cipher from "./cipher.js";

  /*Imagen alert con doble click */
  document.getElementById('myImg').ondblclick = function() { alert("UV WBLKLZ LZWLYHY JVUZAYBPY BU TBUKV TLQVY ZPU TLQVYHY H SHZ WLYZVUHZ JHKH BUV KL UVZVAYVZ KLIL AYHIHQHY WHYH ZB WYVWPH TLQVYH")}
  /* Cambio de texto con doble click*/
  document.getElementById('hint').ondblclick = function() {changeText()};

    function changeText() {
    document.getElementById('hint').innerHTML = '¡HAZLO. Y si te da miedo, hazlo con miedo!';
    document.getElementById('hint').style.color= '#dec10c';
    }

  /* Botón de cifrado*/
  document.getElementById('Cifrar').onclick = function() {
  /* Obtenemos mensaje y desplazamiento */
    let move = document.getElementById("Position").value;
      if (move == null || move == "") {
      alert("No has ingresado el Número de posiciones");} 
    let message = document.getElementById("Youtext").value;
    document.getElementById("Result").value = cipher.encode(move,message);
    }

  /* Botón de descifrado*/
  document.getElementById('Descifrar').onclick = function() {
  /* Obtenemos mensaje y desplazamiento */
    let move = document.getElementById("Position").value;
    if (move == null || move== "") {
      alert("No has ingresado el Número de posiciones");}
    let message = document.getElementById("Youtext").value;  
    document.getElementById("Result").value = cipher.decode(move,message);
    };