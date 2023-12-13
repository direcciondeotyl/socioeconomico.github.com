ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32720").setExtent([-22299.543368, 7717607.885070, 1412896.064568, 8528722.424130]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CENSO_2012_SC_WGS84_z20s_1 = new ol.format.GeoJSON();
var features_CENSO_2012_SC_WGS84_z20s_1 = format_CENSO_2012_SC_WGS84_z20s_1.readFeatures(json_CENSO_2012_SC_WGS84_z20s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_CENSO_2012_SC_WGS84_z20s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENSO_2012_SC_WGS84_z20s_1.addFeatures(features_CENSO_2012_SC_WGS84_z20s_1);
var lyr_CENSO_2012_SC_WGS84_z20s_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENSO_2012_SC_WGS84_z20s_1, 
                style: style_CENSO_2012_SC_WGS84_z20s_1,
                interactive: false,
                title: '<img src="styles/legend/CENSO_2012_SC_WGS84_z20s_1.png" /> CENSO_2012_SC_WGS84_z20s'
            });
var format_SALUD_SC_WGS84_2 = new ol.format.GeoJSON();
var features_SALUD_SC_WGS84_2 = format_SALUD_SC_WGS84_2.readFeatures(json_SALUD_SC_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_SALUD_SC_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALUD_SC_WGS84_2.addFeatures(features_SALUD_SC_WGS84_2);
var lyr_SALUD_SC_WGS84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALUD_SC_WGS84_2, 
                style: style_SALUD_SC_WGS84_2,
                interactive: false,
    title: 'SALUD_SC_WGS84<br />\
    <img src="styles/legend/SALUD_SC_WGS84_2_0.png" /> 1er NIVEL<br />\
    <img src="styles/legend/SALUD_SC_WGS84_2_1.png" /> 2do NIVEL<br />\
    <img src="styles/legend/SALUD_SC_WGS84_2_2.png" /> 3er NIVEL<br />'
        });
var format_EDUCACION_SC_WGS84_z20s_3 = new ol.format.GeoJSON();
var features_EDUCACION_SC_WGS84_z20s_3 = format_EDUCACION_SC_WGS84_z20s_3.readFeatures(json_EDUCACION_SC_WGS84_z20s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_EDUCACION_SC_WGS84_z20s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDUCACION_SC_WGS84_z20s_3.addFeatures(features_EDUCACION_SC_WGS84_z20s_3);
var lyr_EDUCACION_SC_WGS84_z20s_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EDUCACION_SC_WGS84_z20s_3, 
                style: style_EDUCACION_SC_WGS84_z20s_3,
                interactive: false,
                title: '<img src="styles/legend/EDUCACION_SC_WGS84_z20s_3.png" /> EDUCACION_SC_WGS84_z20s'
            });
var format_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4 = new ol.format.GeoJSON();
var features_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4 = format_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.readFeatures(json_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.addFeatures(features_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4);
var lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4, 
                style: style_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4,
                interactive: false,
                title: '<img src="styles/legend/RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.png" /> RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s'
            });
