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
      {/* Overlay - only on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar - responsive positioning */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-sidebar-background border-r border-sidebar-border",
          "transition-all duration-300 ease-in-out",
          "lg:relative lg:z-0",
          isOpen ? "translate-x-0 animate-slide-in-left" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-sidebar-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {/* Favorites Section */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Quick Access</h3>
              <button
                onClick={onFavoritesToggle}
                className={cn(
                  "category-pill w-full text-left flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]",
                  showFavorites && "active bg-gradient-to-r from-primary/20 to-primary/10"
                )}
              >
                <Heart className={cn("h-4 w-4", showFavorites && "fill-current")} />
                Favorites
              </button>
            </div>

            {/* Categories Section */}
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryToggle(category)}
                  className={cn(
                    "category-pill w-full text-left transition-all duration-300 hover:scale-[1.02]",
                    selectedCategories.includes(category) && "active"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-muted-foreground text-center">
              {selectedCategories.length > 0
                ? `${selectedCategories.length} filter${selectedCategories.length > 1 ? 's' : ''} active`
                : "No filters active"}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}