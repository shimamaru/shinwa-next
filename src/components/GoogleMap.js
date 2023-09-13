// components/GoogleMap.js

import React, { useEffect } from "react";

function GoogleMap() {
  useEffect(() => {
    // Google Maps JavaScript APIがロードされた後に実行するコード
    const map = new google.maps.Map(document.getElementById("map"), {
      // マップの設定
    });

    const marker = new google.maps.Marker({
      map: map,
      // マーカーの設定
    });

    // その他のGoogle Maps関連のコードをここに追加
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}

export default GoogleMap;
