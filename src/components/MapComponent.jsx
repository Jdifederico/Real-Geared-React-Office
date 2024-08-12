import React, { useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapComponent = ({ dispatch }) => {
    const mapRef = useRef(null);
    const mapsRef = useRef(null);
    const directionsServiceRef = useRef(null);
    const directionsRendererRef = useRef(null);
 
    const handleApiLoaded = (map, maps) => {
        mapRef.current = map;
        mapsRef.current = maps;

        directionsServiceRef.current = new maps.DirectionsService();
        directionsRendererRef.current = new maps.DirectionsRenderer();
      
        directionsRendererRef.current.setMap(map);
        calculateAndDisplayRoute();
    };

    const calculateAndDisplayRoute = () => {
        if (!directionsServiceRef.current || !directionsRendererRef.current || !dispatch.LoadSite || !dispatch.DumpSite) return;

        const directionsRequest = {
            origin: dispatch.LoadSite.fullAddress,
            destination: dispatch.DumpSite.fullAddress,
            travelMode: 'DRIVING',
        };

        directionsServiceRef.current.route(directionsRequest, (result, status) => {
            if (status === mapsRef.current.DirectionsStatus.OK) {
                directionsRendererRef.current.setDirections(result);
            } 
        });
    };

    useEffect(() => {
        
        if (mapRef.current && mapsRef.current) {
            calculateAndDisplayRoute();
        }
    }, [dispatch.LoadSite, dispatch.DumpSite]);

    return (
        <div style={{ height: '400px', width: '100%' }}>
         
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                bootstrapURLKeys={{ key: 'AIzaSyBLRfT0lk65I2sQ7nJaHVWddKclD6ohiHI' }}
                defaultCenter={dispatch.loadResults}
                defaultZoom={10}
            >
                <AnyReactComponent lat={dispatch.loadResults.lat} lng={dispatch.loadResults.lng} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
};

export default MapComponent;