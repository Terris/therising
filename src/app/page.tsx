"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";

export default function Home() {
  const games = useQuery(api.games.all);
  return (
    <>
      <h2 className="text-lg pb-4">Your games</h2>
      <div className="flex flex-col gap-2">
        {games?.map((game) => (
          <Link href={`/games/${game._id}`} key={game._id}>
            {game.name}
          </Link>
        ))}
      </div>
    </>
  );
}
