"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

export default function NewGamePage() {
  const router = useRouter();

  const createNewGame = useMutation(api.games.create);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGameId = await createNewGame({ name });
    if (newGameId) {
      router.push(`/games/${newGameId}`);
    } else {
      setError("Failed to create game");
    }
  }

  return (
    <main className="p-4">
      <form onSubmit={onSubmit} className="w-1/5 border rounded p-4 mx-auto">
        <h2 className="font-bold pb-4">Start new game</h2>
        {error && <p className="text-red-500">{error}</p>}
        <label htmlFor="name" className="text-sm block w-full">
          Game name
        </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          className="w-full mb-4 p-2 rounded bg-slate-200 text-black"
        />
        <button type="submit">Start</button>
      </form>
    </main>
  );
}
