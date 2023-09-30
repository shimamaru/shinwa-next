import { useEffect, useState } from "react";
import "../styles/globals.css";
import MapComponent from "../components/Map";
import Texts from "../components/text";

export default function App() {
  const [data, setData] = useState([]); // データを保持するステート

  // データを取得する関数
  async function fetchData() {
    try {
      const response = await fetch("/api/news");
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData); // データをセット
        console.log(responseData);
        console.log(
          responseData[0].title.Description.rich_text[0].text.content
        );
      } else {
        console.error("データの取得に失敗しました");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  }

  // コンポーネントがマウントされた後にデータを取得
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <Texts data={data} />
        <MapComponent data={data} />
      </main>
    </>
  );
}
