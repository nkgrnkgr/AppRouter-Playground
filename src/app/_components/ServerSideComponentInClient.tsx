import { fetchPost } from "./fetchPost";

export async function ServerSideComponentInClient1() {
  const data = await fetchPost("2");
  return (
    <div className="m-4 bg-slate-400">
      <h1>Server Component In Client Component {data.title}</h1>
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
