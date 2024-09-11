export function ClientComponent() {
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <div>
      <h1>Client Component</h1>
      <p>This component is rendered on the client.</p>
      <button type="button" onClick={handleClick}>
        button
      </button>
    </div>
  );
}
