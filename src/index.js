/*import cipher from './cipher.js';

console.log(cipher);*/

document.getElementById('hint').onclick = function() {changeText()};

function changeText() {
  document.getElementById('hint').innerHTML = '¡HAZLO. Y si te da miedo, hazlo con miedo!';
  document.getElementById('hint').style.color= '#f6f600';
}