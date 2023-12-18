import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("bg-rose-800 py-2 px-4 rounded hover:bg-rose-800/75")}
      {...props}
    >
      {children}
    </button>
  );
}
