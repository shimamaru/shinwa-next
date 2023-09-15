// ParentComponent.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import CustomMarker from "./Marker";
import { markers } from "./markers";

const containerStyle = {
  width: "100%",
  height: "86vh",
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={() => {
        console.log("Google Maps API loaded successfully.");
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markers[0].position}
        zoom={11}
      >
        {markers.map((marker) => (
          <CustomMarker
            key={marker.id}
            position={marker.position}
            label={marker.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
