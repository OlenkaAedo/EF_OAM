var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Aspecto_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aspecto<br />\
    <img src="styles/legend/Aspecto_1_0.png" /> NORTE<br />\
    <img src="styles/legend/Aspecto_1_1.png" /> ESTE<br />\
    <img src="styles/legend/Aspecto_1_2.png" /> SUR<br />\
    <img src="styles/legend/Aspecto_1_3.png" /> OESTE<br />\
    <img src="styles/legend/Aspecto_1_4.png" /> NORTE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Aspecto_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8209780.749912, -1636898.392393, -8119271.802471, -1506584.440990]
        })
    });
var lyr_Pendiente_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_2_0.png" /> 10.0000<br />\
    <img src="styles/legend/Pendiente_2_1.png" /> 20.0000<br />\
    <img src="styles/legend/Pendiente_2_2.png" /> 35.0000<br />\
    <img src="styles/legend/Pendiente_2_3.png" /> 45.0000<br />\
    <img src="styles/legend/Pendiente_2_4.png" /> 55.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendiente_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8209780.749912, -1636898.392393, -8119271.802471, -1506584.440990]
        })
    });
var lyr_Raster_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Raster<br />\
    <img src="styles/legend/Raster_3_0.png" /> 991.0000<br />\
    <img src="styles/legend/Raster_3_1.png" /> 1978.2500<br />\
    <img src="styles/legend/Raster_3_2.png" /> 2965.5000<br />\
    <img src="styles/legend/Raster_3_3.png" /> 3952.7500<br />\
    <img src="styles/legend/Raster_3_4.png" /> 4940.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Raster_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8209780.749912, -1636898.392393, -8119271.802471, -1506584.440990]
        })
    });
var lyr_Sombras_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sombras<br />\
    <img src="styles/legend/Sombras_4_0.png" /> 1<br />\
    <img src="styles/legend/Sombras_4_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sombras_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8209780.749912, -1636898.392393, -8119271.802471, -1506584.440990]
        })
    });
var format_Andahuaylas_5 = new ol.format.GeoJSON();
var features_Andahuaylas_5 = format_Andahuaylas_5.readFeatures(json_Andahuaylas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Andahuaylas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andahuaylas_5.addFeatures(features_Andahuaylas_5);
var lyr_Andahuaylas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Andahuaylas_5, 
                style: style_Andahuaylas_5,
                popuplayertitle: 'Andahuaylas',
                interactive: false,
                title: '<img src="styles/legend/Andahuaylas_5.png" /> Andahuaylas'
            });
var format_Departamentos_6 = new ol.format.GeoJSON();
var features_Departamentos_6 = format_Departamentos_6.readFeatures(json_Departamentos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_6.addFeatures(features_Departamentos_6);
var lyr_Departamentos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_6, 
                style: style_Departamentos_6,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_6.png" /> Departamentos'
            });
var format_DistritosdeAndahuaylas_7 = new ol.format.GeoJSON();
var features_DistritosdeAndahuaylas_7 = format_DistritosdeAndahuaylas_7.readFeatures(json_DistritosdeAndahuaylas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosdeAndahuaylas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosdeAndahuaylas_7.addFeatures(features_DistritosdeAndahuaylas_7);
var lyr_DistritosdeAndahuaylas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosdeAndahuaylas_7, 
                style: style_DistritosdeAndahuaylas_7,
                popuplayertitle: 'Distritos de Andahuaylas',
                interactive: true,
                title: '<img src="styles/legend/DistritosdeAndahuaylas_7.png" /> Distritos de Andahuaylas'
            });
var format_ProvinciasdeApurimac_8 = new ol.format.GeoJSON();
var features_ProvinciasdeApurimac_8 = format_ProvinciasdeApurimac_8.readFeatures(json_ProvinciasdeApurimac_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasdeApurimac_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasdeApurimac_8.addFeatures(features_ProvinciasdeApurimac_8);
var lyr_ProvinciasdeApurimac_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciasdeApurimac_8, 
                style: style_ProvinciasdeApurimac_8,
                popuplayertitle: 'Provincias de Apurimac',
                interactive: false,
                title: '<img src="styles/legend/ProvinciasdeApurimac_8.png" /> Provincias de Apurimac'
            });
var format_CurvasdeNivel_9 = new ol.format.GeoJSON();
var features_CurvasdeNivel_9 = format_CurvasdeNivel_9.readFeatures(json_CurvasdeNivel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNivel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNivel_9.addFeatures(features_CurvasdeNivel_9);
var lyr_CurvasdeNivel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNivel_9, 
                style: style_CurvasdeNivel_9,
                popuplayertitle: 'Curvas de Nivel',
                interactive: false,
                title: '<img src="styles/legend/CurvasdeNivel_9.png" /> Curvas de Nivel'
            });
