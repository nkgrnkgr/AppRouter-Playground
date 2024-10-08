import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    />
  );
}
