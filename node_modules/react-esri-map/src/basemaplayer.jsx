import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

import './leaflet/leaflet.css';

export default class BaseMapLayer extends Component {
    componentDidMount() {
        EsriLeaflet.basemapLayer(this.props.type).addTo(this.context.map);
    }

    render() {
        return null;
    }
};

BaseMapLayer.contextTypes = {
    map: PropTypes.object
};

BaseMapLayer.propTypes = {
    type: PropTypes.string
};

BaseMapLayer.defaultProps = {
    type: 'Streets'
};
