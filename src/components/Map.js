import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import CustomMarker from "./Marker";

const containerStyle = {
  width: "100%",
  height: "86vh",
};

const center1 = {
  lat: 35.44824967066238,
  lng: 132.9602847311755,
};

const zoom1 = 11;

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={() => {
        console.log("Google Maps API loaded successfully.");
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center1}
        zoom={zoom1}
      >
        <CustomMarker position={center1} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
