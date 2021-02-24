import cipher from './cipher.js';

console.log(cipher);

/*Imagen alert con doble click */
document.getElementById('myImg').ondblclick = function() { alert
('Qs tyihiw iwtivev gsqwxvymv yq pyqhs pinsv wmq pinsvev e oew tivwsqew. Gehe yqs hi qswsxvsw hifi xvefenev teve wy tvstme pinsve.')  
}


/* Cambio de texto con doble click*/
document.getElementById('hint').ondblclick = function() {changeText()};

function changeText() {
  document.getElementById('hint').innerHTML = '¡HAZLO. Y si te da miedo, hazlo con miedo!';
  document.getElementById('hint').style.color= '#dec10c';
}
