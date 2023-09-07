const analyzer = {
  getWordCount: (text) => {
    const palabra = text.trim().split(/\s+/);
    return palabra.length
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const sinespacio = text;
    const sinpuntuacion = sinespacio.replace(/[.,¿?¡!%&;:¨´{}=\-_`~()\s]/g, "");
    return sinpuntuacion.length

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabra = text.trim().split(/\s+/);
    let totalLength = 0;
    for (let i = 0; i < palabra.length; i++)
      totalLength += palabra[i].length;
    const respuesta = totalLength / palabra.length
    return parseFloat(respuesta.toFixed(2))
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const arrSinEspacios = text.trim().split(/\s+/);
    let cantidadNumeros = 0;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if (!isNaN(arrSinEspacios[i])) {
        cantidadNumeros ++
      } 
    }
    return cantidadNumeros
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const arrSinEspacios = text.trim().split(/\s+/);
    let numerosuma = 0;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      const numero = parseFloat(arrSinEspacios[i]);
      if (!isNaN(arrSinEspacios[i])) {
        numerosuma = numerosuma + numero
      } 
    }
    return numerosuma
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
