import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async () => {
  try {
    console.log("Fetching posts..."); // コンソールログを追加
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID,
      page_size: 100,
    });
    const allPost = posts.results;

    console.log("Fetched posts:", allPost); // 取得した投稿をコンソールにログとして表示

    return allPost;
  } catch (error) {
    console.error("Error fetching posts:", error); // エラーが発生した場合にエラーメッセージをコンソールに表示
    throw error; // エラーを再スローしてエラーハンドリングを外部に委任
  }
};
