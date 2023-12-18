"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = useQuery(api.games.get, { id: params.id as Id<"games"> });
  if (!game) return <div className="p-4">Loading...</div>;
  return (
    <main className="p-4">
      <h2>Game: {game?.name} </h2>
    </main>
  );
}
