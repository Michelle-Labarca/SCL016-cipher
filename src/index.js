window.onload = function(){

/*Imagen alert con doble click */
document.getElementById('myImg').ondblclick = function() { alert
('uv wblklz lzwlyhy jvuzaybpy bu tbukv tlqvy zpu tlqvyhy h shz wlyzvuhz. jhkh buv kl uvzvayvz klil ayhihqhy whyh zb wyvwph tlqvyh.')  
}


/* Cambio de texto con doble click*/
document.getElementById('hint').ondblclick = function() {changeText()};

function changeText() {
  document.getElementById('hint').innerHTML = '¡HAZLO. Y si te da miedo, hazlo con miedo!';
  document.getElementById('hint').style.color= '#dec10c';
}

  /* Botón de cifrado*/
  document.getElementById('Cifrar').onclick = function() {
  /* Obtenemos mensaje y desplazamiento */
  var move = document.getElementById("Position").value;
  var message = document.getElementById("Youtext").value;
  document.getElementById("Result").value = window.cipher.encode(move,message);
  }

  /* Botón de descifrado*/
  document.getElementById('Descifrar').onclick = function() {
  /* Obtenemos mensaje y desplazamiento */
  var move = document.getElementById("Position").value;
  var message = document.getElementById("Youtext").value;  
  document.getElementById("Result").value = window.cipher.decode(move,message);
  }

}

