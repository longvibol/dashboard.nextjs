import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  handleOnClick: () => void;
  MyClassName?:string;
  variant?: "default" | "primary" | "error";
}

export function MyButton(props: ButtonProps) {
  // Object destructuring
  const { children, MyClassName, variant = "default", handleOnClick } = props;
  return (
    <button className={cn(
       "border-black rounded-xl px-4 p-2 text-black bg-amber-600",
       variant === "primary" && "bg-blue-500 text-white",
       variant === "error" && "bg-red-500 text-white",
       MyClassName
    )} type="button" onClick={handleOnClick}>
      {children}
    </button>
  );
}
