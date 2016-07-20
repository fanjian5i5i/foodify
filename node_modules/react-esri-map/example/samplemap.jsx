import React, { Component } from 'react';
import ReactEsriMap, { BaseMapLayer, FeatureLayer, GeoJSON, TiledMapLayer } from '../src/index';

import './samplemap.css'

export default class SampleMap extends Component {
    render() {
        var data = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [-77.0429411, 38.9043478]
            }
        };

        var options = {
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/'
        };

        return (
            <div className='samplemap'>
                <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
                    <BaseMapLayer></BaseMapLayer>
                    <GeoJSON data={data}></GeoJSON>
                    <FeatureLayer options={options}></FeatureLayer>
                </ReactEsriMap>
            </div>
        );
    }
}
// <TiledMapLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"></TiledMapLayer>

/*
   return (
   <div className='samplemap'>
   <ReactEsriMap lat={45.53} lng={-122.64} >
   <BaseMapLayer></BaseMapLayer>
   <GeoJSON data={data}></GeoJSON>
   <FeatureLayer options={options}></FeatureLayer>
   </ReactEsriMap>
   </div>
   );
*/
