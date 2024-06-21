var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: "aksesibilitas_univ — union",
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_1.png" /> aksesibilitas_univ — union'
            });
var format_ptn_surabaya_2 = new ol.format.GeoJSON();
var features_ptn_surabaya_2 = format_ptn_surabaya_2.readFeatures(json_ptn_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptn_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptn_surabaya_2.addFeatures(features_ptn_surabaya_2);
var lyr_ptn_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptn_surabaya_2, 
                style: style_ptn_surabaya_2,
                popuplayertitle: "ptn_surabaya",
                interactive: true,
    title: 'ptn_surabaya<br />\
    <img src="styles/legend/ptn_surabaya_2_0.png" /> ITS<br />\
    <img src="styles/legend/ptn_surabaya_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/ptn_surabaya_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/ptn_surabaya_2_3.png" /> UNESA<br />\
    <img src="styles/legend/ptn_surabaya_2_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/ptn_surabaya_2_5.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_ptn_surabaya_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_ptn_surabaya_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_ptn_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'foto': 'foto', 'Deskripsi UnivQS WUR': 'Deskripsi UnivQS WUR', 'Deskripsi UnivDidirikan': 'Deskripsi UnivDidirikan', 'Deskripsi UnivFakultas': 'Deskripsi UnivFakultas', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': '', 'Access': '', });
lyr_ptn_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'foto': 'ExternalResource', 'Deskripsi UnivQS WUR': 'TextEdit', 'Deskripsi UnivDidirikan': 'TextEdit', 'Deskripsi UnivFakultas': 'TextEdit', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_ptn_surabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'foto': 'no label', 'Deskripsi UnivQS WUR': 'inline label - always visible', 'Deskripsi UnivDidirikan': 'header label - always visible', 'Deskripsi UnivFakultas': 'header label - always visible', });
lyr_ptn_surabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});