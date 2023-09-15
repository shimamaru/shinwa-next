// ParentComponent.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import CustomMarker from "./Marker";
import { markerContents } from "./markerContents";

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
        center={{ lat: 35.44824967066238, lng: 132.9602847311755 }}
        s
        zoom={11}
      >
        {markerContents.map((marker) => (
          <CustomMarker
            key={marker.id}
            position={marker.position}
            label={marker.label}
            icon={marker.icon}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
