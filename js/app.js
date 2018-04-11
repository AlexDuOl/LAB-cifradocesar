//Obteniendo la frase a decifrar
var phrase = prompt("Ingresa una frase **Recuerda ingresar solo letras**");

//Creando función para verificar que el usuario no ingrese un campo vacío
function validateInput(phrase){
  while(phrase == ""){
    phrase = prompt("Ingresa una frase **Recuerda ingresar solo letras**");
  }
 }

//Creando función cipher y aplicando el cifrado césar
function cipher(phrase){
  var phraseCipher = ""; //Variable que contendrá la frase cifrada
  for(var i=0; i<phrase.length; i++) { //iterando en la frase
    var numAscii = ((phrase.charCodeAt(i) - 65 + 33) % 26) + 65; //Aplicación de fomula del cifrado César desde la posición en el código ASCII del indice, recorriendo 33 lugares
    var newLetter = String.fromCharCode(numAscii);//Cambiando elindice ASCII por letra correspondiente
    phraseCipher += newLetter //Colocando la letra en la variable
   }
   return phraseCipher;
}

var phraseCipher1 = cipher(phrase);
//Creando función descipher y aplicando el cifrado césar
 function desCipher(phraseCipher1){
     var phraseDescipher = "";//Variable que contendrá la frase descifrada
     for(var a=0; a<phraseCipher1.length; a++) { //Iterando en frase cifrada
       var numAsciiDescipher = ((phraseCipher1.charCodeAt(a) + 65 - 33) % 26) + 65; //Aplicación de fomula del cifrado César desde la posición en el código ASCII del indice, recorriendo 33 lugares
       var newLetterDescipher = String.fromCharCode(numAsciiDescipher);//Cambiando elindice ASCII por letra correspondiente
       phraseDescipher += newLetterDescipher //Colocando la letra en la variable
      }
      return phraseDescipher;
    }

document.write(cipher(phrase))
document.write(desCipher(phraseCipher1));
