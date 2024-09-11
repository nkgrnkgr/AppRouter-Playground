import { ClientComponent } from "./ClientComponent";
import { fetchPost } from "./fetchPost";

export async function ServerComponent() {
  const data = await fetchPost("1");
  return (
    <div className="m-4 bg-slate-200">
      <h1>Server Component</h1>
      <div className="m-2">{data.title}</div>
      <ClientComponent />
    </div>
  );
}