var format_InstitucionesEducativasdeAndahuaylas_10 = new ol.format.GeoJSON();
var features_InstitucionesEducativasdeAndahuaylas_10 = format_InstitucionesEducativasdeAndahuaylas_10.readFeatures(json_InstitucionesEducativasdeAndahuaylas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionesEducativasdeAndahuaylas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionesEducativasdeAndahuaylas_10.addFeatures(features_InstitucionesEducativasdeAndahuaylas_10);
var lyr_InstitucionesEducativasdeAndahuaylas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionesEducativasdeAndahuaylas_10, 
                style: style_InstitucionesEducativasdeAndahuaylas_10,
                popuplayertitle: 'Instituciones Educativas de Andahuaylas',
                interactive: true,
    title: 'Instituciones Educativas de Andahuaylas<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_0.png" /> Basica Alternativa - Avanzado<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_1.png" /> Basica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_2.png" /> Basica Especial - Inicial<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_3.png" /> Basica Especial - Primaria<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_4.png" /> Basica Especial - PRITE<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_5.png" /> Escuela Superior Pedagogica<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_6.png" /> Inicial - Cuna Jardin<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_7.png" /> Inicial - Jardin<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_8.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_9.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_10.png" /> Primaria<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_11.png" /> Secundaria<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_12.png" /> Superior Tecnologica<br />\
    <img src="styles/legend/InstitucionesEducativasdeAndahuaylas_10_13.png" /> Tecnico Productiva - CETPRO<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Aspecto_1.setVisible(true);lyr_Pendiente_2.setVisible(true);lyr_Raster_3.setVisible(true);lyr_Sombras_4.setVisible(true);lyr_Andahuaylas_5.setVisible(true);lyr_Departamentos_6.setVisible(true);lyr_DistritosdeAndahuaylas_7.setVisible(true);lyr_ProvinciasdeApurimac_8.setVisible(true);lyr_CurvasdeNivel_9.setVisible(true);lyr_InstitucionesEducativasdeAndahuaylas_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Aspecto_1,lyr_Pendiente_2,lyr_Raster_3,lyr_Sombras_4,lyr_Andahuaylas_5,lyr_Departamentos_6,lyr_DistritosdeAndahuaylas_7,lyr_ProvinciasdeApurimac_8,lyr_CurvasdeNivel_9,lyr_InstitucionesEducativasdeAndahuaylas_10];
lyr_Andahuaylas_5.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_Departamentos_6.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_DistritosdeAndahuaylas_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'ID', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'DISTRITO', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'Imagenes ': 'Imágenes', 'Descripcion': 'Descripción', });
lyr_ProvinciasdeApurimac_8.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_CurvasdeNivel_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_InstitucionesEducativasdeAndahuaylas_10.set('fieldAliases', {'fid': 'fid', 'C�digo M': 'C�digo M', 'Anexo': 'Anexo', 'Nombre de': 'Nombre de', 'Ubigeo': 'Ubigeo', 'Departamen': 'Departamen', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'C�digo D': 'C�digo D', 'DRE / UGEL': 'DRE / UGEL', 'Centro Pob': 'Centro Pob', 'C�digo C': 'C�digo C', 'C�digo L': 'C�digo L', 'Direcci�': 'Direcci�', 'Nivel / Mo': 'Nivel / Mo', 'Gestion /': 'Gestion /', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de': 'Fuente de', });
lyr_Andahuaylas_5.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', });
lyr_Departamentos_6.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_DistritosdeAndahuaylas_7.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'IDDIST': 'TextEdit', 'IDDPTO': 'Hidden', 'IDPROV': 'Hidden', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'Hidden', 'NOMBDEP': 'Hidden', 'DCTO': 'Hidden', 'LEY': 'Hidden', 'FECHA': 'Hidden', 'NOM_CAP': 'Hidden', 'SHAPE_LENG': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LE_1': 'Hidden', 'SHAPE_AR_1': 'Hidden', 'AREA_MINAM': 'Hidden', 'Imagenes ': 'ExternalResource', 'Descripcion': 'TextEdit', });
lyr_ProvinciasdeApurimac_8.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', });
lyr_CurvasdeNivel_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_InstitucionesEducativasdeAndahuaylas_10.set('fieldImages', {'fid': 'Hidden', 'C�digo M': 'Hidden', 'Anexo': 'Hidden', 'Nombre de': 'Hidden', 'Ubigeo': 'Hidden', 'Departamen': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'C�digo D': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Pob': 'Hidden', 'C�digo C': 'Hidden', 'C�digo L': 'Hidden', 'Direcci�': 'Hidden', 'Nivel / Mo': 'TextEdit', 'Gestion /': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Altitud': 'Hidden', 'Fuente de': 'Hidden', });
lyr_Andahuaylas_5.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_Departamentos_6.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_DistritosdeAndahuaylas_7.set('fieldLabels', {'IDDIST': 'header label - always visible', 'NOMBDIST': 'header label - always visible', 'Imagenes ': 'header label - always visible', 'Descripcion': 'header label - always visible', });
lyr_ProvinciasdeApurimac_8.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_CurvasdeNivel_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_InstitucionesEducativasdeAndahuaylas_10.set('fieldLabels', {'Nivel / Mo': 'no label', });
lyr_InstitucionesEducativasdeAndahuaylas_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});