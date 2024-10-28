ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8339825.645428, 1302923.200883, 8480493.986880, 1385108.293695]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_clip_GEOMORPHOLOGY_1 = new ol.format.GeoJSON();
var features_clip_GEOMORPHOLOGY_1 = format_clip_GEOMORPHOLOGY_1.readFeatures(json_clip_GEOMORPHOLOGY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_GEOMORPHOLOGY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_GEOMORPHOLOGY_1.addFeatures(features_clip_GEOMORPHOLOGY_1);
var lyr_clip_GEOMORPHOLOGY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_GEOMORPHOLOGY_1, 
                style: style_clip_GEOMORPHOLOGY_1,
                popuplayertitle: "clip_GEOMORPHOLOGY",
                interactive: true,
    title: 'clip_GEOMORPHOLOGY<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_1.png" /> Coatal Plain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_2.png" /> Denudational Hills<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_3.png" /> Denudational Strctural Hills<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_4.png" /> Flood Plain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_5.png" /> Lower Plateau (Lateritic)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_6.png" /> Lower Plateau(Lateritic)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_7.png" /> Marshy<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_8.png" /> Pediplain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_9.png" /> Pediplain Weathered/buried<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_10.png" /> Piedmont Zone<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_11.png" /> Residual Hill<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_12.png" /> Rock Exposure<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_13.png" /> Water Body<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_1_14.png" /> <br />'
        });
var format_kannur_2 = new ol.format.GeoJSON();
var features_kannur_2 = format_kannur_2.readFeatures(json_kannur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kannur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kannur_2.addFeatures(features_kannur_2);
var lyr_kannur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kannur_2, 
                style: style_kannur_2,
                popuplayertitle: "kannur",
                interactive: false,
                title: '<img src="styles/legend/kannur_2.png" /> kannur'
            });
var format_DRAINAGE_3 = new ol.format.GeoJSON();
var features_DRAINAGE_3 = format_DRAINAGE_3.readFeatures(json_DRAINAGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_3.addFeatures(features_DRAINAGE_3);
var lyr_DRAINAGE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_3, 
                style: style_DRAINAGE_3,
                popuplayertitle: "DRAINAGE",
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_3.png" /> DRAINAGE'
            });
var format_RAILWAY_4 = new ol.format.GeoJSON();
var features_RAILWAY_4 = format_RAILWAY_4.readFeatures(json_RAILWAY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAY_4.addFeatures(features_RAILWAY_4);
var lyr_RAILWAY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAY_4, 
                style: style_RAILWAY_4,
                popuplayertitle: "RAILWAY",
                interactive: false,
                title: '<img src="styles/legend/RAILWAY_4.png" /> RAILWAY'
            });
var format_ROAD_5 = new ol.format.GeoJSON();
var features_ROAD_5 = format_ROAD_5.readFeatures(json_ROAD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_5.addFeatures(features_ROAD_5);
var lyr_ROAD_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_5, 
                style: style_ROAD_5,
                popuplayertitle: "ROAD",
                interactive: false,
                title: '<img src="styles/legend/ROAD_5.png" /> ROAD'
            });
var format_JUNCTION_6 = new ol.format.GeoJSON();
var features_JUNCTION_6 = format_JUNCTION_6.readFeatures(json_JUNCTION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUNCTION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNCTION_6.addFeatures(features_JUNCTION_6);
var lyr_JUNCTION_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNCTION_6, 
                style: style_JUNCTION_6,
                popuplayertitle: "JUNCTION",
                interactive: false,
                title: '<img src="styles/legend/JUNCTION_6.png" /> JUNCTION'
            });
var format_PLACES_7 = new ol.format.GeoJSON();
var features_PLACES_7 = format_PLACES_7.readFeatures(json_PLACES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLACES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLACES_7.addFeatures(features_PLACES_7);
var lyr_PLACES_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLACES_7, 
                style: style_PLACES_7,
                popuplayertitle: "PLACES",
                interactive: true,
                title: '<img src="styles/legend/PLACES_7.png" /> PLACES'
            });

lyr_OSMStandard_0.setVisible(true);lyr_clip_GEOMORPHOLOGY_1.setVisible(true);lyr_kannur_2.setVisible(true);lyr_DRAINAGE_3.setVisible(true);lyr_RAILWAY_4.setVisible(true);lyr_ROAD_5.setVisible(true);lyr_JUNCTION_6.setVisible(true);lyr_PLACES_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_clip_GEOMORPHOLOGY_1,lyr_kannur_2,lyr_DRAINAGE_3,lyr_RAILWAY_4,lyr_ROAD_5,lyr_JUNCTION_6,lyr_PLACES_7];
lyr_clip_GEOMORPHOLOGY_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_kannur_2.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_kn': 'name_kn', 'name_ml': 'name_ml', 'name_ta': 'name_ta', 'official_n': 'official_n', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_DRAINAGE_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_RAILWAY_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_ROAD_5.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_JUNCTION_6.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_PLACES_7.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'IMAGE': 'IMAGE', });
lyr_clip_GEOMORPHOLOGY_1.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_kannur_2.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_kn': 'TextEdit', 'name_ml': 'TextEdit', 'name_ta': 'TextEdit', 'official_n': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_DRAINAGE_3.set('fieldImages', {'ORDER1': 'Range', });
lyr_RAILWAY_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_ROAD_5.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_JUNCTION_6.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_PLACES_7.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'IMAGE': 'ExternalResource', });
lyr_clip_GEOMORPHOLOGY_1.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_kannur_2.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'name': 'no label', 'name_kn': 'no label', 'name_ml': 'no label', 'name_ta': 'no label', 'official_n': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_DRAINAGE_3.set('fieldLabels', {'ORDER1': 'no label', });
lyr_RAILWAY_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_ROAD_5.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_JUNCTION_6.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_PLACES_7.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'IMAGE': 'no label', });
lyr_PLACES_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});