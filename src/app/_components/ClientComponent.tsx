"use client";

import { Button } from "./Button";
import { ServerSideComponentInClient2 } from "./ServerSideComponentInClient";
import { fetchWhether } from "./api/fetchWeather";

export function ClientComponent() {
  const handleClick = () => {
    fetchWhether().then((data) => {
      alert(JSON.stringify(data, null, 2));
    });
  };
  return (
    <div className="m-4 bg-slate-100">
      <h1>Client Component</h1>
      <div className="p-4">
        <Button onClick={handleClick}>Click</Button>
      </div>
      <ServerSideComponentInClient2 />
    </div>
  );
}
