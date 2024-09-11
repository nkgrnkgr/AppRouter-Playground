import type { Post } from "./types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchWhether = async () => {
  const data: Post = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
  ).then((res) => res.json());

  await wait(2000);

  return data;
};
