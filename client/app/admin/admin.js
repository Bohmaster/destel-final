var myApp = angular.module('myApp', ['ng-admin', 'lbServices']);

myApp.config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
  var nga = NgAdminConfigurationProvider;
  var URL_BASE = "http://localhost:3000/api/";

  // create an admin application
  var admin = nga.application('Destel Administración')
    .baseApiUrl(URL_BASE);

  /**
   * Slider
   */
  var Slider = nga.entity('sliders').label('Sliders');

  Slider.listView().fields([
    nga.field('title').isDetailLink(true).detailLinkRoute("show"),
    nga.field('description'),
    nga.field('image', 'template')
      .label('Imágen')
      .template('<imagen data="image"></imagen')
  ]);

  Slider.showView().fields([
    nga.field('title'),
    nga.field('description'),
    nga.field('image', 'template')
      .label('Imágen')
      .template('<imagen data="image"></imagen')
  ]);

  Slider.creationView().fields([
    nga.field('title', 'text'),
    nga.field('description', 'text'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>')
  ]);

  Slider.editionView().fields([
    nga.field('title', 'text'),
    nga.field('description', 'text'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>')
  ]);

  admin.addEntity(Slider);

  /**
   * Equipo
   */
  var Equipo = nga.entity('equipos').label('Equipos');

  Equipo.listView().fields([
    nga.field('name').isDetailLink(true).detailLinkRoute("show"),
    nga.field('description'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>'),
    nga.field('cuatroG', 'boolean'),
    nga.field('price_cuit'),
    nga.field('price_dni')
  ]);

  Equipo.creationView().fields([
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text'),
    nga.field('particular', 'boolean'),
    nga.field('empresa', 'boolean')
  ]);

  Equipo.editionView().fields([
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text'),
    nga.field('particular', 'boolean'),
    nga.field('empresa', 'boolean')
  ]);

  Equipo.showView().fields([
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text')
  ]);

  admin.addEntity(Equipo);

  /**
   * Destacado
   */

  var Destacado = nga.entity('destacados').label('Destacados');
  var Categoria = nga.entity('Categoria');

  Destacado.listView().fields([
    nga.field('name').isDetailLink(true).detailLinkRoute("show"),
    nga.field('description'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen'),
    nga.field('cuatroG', 'boolean'),
    nga.field('price_cuit'),
    nga.field('price_dni')
  ]);

  Destacado.creationView().fields([
    nga.field('marca', 'text'),
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text'),
    nga.field('iva', 'boolean'),
    nga.field('categoriaId', 'reference')
      .targetEntity(Categoria)
      .targetField(nga.field('nombre'))
      .remoteComplete(true)
      .label('Categoria'),
    nga.field('particular', 'boolean'),
    nga.field('empresa', 'boolean'),
    nga.field('cuadro_1', 'template')
      .label('Cuadro 1')
      .template('<cuadro-uno></cuadro-uno>'),
    nga.field('cuadro_2', 'template')
      .label('Cuadro 2')
      .template('<cuadro-dos></cuadro-dos>'),
    nga.field('cuadro_3', 'template')
      .label('Cuadro 3')
      .template('<cuadro-tres></cuadro-tres>'),
    nga.field('cuadro_4', 'template')
      .label('Cuadro 4')
      .template('<cuadro-cuatro></cuadro-cuatro>')
  ]);

  Destacado.editionView().fields([
    nga.field('marca', 'text'),
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Subir imagen')
      .template('<upload></upload>'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text'),
    nga.field('iva', 'boolean'),
    nga.field('categoriaId', 'reference')
      .targetEntity(Categoria)
      .targetField(nga.field('nombre'))
      .remoteComplete(true)
      .label('Categoria'),
    nga.field('particular', 'boolean'),
    nga.field('empresa', 'boolean'),
    nga.field('cuadro_1', 'template')
      .label('Cuadro 1')
      .template('<cuadro-uno></cuadro-uno>'),
    nga.field('cuadro_2', 'template')
      .label('Cuadro 2')
      .template('<cuadro-dos></cuadro-dos>'),
    nga.field('cuadro_3', 'template')
      .label('Cuadro 3')
      .template('<cuadro-tres></cuadro-tres>'),
    nga.field('cuadro_4', 'template')
      .label('Cuadro 4')
      .template('<cuadro-cuatro></cuadro-cuatro>')
  ]);

  Destacado.showView().fields([
    nga.field('name', 'text'),
    nga.field('description', 'text'),
    nga.field('cuatroG', 'boolean'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>'),
    nga.field('price_cuit', 'text'),
    nga.field('price_dni', 'text'),
    nga.field('cuadro_1', 'template')
      .label('Cuadro 1')
      .template('<imagen data="cuadro_1"></imagen>')
  ]);

  admin.addEntity(Destacado);

  /**
   * Faja
   */

  var Faja = nga.entity('fajas').label('Fajas');

  Faja.showView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>')
  ]);



  Faja.editionView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<upload></upload>')
  ]);

  Faja.listView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>')
  ]);

  admin.addEntity(Faja);

  /**
   * Promocion
   */

  var Promocion = nga.entity('promotions').label('Promociones');

  Promocion.showView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>')
  ]);

  Promocion.creationView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<upload></upload>')
  ]);

  Promocion.editionView().fields([
    nga.field('title', 'text'),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<upload></upload>')
  ]);

  Promocion.listView().fields([
    nga.field('title', 'text').isDetailLink(true).detailLinkRoute("show"),
    nga.field('image', 'template')
      .label('Imagen')
      .template('<imagen data="image"></imagen>')
  ]);

  admin.addEntity(Promocion);

  /**
   * SeccionX
   */

  var Bloque = nga.entity('bloques').label('Bloques');

  admin.addEntity(Bloque);

  var SeccionX = nga.entity('SeccionXes').label('Seccion X');

  SeccionX.listView().fields([
    nga.field('nombre', 'text').isDetailLink(true).detailLinkRoute("show"),
    nga.field('descripcion', 'text'),
    nga.field('bloques', 'referenced_list')
      .targetEntity(Bloque)
      .targetReferenceField('seccionXId')
      .targetFields([
        nga.field('image')
      ])
      .sortField('title')
      .sortDir('DESC')
      .label('Bloques')
  ]);

  SeccionX.creationView().fields([
    nga.field('nombre', 'text'),
    nga.field('descripcion', 'text'),
    nga.field('bloques', 'template')
      .label('Bloques')
      .template('<bloques></bloques>')
  ]);

  SeccionX.editionView().fields([
    nga.field('nombre', 'text'),
    nga.field('descripcion', 'text'),
    nga.field('bloques', 'template')
      .label('Bloques')
      .template('<bloques></bloques>')
  ]);

  SeccionX.showView().fields([
    nga.field('nombre', 'text'),
    nga.field('descripcion', 'text'),
    nga.field('bloques', 'template')
      .label('Bloques')
      .template('<bloques></bloques>')
  ]);

  admin.addEntity(SeccionX);

  // attach the admin application to the DOM and run it
  nga.configure(admin);

}]);
