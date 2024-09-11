import { ClientComponent } from "./_components/ClientComponent";
import { ServerComponent } from "./_components/ServerComponent";

export default function Home() {
  return (
    <div>
      <main>
        <ServerComponent />
        <ClientComponent />
      </main>
    </div>
  );
}
