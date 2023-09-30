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

      console.log(data[0].title.Description.rich_text[0].text.content);
      console.log(data[1].title.Description.rich_text[0].text.content);
      console.log(data[2].title.Description.rich_text[0].text.content);
      console.log(data[3].title.Description.rich_text[0].text.content);
      console.log(data[4].title.Description.rich_text[0].text.content);
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
