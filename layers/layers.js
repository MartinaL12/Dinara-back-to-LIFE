var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_3_PP_Dinara_HTRS_Ls_v1_1 = new ol.format.GeoJSON();
var features_3_PP_Dinara_HTRS_Ls_v1_1 = format_3_PP_Dinara_HTRS_Ls_v1_1.readFeatures(json_3_PP_Dinara_HTRS_Ls_v1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_PP_Dinara_HTRS_Ls_v1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_PP_Dinara_HTRS_Ls_v1_1.addFeatures(features_3_PP_Dinara_HTRS_Ls_v1_1);
var lyr_3_PP_Dinara_HTRS_Ls_v1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_PP_Dinara_HTRS_Ls_v1_1, 
                style: style_3_PP_Dinara_HTRS_Ls_v1_1,
                interactive: true,
                title: '<img src="styles/legend/3_PP_Dinara_HTRS_Ls_v1_1.png" /> 3_PP_Dinara_HTRS_Ls_v1'
            });
var format_1_Project_area_HTRS_Ls_v1_2 = new ol.format.GeoJSON();
var features_1_Project_area_HTRS_Ls_v1_2 = format_1_Project_area_HTRS_Ls_v1_2.readFeatures(json_1_Project_area_HTRS_Ls_v1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_Project_area_HTRS_Ls_v1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_Project_area_HTRS_Ls_v1_2.addFeatures(features_1_Project_area_HTRS_Ls_v1_2);
var lyr_1_Project_area_HTRS_Ls_v1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_Project_area_HTRS_Ls_v1_2, 
                style: style_1_Project_area_HTRS_Ls_v1_2,
                interactive: true,
                title: '<img src="styles/legend/1_Project_area_HTRS_Ls_v1_2.png" /> 1_Project_area_HTRS_Ls_v1'
            });
var format_2_Target_area_HTRS_Ls_v1_3 = new ol.format.GeoJSON();
var features_2_Target_area_HTRS_Ls_v1_3 = format_2_Target_area_HTRS_Ls_v1_3.readFeatures(json_2_Target_area_HTRS_Ls_v1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_Target_area_HTRS_Ls_v1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_Target_area_HTRS_Ls_v1_3.addFeatures(features_2_Target_area_HTRS_Ls_v1_3);
var lyr_2_Target_area_HTRS_Ls_v1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_Target_area_HTRS_Ls_v1_3, 
                style: style_2_Target_area_HTRS_Ls_v1_3,
                interactive: true,
                title: '<img src="styles/legend/2_Target_area_HTRS_Ls_v1_3.png" /> 2_Target_area_HTRS_Ls_v1'
            });
var format_4_MSP_ALL_HTRS_Ls_v1_4 = new ol.format.GeoJSON();
var features_4_MSP_ALL_HTRS_Ls_v1_4 = format_4_MSP_ALL_HTRS_Ls_v1_4.readFeatures(json_4_MSP_ALL_HTRS_Ls_v1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_MSP_ALL_HTRS_Ls_v1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_MSP_ALL_HTRS_Ls_v1_4.addFeatures(features_4_MSP_ALL_HTRS_Ls_v1_4);
var lyr_4_MSP_ALL_HTRS_Ls_v1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_MSP_ALL_HTRS_Ls_v1_4, 
                style: style_4_MSP_ALL_HTRS_Ls_v1_4,
                interactive: true,
                title: '<img src="styles/legend/4_MSP_ALL_HTRS_Ls_v1_4.png" /> 4_MSP_ALL_HTRS_Ls_v1'
            });
var format_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5 = new ol.format.GeoJSON();
var features_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5 = format_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.readFeatures(json_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.addFeatures(features_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5);
var lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5, 
                style: style_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5,
                interactive: true,
                title: '<img src="styles/legend/Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.png" /> Podrucja_istrazivanja_Poly_HTRS_Ls_v1'
            });
var format_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6 = new ol.format.GeoJSON();
var features_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6 = format_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.readFeatures(json_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.addFeatures(features_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6);
var lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6, 
                style: style_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6,
                interactive: true,
                title: '<img src="styles/legend/Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.png" /> Restoracijske_aktivnosti_2021_HTRS_Ls_v1'
            });
