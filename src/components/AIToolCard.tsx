import { AITool } from "@/data/aiTools";
import { ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";

interface AIToolCardProps {
  tool: AITool;
  onLaunch: (tool: AITool) => void;
}

export function AIToolCard({ tool, onLaunch }: AIToolCardProps) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return ExternalLink;
    // @ts-ignore - Dynamic icon access
    return Icons[iconName] || ExternalLink;
  };

  const Icon = getIcon(tool.icon);

  return (
    <div className="ai-card group">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
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