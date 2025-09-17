import { AITool } from "@/data/aiTools";
import { ExternalLink, Heart } from "lucide-react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface AIToolCardProps {
  tool: AITool;
  onLaunch: (tool: AITool) => void;
  view: 'grid' | 'compact';
  isFavorite: boolean;
  onToggleFavorite: (tool: AITool) => void;
}

export function AIToolCard({ tool, onLaunch, view, isFavorite, onToggleFavorite }: AIToolCardProps) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return ExternalLink;
    // @ts-ignore - Dynamic icon access
    return Icons[iconName] || ExternalLink;
  };

  const Icon = getIcon(tool.icon);

  if (view === 'compact') {
    return (
      <div className="group flex items-center gap-3 p-3 rounded-2xl bg-card hover:bg-card-hover border border-border hover:border-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in w-full">
        <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-card-foreground line-clamp-1 text-sm">
            {tool.name}
          </h3>
          <span className="text-xs text-muted-foreground">
            {tool.category}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(tool);
            }}
            className={cn(
              "p-2 rounded-lg transition-all duration-300 hover:scale-110",
              isFavorite 
                ? "text-red-500 hover:bg-red-500/10" 
                : "text-muted-foreground hover:text-red-500 hover:bg-muted"
            )}
          >
            <Heart className={cn("h-4 w-4", isFavorite && "fill-current animate-scale-in")} />
          </button>
          
          <button
            onClick={() => onLaunch(tool)}
            className="btn-launch px-4 py-1.5 text-xs"
          >
            Launch
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-card group animate-fade-in">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(tool);
          }}
          className={cn(
            "p-2 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm",
            isFavorite 
              ? "bg-red-500/20 text-red-500 hover:bg-red-500/30" 
              : "bg-background/80 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current animate-scale-in")} />
        </button>
      </div>
      
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0 pr-8">
          <h3 className="font-semibold text-card-foreground line-clamp-1">
            {tool.name}
          </h3>
          <span className="text-xs text-muted-foreground">
            {tool.category}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {tool.description}
      </p>
      
      <button
        onClick={() => onLaunch(tool)}
        className="btn-launch w-full text-sm flex items-center justify-center gap-2"
      >
        Launch
        <ExternalLink className="h-3 w-3" />
      </button>
    </div>
  );
}