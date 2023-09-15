import React from "react";
import { MarkerF } from "@react-google-maps/api";
import styled from "styled-components";

const StyledMarker = styled(MarkerF)`
  color: red;
  font-size: 16px;
`;

const CustomMarker = ({ position }) => {
  const customIcon = {
    url: require("../../website images/about-light-desktop.png").default, // 画像のパスを正しく指定
    scaledSize: new window.google.maps.Size(70, 70),
  };

  const handleMarkerClick = (marker) => {
    if (marker.map instanceof window.google.maps.Map) {
      const markerPosition = marker.getPosition();
      if (markerPosition) {
        marker.map.panTo(markerPosition);
      }
    }
  };

  return (
    <StyledMarker
      position={position}
      icon={customIcon}
      onLoad={(marker) => {
        // マーカーがロードされた後にクリックイベントを設定
        marker.addListener("click", () => {
          handleMarkerClick(marker);
        });
      }}
    />
  );
};

export default CustomMarker;
