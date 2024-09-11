import type { Post } from "./types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchPost = async (postId: string) => {
  const data: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  ).then((res) => res.json());

  await wait(2000);

  return data;
};
