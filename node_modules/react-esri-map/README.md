# React ESRI Maps

React component for rendering ESRI maps

## Examples

#### Most basic map
```jsx
    <ReactEsriMap>
        <BaseMapLayer></BaseMapLayer>
    </ReactEsriMap>
```

#### Satellite imagery with labels
```jsx
    <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
        <BaseMapLayer type="Imagery"></BaseMapLayer>
        <BaseMapLayer type="ImageryLabels"></BaseMapLayer>
    </ReactEsriMap>
```

#### Tiled map layer
```jsx
    <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
        <TiledMapLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"></TiledMapLayer>
    </ReactEsriMap>
```

#### Adding ESRI Feature set to map
```jsx
        // First, create this options object with the URL for the featuers you want to add
        var options = {
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/'
        };

        // Then add it as a FeatureLayer
        return (
            <div className='samplemap'>
                <ReactEsriMap lat={45.53} lng={-122.64}>
                    <BaseMapLayer></BaseMapLayer>
                    <FeatureLayer options={options}></FeatureLayer>
                </ReactEsriMap>
            </div>
        );
```

#### Adding GeoJSON to the map
```jsx
        // First let's create a GeoJSON object
        var data = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [-77.0429411, 38.9043478]
            }
        };

        // Then add it to the GeoJSON feature
        return (
            <div className='samplemap'>
                <ReactEsriMap lat={38.9043478} lng={-77.0429411} >
                    <BaseMapLayer></BaseMapLayer>
                    <GeoJSON data={data}></GeoJSON>
                </ReactEsriMap>
            </div>
        );
```