var format_Orhideje_Buff500_20202021_HTRS_Ls_v1_7 = new ol.format.GeoJSON();
var features_Orhideje_Buff500_20202021_HTRS_Ls_v1_7 = format_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.readFeatures(json_Orhideje_Buff500_20202021_HTRS_Ls_v1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orhideje_Buff500_20202021_HTRS_Ls_v1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.addFeatures(features_Orhideje_Buff500_20202021_HTRS_Ls_v1_7);
var lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Orhideje_Buff500_20202021_HTRS_Ls_v1_7, 
                style: style_Orhideje_Buff500_20202021_HTRS_Ls_v1_7,
                interactive: true,
                title: '<img src="styles/legend/Orhideje_Buff500_20202021_HTRS_Ls_v1_7.png" /> Orhideje_Buff500_2020-2021_HTRS_Ls_v1'
            });
var format_Dinara_planinarska_sklonista_20201213_8 = new ol.format.GeoJSON();
var features_Dinara_planinarska_sklonista_20201213_8 = format_Dinara_planinarska_sklonista_20201213_8.readFeatures(json_Dinara_planinarska_sklonista_20201213_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dinara_planinarska_sklonista_20201213_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dinara_planinarska_sklonista_20201213_8.addFeatures(features_Dinara_planinarska_sklonista_20201213_8);
var lyr_Dinara_planinarska_sklonista_20201213_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dinara_planinarska_sklonista_20201213_8, 
                style: style_Dinara_planinarska_sklonista_20201213_8,
                interactive: true,
                title: '<img src="styles/legend/Dinara_planinarska_sklonista_20201213_8.png" /> Dinara_planinarska_sklonista_20201213'
            });
var format_Merge_All_HTRS_Ls_v4_9 = new ol.format.GeoJSON();
var features_Merge_All_HTRS_Ls_v4_9 = format_Merge_All_HTRS_Ls_v4_9.readFeatures(json_Merge_All_HTRS_Ls_v4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merge_All_HTRS_Ls_v4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merge_All_HTRS_Ls_v4_9.addFeatures(features_Merge_All_HTRS_Ls_v4_9);
var lyr_Merge_All_HTRS_Ls_v4_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Merge_All_HTRS_Ls_v4_9, 
                style: style_Merge_All_HTRS_Ls_v4_9,
                interactive: true,
                title: '<img src="styles/legend/Merge_All_HTRS_Ls_v4_9.png" /> Merge_All_HTRS_Ls_v4'
            });