var format_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.format.GeoJSON();
var features_MUNICIPIOS_SC_WGS84_z20s_5 = format_MUNICIPIOS_SC_WGS84_z20s_5.readFeatures(json_MUNICIPIOS_SC_WGS84_z20s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_SC_WGS84_z20s_5.addFeatures(features_MUNICIPIOS_SC_WGS84_z20s_5);
var lyr_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_SC_WGS84_z20s_5, 
                style: style_MUNICIPIOS_SC_WGS84_z20s_5,
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_SC_WGS84_z20s_5.png" /> MUNICIPIOS_SC_WGS84_z20s'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CENSO_2012_SC_WGS84_z20s_1.setVisible(true);lyr_SALUD_SC_WGS84_2.setVisible(true);lyr_EDUCACION_SC_WGS84_z20s_3.setVisible(true);lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.setVisible(true);lyr_MUNICIPIOS_SC_WGS84_z20s_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CENSO_2012_SC_WGS84_z20s_1,lyr_SALUD_SC_WGS84_2,lyr_EDUCACION_SC_WGS84_z20s_3,lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4,lyr_MUNICIPIOS_SC_WGS84_z20s_5];
lyr_CENSO_2012_SC_WGS84_z20s_1.set('fieldAliases', {'gid': 'gid', 'mun_estadi': 'mun_estadi', 'nom_comuni': 'nom_comuni', 'codine': 'codine', 'poblacion': 'poblacion', });
lyr_SALUD_SC_WGS84_2.set('fieldAliases', {'ID': 'ID', 'CODSNIS': 'CODSNIS', 'NIVELRES': 'NIVELRES', 'TIPOEST': 'TIPOEST', 'SUBSECTOR': 'SUBSECTOR', 'REDSALUD': 'REDSALUD', 'NOMNUEVO': 'NOMNUEVO', });
lyr_EDUCACION_SC_WGS84_z20s_3.set('fieldAliases', {'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'COD_EDIF_E': 'COD_EDIF_E', 'CODIGO_UE': 'CODIGO_UE', 'UNIDAD_EDU': 'UNIDAD_EDU', });
lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.set('fieldAliases', {'Ruta': 'Ruta', 'Descripcio': 'Descripcio', 'NAME': 'NAME', 'SHAPE_Leng': 'SHAPE_Leng', 'Dist_Km': 'Dist_Km', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'MUN_TIOC': 'MUN_TIOC', });
lyr_CENSO_2012_SC_WGS84_z20s_1.set('fieldImages', {'gid': 'TextEdit', 'mun_estadi': 'TextEdit', 'nom_comuni': 'TextEdit', 'codine': 'TextEdit', 'poblacion': 'TextEdit', });
lyr_SALUD_SC_WGS84_2.set('fieldImages', {'ID': 'TextEdit', 'CODSNIS': 'TextEdit', 'NIVELRES': 'TextEdit', 'TIPOEST': 'TextEdit', 'SUBSECTOR': 'TextEdit', 'REDSALUD': 'TextEdit', 'NOMNUEVO': 'TextEdit', });
lyr_EDUCACION_SC_WGS84_z20s_3.set('fieldImages', {'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'COD_EDIF_E': 'TextEdit', 'CODIGO_UE': 'TextEdit', 'UNIDAD_EDU': 'TextEdit', });
lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.set('fieldImages', {'Ruta': 'TextEdit', 'Descripcio': 'TextEdit', 'NAME': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Dist_Km': 'TextEdit', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_CENSO_2012_SC_WGS84_z20s_1.set('fieldLabels', {'gid': 'no label', 'mun_estadi': 'no label', 'nom_comuni': 'no label', 'codine': 'no label', 'poblacion': 'no label', });
lyr_SALUD_SC_WGS84_2.set('fieldLabels', {'ID': 'no label', 'CODSNIS': 'header label', 'NIVELRES': 'no label', 'TIPOEST': 'no label', 'SUBSECTOR': 'no label', 'REDSALUD': 'header label', 'NOMNUEVO': 'no label', });
lyr_EDUCACION_SC_WGS84_z20s_3.set('fieldLabels', {'DISTRITO': 'no label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'COD_EDIF_E': 'no label', 'CODIGO_UE': 'no label', 'UNIDAD_EDU': 'no label', });
lyr_RED_VIAL_FUNDAMENTAL_SC_WGS84_z20s_4.set('fieldLabels', {'Ruta': 'no label', 'Descripcio': 'no label', 'NAME': 'no label', 'SHAPE_Leng': 'no label', 'Dist_Km': 'no label', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldLabels', {'OBJECTID': 'no label', 'LEY_MUN': 'no label', 'F_LEY_MUN': 'no label', 'COD_MUN': 'no label', 'MUN_TIOC': 'no label', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});