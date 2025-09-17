import { AITool } from "@/data/aiTools";
import { Clock, ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";

interface RecentlyUsedProps {
  tools: AITool[];
  onToolClick: (tool: AITool) => void;
}

export function RecentlyUsed({ tools, onToolClick }: RecentlyUsedProps) {
  if (tools.length === 0) {
    return null;
  }

  const getIcon = (iconName?: string) => {
    if (!iconName) return Clock;
    // @ts-ignore - Dynamic icon access
    return Icons[iconName] || Clock;
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        Recently Used
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
        {tools.map((tool) => {
          const Icon = getIcon(tool.icon);
          return (
            <div
              key={tool.id}
              onClick={() => onToolClick(tool)}
              className="recent-card group"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <Icon className="h-6 w-6 mb-2 text-primary" />
                  <h3 className="font-medium text-sm line-clamp-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {tool.description}
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors self-end" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}