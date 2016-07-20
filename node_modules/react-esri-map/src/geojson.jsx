import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';

export default class GeoJSON extends Component {
    componentDidMount() {
        L.geoJson(this.props.data, this.props.options).addTo(this.context.map);
    }

    render() {
        return null;
    }
};

GeoJSON.contextTypes = {
    map: PropTypes.object
};

GeoJSON.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object
};

GeoJSON.defaultProps = {
    options: {}
};
