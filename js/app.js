// Refactorizar las siguientes funciones a la minima expresion utilizando arrow funtions y los metodos de arrays propuestos debajo
// Nota: LOS TESTS DEBEN SEGUIR FUNCIONANDO!
// filter https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
// find https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find
// foreach https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach
// map https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
// splice https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice

class Archivo {
  constructor(nombre, extension, comprimido) {
    this.nombre = nombre;
    this.extension = extension;
    this.comprimido = comprimido;
    this.abierto = false;
  }

  nombreDeArchivo() {
    return this.nombre + this.extension;
  }

  abrirArchivo() {
    this.abierto = true;
  }

  isComprimido() {
    return this.comprimido;
  }
}

var abrirArchivos = function(listaDeArchivos) {
  var archivos = listaDeArchivos;
  for(var i = 0; i < archivos.length; i++) {
    var item = archivos[i];
    item.abrirArchivo();
  }
}

var archivosComprimidos = function(listaDeArchivos) {
  var archivos = listaDeArchivos;
  var comprimidos = [];
  var indexComprimidos = 0;
  var noComprimidos = [];
  var indexNoComprimidos = 0;
  for(var i = 0; i < archivos.length; i++) {
    var archivo = archivos[i];
    
    if (archivo.isComprimido()) {
      comprimidos[indexComprimidos] = archivo;
      indexComprimidos++;
    } else {
      noComprimidos[indexNoComprimidos] = archivo;
      indexNoComprimidos++;
    }
  }

  return comprimidos;
}

var listadoCompleto = function(listaDeArchivos) {
  var archivos = listaDeArchivos;
  var archivosCompletos = [];
  var index = 0;
  for(var i = 0; i < archivos.length; i++) {
    var archivo = archivos[i];
    var archivoCompleto = '';
    if (archivo.isComprimido()) {
      archivoCompleto = '[C]';
    } else {
      archivoCompleto = '[NC]';
    }

    if (archivo.abierto) {
      archivoCompleto += ' (A)';
    } else {
      archivoCompleto += ' (-)';
    }

    archivoCompleto += ' ' + archivo.nombreDeArchivo();

    archivosCompletos[index] = archivoCompleto;
    index++;
  }

  return archivosCompletos;
}

var achicarNombreDeArchivo = function(archivo, longitudMaxima, caracteresAlPrincipio) {
  var resultado = [];

  if (archivo.nombreDeArchivo().length <= longitudMaxima){
    var arrayDeCaracteres = archivo.nombreDeArchivo().split('');
    resultado = arrayDeCaracteres;
  } else if (archivo.nombreDeArchivo().length > longitudMaxima) {
    var cantidadSobrante = archivo.nombreDeArchivo().length - longitudMaxima + 3;
    var arrayDeCaracteres = archivo.nombreDeArchivo().split('');
    for(var i = 0; i < caracteresAlPrincipio; i++) {
      resultado.push(arrayDeCaracteres[i]);
    }
    resultado.push('.');
    resultado.push('.');
    resultado.push('.');
    for(var i = caracteresAlPrincipio + cantidadSobrante; i < archivo.nombreDeArchivo().length; i++) {
      resultado.push(arrayDeCaracteres[i]);
    }
  }
  
  return resultado.join('');
};

var primeraImagen = function(listaDeArchivos) {
  var listaDeImagenes = listaDeArchivos;
  var imagen = null;
  var index = 0;

  while(imagen == null && index < listaDeImagenes.length) {
    var archivo = listaDeImagenes[index];
    if (archivo.extension === '.png') {
      imagen = archivo;
    }

    index += 1;
  }

  return imagen;
}
