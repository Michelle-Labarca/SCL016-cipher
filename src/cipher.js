const cipher = {
  /*función para codificar*/
  encode: (move, message) => {
    /*Se pasan las vocales con tildes a solo vocales*/
    message = message.replace("á","a");
    message = message.replace("é","e");
    message = message.replace("í","i");
    message = message.replace("ó","o");
    message = message.replace("ú","u");
    /*Se pasan todas las letras a mayúsculas*/
    message = message.toUpperCase();
    /*Declaro la variable*/
    let new_message = "";
    /*Se recorre el texto caracter por caracter*/
    for (let i = 0; i < message.length; i++) {
      /*Si no es espacio continua*/
      if(!(message[i]== " " || message[i]== "." || message[i]== "?" || message[i]== "," || message[i]== "!" || message[i]== "@")){
        /*Obtenemos codigo ASCII de la letra*/
        let letter_ascii_code = message.charCodeAt(i);
        /*Aplicamos formula*/
        let new_letter_ascii_code = ((letter_ascii_code - 65 + parseInt(move)) % 26) + 65;
        /*Obtenemos letra del nuevo codigo ASCII*/
        let new_letter = String.fromCharCode(new_letter_ascii_code);
        /*Guardamos letra en nuevo mensaje y se van concatenando*/
        new_message = new_message + new_letter;
        }  
        /*Si es espacio concatena el espacio*/
      else {
        new_message = new_message + message[i];
        }
    }
    return new_message;
  },

/*función para decodificar*/
  decode: (move, message) => {
    /*Se pasan las vocales con tildes a solo vocales*/
      message = message.replace("á","a");
      message = message.replace("é","e");
      message = message.replace("í","i");
      message = message.replace("ó","o");
      message = message.replace("ú","u");
    /*Se pasan todas las letras a mayúscula*/
      message = message.toUpperCase();
    /*declaro la variable*/  
    let new_message = "";
    /*Se recorre el texto caracter por caracter*/
    for (let i = 0; i < message.length; i++) {
      /*Si no es espacio o simbolo declarado continua*/
      if(!(message[i]== " " || message[i]== "." || message[i]== "?" || message[i]== "," || message[i]== "!" || message[i]== "@")){
        /*Obtenemos codigo ASCII de la letra*/
        let letter_ascii_code = message.charCodeAt(i);
        /*Aplicamos formula*/
        let new_letter_ascii_code = ((letter_ascii_code + 65 - parseInt(move)) % 26) + 65;
        /*Obtenemos letra del nuevo codigo ASCII*/
        let new_letter = String.fromCharCode(new_letter_ascii_code);
        /*Guardamos la letra en nuevo mensaje y se van concatenando*/
        new_message = new_message + new_letter;
      }
      /*Si es espacio o simbolo concatenalo*/
      else{
        new_message = new_message + message[i];
      }
    }
    return new_message;
    
  }
}
export default cipher;