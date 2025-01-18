import { Button } from "@/components/ui/button"; // Import your Button component
import { ArrowRight } from "lucide-react"; // Import the ArrowRight icon

interface CustomButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export default function CustomButton({ text, variant }: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      className="flex flex-row items-center justify-between text-md py-6 px-4 rounded-full bg-background text-accent-foreground hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-100 ease-in-out hover:text-background"
    >
      {text}{" "}
      <span className="rounded-full p-2 bg-primary text-white">
        <ArrowRight size={16} />
      </span>
    </Button>
  );
}
