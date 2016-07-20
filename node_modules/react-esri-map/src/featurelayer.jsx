import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';

export default class FeatureLayer extends Component {
    componentDidMount() {
        if (!this.props.options.url) {
            console.error('Cannot add an ESRI FeatureLayer without specifying a url in the supplied options');
        }
        EsriLeaflet.featureLayer(this.props.options).addTo(this.context.map);
    }

    render() {
        return null;
    }
};

FeatureLayer.contextTypes = {
    map: PropTypes.object
};

FeatureLayer.propTypes = {
    options: PropTypes.object.isRequired
};
