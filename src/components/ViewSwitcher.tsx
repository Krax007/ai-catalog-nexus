import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface ViewSwitcherProps {
  view: 'grid' | 'compact';
  onViewChange: (view: 'grid' | 'compact') => void;
}

export function ViewSwitcher({ view, onViewChange }: ViewSwitcherProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg">
      <button
        onClick={() => onViewChange('grid')}
        className={cn(
          "p-2 rounded-md transition-all duration-300",
          view === 'grid' 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
        aria-label="Grid view"
      >
        <LayoutGrid className="h-4 w-4" />
      </button>
      <button
        onClick={() => onViewChange('compact')}
        className={cn(
          "p-2 rounded-md transition-all duration-300",
          view === 'compact' 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
        aria-label="Compact view"
      >
        <List className="h-4 w-4" />
      </button>
    </div>
  );
}