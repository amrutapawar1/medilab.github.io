import React from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Cities } from '../../constants/Cities';
import L from 'leaflet';

const center = [10.771278605629783, 106.69012489341263];

const markerIcon = new L.Icon({
    iconUrl: require("../../assets/images/icons/mark.png"),
    iconSize: [30, 30],
    iconAnchor: [17, 33],
    popupAnchor: [3, -46],
});

export default function MapCont() {
    return (
        <MapContainer
            center={center}
            zoom={2.49}
            style={{ width: '95%', height: '65vh' }}
        >
            <TileLayer
                url='https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=siecwZyXhWK4vgIqEyJF'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {
                Cities.map((city) => (
                    <Marker
                        position={[city.lat, city.lng]}
                        icon={markerIcon}
                    >
                        <Popup>
                            <b>{city.country}</b>
                        </Popup>
                    </Marker>
                ) )}
        </MapContainer>
    )
}
