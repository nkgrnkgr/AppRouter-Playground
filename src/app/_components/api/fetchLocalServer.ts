type Response = {
  message: string;
  timestamp: string;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchData = async () => {
  const data: Response = await fetch("http://localhost:3001").then((res) =>
    res.json(),
  );

  await wait(2000);

  return data;
};
