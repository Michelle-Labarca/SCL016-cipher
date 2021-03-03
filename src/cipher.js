window.cipher = {
  /*función para codificar*/
  encode: (move, message) => {
    /*Se pasa todo a mayúscula*/
    message = message.toUpperCase();
    var new_message = "";
    /*Se recorre el texto caracter por caracter*/
    for (var i = 0; i < message.length; i++) {
      /*Si no es espacio continua*/
      if(!(message[i]== " ")){
        /*Obtenemos codigo ASCII de la letra*/
        var letter_ascii_code = message.charCodeAt(i);
        /*Aplicamos formula*/
        var new_letter_ascii_code = ((letter_ascii_code - 65 + parseInt(move)) % 26) + 65;
        /*Obtenemos letra del nuevo codigo ASCII*/
        var new_letter = String.fromCharCode(new_letter_ascii_code);
        /*Guardamos letra en nuevo mensaje y se van concatenando*/
        new_message = new_message + new_letter;
      }
      /*Si es espacio concatena el espacio*/
      else{
        new_message = new_message + " ";
      }
    }
    return new_message;
  },

/*función para decodificar*/
  decode: (move, message) => {

    message = message.toUpperCase();
    var new_message = "";
    
    for (var i = 0; i < message.length; i++) {
      if(!(message[i]== " ")){
        var letter_ascii_code = message.charCodeAt(i);
        var new_letter_ascii_code = ((letter_ascii_code + 65 - parseInt(move)) % 26) + 65;
        var new_letter = String.fromCharCode(new_letter_ascii_code);
        new_message = new_message + new_letter;
      }else{
        new_message = new_message + " ";
      }
    }
    return new_message;
    
  }
}