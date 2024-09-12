import { fetchData } from "@/app/_components/api/fetchLocalServer";

export async function ServerSideComponentInClient1() {
  const data = await fetchData();
  return (
    <div className="m-4 bg-slate-400">
      <h1>Server Component In Client Component</h1>
      <div>{data.message}</div>
      <div>{data.timestamp}</div>
    </div>
  );
}

export function ServerSideComponentInClient2() {
  return (
    <div className="m-4 bg-slate-400">
      <h1>Server Component In Client Component</h1>
    </div>
  );
}
