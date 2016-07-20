import React, { Component, PropTypes } from 'react';
import Leaflet from './leaflet/leaflet.js';
import EsriLeaflet from 'esri-leaflet';

export default class TiledMapLayer extends Component {
    componentDidMount() {
        EsriLeaflet.tiledMapLayer({
            url: this.props.url
        }).addTo(this.context.map);
    }

    render() {
        return null;
    }
}

TiledMapLayer.contextTypes = {
    map: PropTypes.object
};

TiledMapLayer.propTypes = {
    url: PropTypes.string.isRequired
};
