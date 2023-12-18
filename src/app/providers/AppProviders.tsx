import ConvexClientProvider from "./ConvexClientProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ConvexClientProvider>{children}</ConvexClientProvider>;
}
