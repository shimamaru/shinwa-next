import React from "react";
import { MarkerF, InfoWindow } from "@react-google-maps/api";
import styled from "styled-components";
import { useState } from "react";
import { markerContents } from "./markerContents";

const StyledMarker = styled(MarkerF)`
  /* color: blue; */
  font-size: 16px;
`;

const CustomMarker = ({ position }) => {
  //infowindowの表示。初めはnull
  const [selectedMarker, setSelectedMarker] = useState(null);
  //クリックしたら移動するコード
  const handleMarkerClick = (marker) => {
    if (marker.map instanceof window.google.maps.Map) {
      const markerPosition = marker.getPosition();
      if (markerPosition) {
        marker.map.panTo(markerPosition);
      }
    }
  };

  return (
    <>
      <StyledMarker
        position={position}
        onLoad={(marker) => {
          marker.addListener("click", () => {
            handleMarkerClick(marker);

            // マーカーのpositionを取得
            const markerPosition = marker.getPosition();

            // マーカーの位置を検索し、その位置を持つマーカーのindexを取得
            const markerIndex = Object.keys(markerContents).findIndex((key) => {
              const content = markerContents[key];
              //ポジションが同じindexの時にtrueを返すから、その時の値がmakerIndexとなる。
              return (
                content.position.lat === markerPosition.lat() &&
                content.position.lng === markerPosition.lng()
              );
            });

            // indexをコンソールに出力
            console.log("マーカーのindex:", markerIndex);
            setSelectedMarker(marker);
          });
        }}
      />

      {selectedMarker && (
        //infowindowの表示
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <h3>{markerContents[markerIndex].title}</h3>
            <p>{markerContents[markerIndex].description}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default CustomMarker;
