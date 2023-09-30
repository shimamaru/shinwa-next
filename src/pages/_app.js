import "../styles/globals.css";
import MapComponent from "../components/Map";

// Reactコンポーネント内でデータを取得する例
async function fetchData() {
  try {
    const response = await fetch("/api/news");
    if (response.ok) {
      const data = await response.json();
      // データを使用して表示または他の操作を行う
      console.log(data);
    } else {
      console.error("データの取得に失敗しました");
    }
  } catch (error) {
    console.error("エラー:", error);
  }
}

export default function App(
  {
    // Component, pageProps
  }
) {
  fetchData();
  return (
    <>
      <main>
        <MapComponent />
      </main>
    </>
  );
}
