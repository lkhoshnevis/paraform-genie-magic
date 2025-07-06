
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SelectionButtonProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export const SelectionButton = ({ children, selected, onClick, className }: SelectionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={selected ? "default" : "outline"}
      className={cn(
        "h-auto p-4 text-left justify-start transition-all duration-200 hover:scale-105",
        selected && "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent",
        !selected && "hover:border-blue-300 hover:bg-blue-50",
        className
      )}
    >
      {children}
    </Button>
  );
};
