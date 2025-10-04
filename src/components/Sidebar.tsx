import { categories, type Category } from "@/data/aiTools";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: Category[];
  onCategoryToggle: (category: Category) => void;
  showFavorites: boolean;
  onFavoritesToggle: () => void;
}

export function Sidebar({ isOpen, onClose, selectedCategories, onCategoryToggle, showFavorites, onFavoritesToggle }: SidebarProps) {
  return (
    <>
      {/* Overlay with smooth fade */}
      <div
        className={cn(
          "fixed inset-0 bg-gradient-to-r from-black/60 to-black/40 z-30 transition-all duration-500 ease-out backdrop-blur-sm",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar with enhanced styling */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-72 shadow-2xl",
          "bg-gradient-to-br from-sidebar-background via-sidebar-background to-sidebar-background/95",
          "border-r border-primary/20",
          "transition-all duration-500 ease-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          boxShadow: isOpen ? "0 0 50px rgba(var(--primary), 0.15)" : "none"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with gradient */}
          <div className="flex items-center justify-between p-5 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Filters
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:rotate-90"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
            {/* Favorites Section */}
            <div className="mb-8 animate-fade-in">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">
                Quick Access
              </h3>
              <button
                onClick={onFavoritesToggle}
                className={cn(
                  "category-pill w-full text-left flex items-center gap-3 transition-all duration-300",
                  "hover:scale-[1.02] hover:shadow-lg hover:translate-x-1",
                  "rounded-xl p-3.5",
                  showFavorites && "active bg-gradient-to-r from-primary/20 to-primary/10 shadow-md border-primary/30"
                )}
              >
                <Heart className={cn(
                  "h-5 w-5 transition-all duration-300",
                  showFavorites ? "fill-current scale-110 text-primary" : "text-muted-foreground"
                )} />
                <span className={cn("font-medium", showFavorites && "text-primary")}>
                  Favorites
                </span>
              </button>
            </div>

            {/* Categories Section */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => onCategoryToggle(category)}
                    className={cn(
                      "category-pill w-full text-left transition-all duration-300",
                      "hover:scale-[1.02] hover:shadow-lg hover:translate-x-1",
                      "rounded-xl p-3.5 font-medium",
                      selectedCategories.includes(category) && 
                        "active bg-gradient-to-r from-primary/20 to-primary/10 shadow-md border-primary/30 text-primary"
                    )}
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with gradient */}
          <div className="p-5 border-t border-primary/10 bg-gradient-to-r from-transparent to-primary/5">
            <div className="flex items-center justify-center gap-2 text-xs">
              <div className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedCategories.length > 0 ? "bg-primary animate-pulse" : "bg-muted-foreground/30"
              )} />
              <p className="text-muted-foreground font-medium">
                {selectedCategories.length > 0
                  ? `${selectedCategories.length} filter${selectedCategories.length > 1 ? 's' : ''} active`
                  : "No filters active"}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}