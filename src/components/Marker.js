import React from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
import { markerContents } from "./markerContents";
import Image from "next/image";

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
        icon={markerContents[markerIndex].imageUrl}
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
                <div>
                  <Image
                    src={markerInfo.imageUrl}
                    alt=""
                    className="transition-transform rounded-full overflow-visiblew-20 h-15 hover:scale-110"
                    width={100}
                    height={100}
                  />
                  <h3 className="w-24 mt-1 text-base">{markerInfo.title}</h3>
                  <p className="w-24 text-xs text-gray-600">
                    {markerInfo.description}
                  </p>
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
