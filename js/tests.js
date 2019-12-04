var expect = chai.expect;

describe('Tests de mi libreria', () => {
  var archivo1 = new Archivo('elnombre', '.jpg', true);
  var archivo2 = new Archivo('elnombredemiarchivoahoraesunpoquitomaslargo', '.jpg', false);
  var archivo3 = new Archivo('imagen','.png', true);
  var archivo4 = new Archivo('documento','.pdf', true);
  var archivo5 = new Archivo('musica','.mp3', false);
  var archivo6 = new Archivo('arte','.png', false);

  describe('Tests de abrirArchivos', () => {
    it('Todos los archivos enviados deben estar abiertos', () => {
      var listaDeArchivos = [
        archivo1,
        archivo2
      ];
      abrirArchivos(listaDeArchivos);
      expect(archivo1.abierto).to.be.true;
      expect(archivo2.abierto).to.be.true;
      expect(archivo3.abierto).to.be.false;
    });
  });

  describe('Tests de archivosComprimidos', () => {
    it('Devuelve solo los archivos comprimidos', () => {
      var listaDeArchivos = [
        archivo1,
        archivo2,
        archivo3,
        archivo4,
        archivo5,
        archivo6
      ];
      expect(archivosComprimidos(listaDeArchivos)).to.be.eql([archivo1, archivo3, archivo4]);
    });
  });

  describe('Tests de listadoCompleto', () => {
    it('Devuelve un listado de archivos con todos sus modificadores', () => {
      var listaDeArchivos = [
        archivo1,
        archivo3,
        archivo5
      ];

      expect(listadoCompleto(listaDeArchivos)).to.be.eql([
        '[C] (A) elnombre.jpg',
        '[C] (-) imagen.png',
        '[NC] (-) musica.mp3'
      ])
    });
  });

  describe('Tests de achicarNombreDeArchivo', () => {
    it('Devuelve el mismo nombre de archivo si es menor a la longitudMaxima', () => {
      expect(achicarNombreDeArchivo(archivo1, 20, 4)).to.be.equal('elnombre.jpg');
    });

    it('Devuelve el nombre de archivo con ... luego de 5 caracteres si el nombre es mayor a la longitudMaxima', () => {
      expect(achicarNombreDeArchivo(archivo2, 20, 5)).to.be.equal('elnom...maslargo.jpg');
    });

    it('Devuelve el nombre de archivo con ... al principio si el nombre es mayor a la longitudMaxima', () => {
      expect(achicarNombreDeArchivo(archivo2, 20, 0)).to.be.equal('...quitomaslargo.jpg');
    });

    it('Devuelve el nombre de archivo con ... al final si el nombre es mayor a la longitudMaxima', () => {
      expect(achicarNombreDeArchivo(archivo2, 20, 17)).to.be.equal('elnombredemiarchi...');
    });
  });

  describe('Tests de primeraImagen', () => {
    it('Devuelve el primer item si es un .png', () => {
      var listaDeArchivos = [
        archivo3,
        archivo4,
        archivo5
      ];
      expect(primeraImagen(listaDeArchivos)).to.be.eql(archivo3);
    });

    it('Devuelve el segundo item si es un .png', () => {
      var listaDeArchivos = [
        archivo4,
        archivo3,
        archivo5
      ];
      expect(primeraImagen(listaDeArchivos)).to.be.eql(archivo3);
    });

    it('Devuelve el ultimo item si es un .png', () => {
      var listaDeArchivos = [
        archivo4,
        archivo5,
        archivo3
      ];
      expect(primeraImagen(listaDeArchivos)).to.be.eql(archivo3);
    });

    it('Devuelve la primer imagen a pesar de que haya varias', () => {
      var listaDeArchivos = [
        archivo4,
        archivo6,
        archivo3
      ];
      expect(primeraImagen(listaDeArchivos)).to.be.eql(archivo6);
    });
  });
});
