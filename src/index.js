import analyzer from './analyzer.js';



const button = document.getElementById("resetButton");
const cuadrodetexto = document.querySelector("textarea[name=user-input]")
const uno = "Palabras: "
const dos = "Caracteres: "
const tres = "Caracteres sin espacio: "
const cuatro = "Promedio longitud: "
const cinco= "Números: "
const seis= "Suma de números: "

/*button.addEventListener("click", () => {
  cuadrodetexto.value = "";
  lipalabras.textContent = uno+"0";
  licaracteres.textContent = dos + "0";
  licaracteresespacio.textContent = tres + "0";
  lipromedio.textContent = cuatro + "0";
  linumero.textContent = cinco + "0";
  lisuma.textContent = seis + "0";
});*/

function Limpiar() {
  cuadrodetexto.value = "";
  lipalabras.textContent = uno+"0";
  licaracteres.textContent = dos + "0";
  licaracteresespacio.textContent = tres + "0";
  lipromedio.textContent = cuatro + "0";
  linumero.textContent = cinco + "0";
  lisuma.textContent = seis + "0";
}

button.addEventListener("click", Limpiar);

const lipalabras = document.querySelector("li[data-testid='word-count']" )
const licaracteres = document.querySelector("li[data-testid='character-count'] " )
const licaracteresespacio = document.querySelector("li[data-testid='character-no-spaces-count'] " )	
const lipromedio = document.querySelector ("li[data-testid='word-length-average'] " )	
const linumero = document.querySelector ("li[data-testid='number-count'] " )	
const lisuma = document.querySelector ("li[data-testid='number-sum'] " )	


function count(){
  //función getWordCount
  const resultado1 = analyzer.getWordCount(cuadrodetexto.value) 
  lipalabras.textContent =  uno + resultado1;

  //función getCharacterCount      
  const resultado2 = analyzer.getCharacterCount(cuadrodetexto.value) 
  licaracteres.textContent = dos + resultado2;

  //función  getCharacterCountExcludingSpaces:
  const resultado3 = analyzer.getCharacterCountExcludingSpaces(cuadrodetexto.value)
  licaracteresespacio.textContent = tres + resultado3;

  //función  getAverageWordLength:
  const resultado4 = analyzer.getAverageWordLength(cuadrodetexto.value)
  lipromedio.textContent = cuatro + resultado4;

  //función getNumberCount:
  const resultado5 = analyzer.getNumberCount(cuadrodetexto.value)
  linumero.textContent = cinco + resultado5;

  //función getNumberSum:
  const resultado6 = analyzer.getNumberSum(cuadrodetexto.value)
  lisuma.textContent = seis + resultado6;

}

		
cuadrodetexto.addEventListener("keyup", count);