lyr_Satellite_0.setVisible(true);lyr_3_PP_Dinara_HTRS_Ls_v1_1.setVisible(true);lyr_1_Project_area_HTRS_Ls_v1_2.setVisible(true);lyr_2_Target_area_HTRS_Ls_v1_3.setVisible(true);lyr_4_MSP_ALL_HTRS_Ls_v1_4.setVisible(true);lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.setVisible(true);lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.setVisible(true);lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.setVisible(true);lyr_Dinara_planinarska_sklonista_20201213_8.setVisible(true);lyr_Merge_All_HTRS_Ls_v4_9.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_3_PP_Dinara_HTRS_Ls_v1_1,lyr_1_Project_area_HTRS_Ls_v1_2,lyr_2_Target_area_HTRS_Ls_v1_3,lyr_4_MSP_ALL_HTRS_Ls_v1_4,lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5,lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6,lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7,lyr_Dinara_planinarska_sklonista_20201213_8,lyr_Merge_All_HTRS_Ls_v4_9];
lyr_3_PP_Dinara_HTRS_Ls_v1_1.set('fieldAliases', {'Kategorija': 'Kategorija', 'Naziv': 'Naziv', 'Granice': 'Granice', 'Tijelo': 'Tijelo', 'iucn_1': 'iucn_1', 'Površina': 'Površina', 'Datum_1': 'Datum_1', });
lyr_1_Project_area_HTRS_Ls_v1_2.set('fieldAliases', {'Name': 'Name', 'Površina': 'Površina', });
lyr_2_Target_area_HTRS_Ls_v1_3.set('fieldAliases', {'Name': 'Name', 'Stanista': 'Stanista', 'Ptice': 'Ptice', 'Aktivnosti': 'Aktivnosti', 'Results': 'Results', 'Površina': 'Površina', });
lyr_4_MSP_ALL_HTRS_Ls_v1_4.set('fieldAliases', {'Naziv': 'Naziv', 'Povr_ina': 'Povr_ina', });
lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.set('fieldAliases', {'fid': 'fid', 'Aktivnosti': 'Aktivnosti', 'Ime': 'Ime', 'Podr_istra': 'Podr_istra', 'Opis': 'Opis', 'Površina': 'Površina', });
lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.set('fieldAliases', {'fid': 'fid', 'Naziv': 'Naziv', 'Opis': 'Opis', 'Aktivnost': 'Aktivnost', 'Površina': 'Površina', });
lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.set('fieldAliases', {'fid': 'fid', 'Vrsta': 'Vrsta', });
lyr_Dinara_planinarska_sklonista_20201213_8.set('fieldAliases', {'naziv': 'naziv', 'otvoren': 'otvoren', 'kategorija': 'kategorija', 'upravlja': 'upravlja', 'stanje': 'stanje', });
lyr_Merge_All_HTRS_Ls_v4_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Vrsta': 'Vrsta', 'Datum': 'Datum', 'opazac': 'opazac', });
lyr_3_PP_Dinara_HTRS_Ls_v1_1.set('fieldImages', {'Kategorija': 'TextEdit', 'Naziv': 'TextEdit', 'Granice': 'TextEdit', 'Tijelo': 'TextEdit', 'iucn_1': '', 'Površina': '', 'Datum_1': '', });
lyr_1_Project_area_HTRS_Ls_v1_2.set('fieldImages', {'Name': 'TextEdit', 'Površina': '', });
lyr_2_Target_area_HTRS_Ls_v1_3.set('fieldImages', {'Name': 'TextEdit', 'Stanista': 'TextEdit', 'Ptice': 'TextEdit', 'Aktivnosti': 'TextEdit', 'Results': 'TextEdit', 'Površina': '', });
lyr_4_MSP_ALL_HTRS_Ls_v1_4.set('fieldImages', {'Naziv': 'TextEdit', 'Povr_ina': '', });
lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.set('fieldImages', {'fid': 'TextEdit', 'Aktivnosti': 'TextEdit', 'Ime': 'TextEdit', 'Podr_istra': 'TextEdit', 'Opis': 'TextEdit', 'Površina': '', });
lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.set('fieldImages', {'fid': '', 'Naziv': '', 'Opis': '', 'Aktivnost': '', 'Površina': '', });
lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.set('fieldImages', {'fid': 'TextEdit', 'Vrsta': 'TextEdit', });
lyr_Dinara_planinarska_sklonista_20201213_8.set('fieldImages', {'naziv': 'TextEdit', 'otvoren': 'TextEdit', 'kategorija': 'TextEdit', 'upravlja': 'TextEdit', 'stanje': 'TextEdit', });
lyr_Merge_All_HTRS_Ls_v4_9.set('fieldImages', {'Name': '', 'descriptio': '', 'Vrsta': '', 'Datum': '', 'opazac': '', });
lyr_3_PP_Dinara_HTRS_Ls_v1_1.set('fieldLabels', {'Kategorija': 'no label', 'Naziv': 'no label', 'Granice': 'no label', 'Tijelo': 'no label', 'iucn_1': 'no label', 'Površina': 'no label', 'Datum_1': 'no label', });
lyr_1_Project_area_HTRS_Ls_v1_2.set('fieldLabels', {'Name': 'no label', 'Površina': 'no label', });
lyr_2_Target_area_HTRS_Ls_v1_3.set('fieldLabels', {'Name': 'no label', 'Stanista': 'no label', 'Ptice': 'no label', 'Aktivnosti': 'no label', 'Results': 'no label', 'Površina': 'no label', });
lyr_4_MSP_ALL_HTRS_Ls_v1_4.set('fieldLabels', {'Naziv': 'no label', 'Povr_ina': 'no label', });
lyr_Podrucja_istrazivanja_Poly_HTRS_Ls_v1_5.set('fieldLabels', {'fid': 'no label', 'Aktivnosti': 'no label', 'Ime': 'no label', 'Podr_istra': 'no label', 'Opis': 'no label', 'Površina': 'no label', });
lyr_Restoracijske_aktivnosti_2021_HTRS_Ls_v1_6.set('fieldLabels', {'fid': 'no label', 'Naziv': 'no label', 'Opis': 'no label', 'Aktivnost': 'no label', 'Površina': 'no label', });
lyr_Orhideje_Buff500_20202021_HTRS_Ls_v1_7.set('fieldLabels', {'fid': 'no label', 'Vrsta': 'no label', });
lyr_Dinara_planinarska_sklonista_20201213_8.set('fieldLabels', {'naziv': 'no label', 'otvoren': 'no label', 'kategorija': 'no label', 'upravlja': 'no label', 'stanje': 'no label', });
lyr_Merge_All_HTRS_Ls_v4_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Vrsta': 'no label', 'Datum': 'no label', 'opazac': 'no label', });
lyr_Merge_All_HTRS_Ls_v4_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});