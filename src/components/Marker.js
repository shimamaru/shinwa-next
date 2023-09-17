import React from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import styled from "styled-components";
import { useState } from "react";
import { markerContents } from "./markerContents";
import Image from "next/image";

//css
// const StyledMarker = styled(MarkerF)`
//   font-size: 16px;
//   display: none;
// `;

// const StyledInfoWindow = styled(InfoWindowF)`
//   border-radius: 50px;
//   display: none;
// `;

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
      <MarkerF
        className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4"
        position={position}
        onLoad={(marker) => {
          marker.addListener("click", () => {
            //クリックしたら移動するコードの関数が走る
            handleMarkerClick(marker);

            // マーカーのpositionを取得
            const markerPosition = marker.getPosition();

            const markerIndex = Object.keys(markerContents).findIndex((key) => {
              const content = markerContents[key];
              return (
                content.position.lat === markerPosition.lat() &&
                content.position.lng === markerPosition.lng()
              );
            });

            console.log("マーカーのindex:", markerIndex);
            //クリックしたら、下のinfowindowにmaker引数を持って開く
            setSelectedMarker(marker);
          });
        }}
      />

      {selectedMarker && (
        <InfoWindowF
          position={selectedMarker.position}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          {(() => {
            // マーカーの位置を検索し、その位置を持つマーカーのindexを取得
            const markerIndex = Object.keys(markerContents).findIndex((key) => {
              const content = markerContents[key];
              //ポジションが同じindexの時にtrueを返すから、その時の値がmakerIndexとなる。
              return (
                content.position.lat === selectedMarker.position.lat() &&
                content.position.lng === selectedMarker.position.lng()
              );
            });

            //indexが-1でなければ、returnの中身を返す
            if (markerIndex !== -1) {
              const markerInfo = markerContents[markerIndex];
              return (
                <div className="p-1">
                  <Image
                    src="/images/new/haunh_water_color_style_goat_with_the_moutain_forest_in_the_bac_2d765b61-d291-458f-8fab-ac3cc9df1062.png"
                    alt=""
                    className="w-20 h-8 rounded"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-base">{markerInfo.title}</h3>
                  <p className="text-xs">{markerInfo.description}</p>
                </div>
              );
            }

            //そうでなければ、null
            return null;
          })()}
        </InfoWindowF>
      )}
    </>
  );
};

export default CustomMarker;
