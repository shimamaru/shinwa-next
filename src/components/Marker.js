import React from "react";
import { MarkerF, InfoWindow } from "@react-google-maps/api";
import styled from "styled-components";
import { useState } from "react";

const StyledMarker = styled(MarkerF)`
  color: red;
  font-size: 16px;
`;

const CustomMarker = ({ position }) => {
  //infowindowの表示。初めはnull
  const [selectedMarker, setSelectedMarker] = useState(null);
  //クリックしたら移動する
  const handleMarkerClick = (marker) => {
    if (marker.map instanceof window.google.maps.Map) {
      const markerPosition = marker.getPosition();
      if (markerPosition) {
        marker.map.panTo(markerPosition);
      }
    }
  };

  return (
    <div>
      <StyledMarker
        position={position}
        onLoad={(marker) => {
          // マーカーがロードされた後にクリックイベントを設定
          marker.addListener("click", () => {
            handleMarkerClick(marker);
            setSelectedMarker(marker);
          });
        }}
      />

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <h3>マーカー情報</h3>
            <p>ここに詳細情報を表示</p>
          </div>
        </InfoWindow>
      )}
    </div>
  );
};

export default CustomMarker;
