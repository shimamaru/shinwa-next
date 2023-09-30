import React from "react";

function Texts({ data }) {
  // dataから必要な情報を取得
  const content =
    data[0]?.title?.Description?.rich_text[0]?.text?.content || "";
  console.log(data);
  console.log(data[0]?.title?.Description?.rich_text[0]?.text?.content);

  return (
    <div>
      <p>取得したデータ: {content}</p>
    </div>
  );
}

export default Texts;
