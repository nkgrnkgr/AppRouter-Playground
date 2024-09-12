import { fetchData } from "../api/fetchLocalServer";
import { ClientComponent } from "./ClinetComponent";

export async function ServerComponent() {
  const data = await fetchData();
  return (
    <div className="m-4 bg-slate-200">
      <h1>Server Component</h1>
      <div className="m-2">{data.message}</div>
      <div className="m-2">{data.timestamp}</div>
      <ClientComponent />
    </div>
  );
}
