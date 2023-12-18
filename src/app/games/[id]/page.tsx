interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  return <div>Game {params.id}</div>;
}
