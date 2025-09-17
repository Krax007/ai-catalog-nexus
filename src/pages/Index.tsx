import { useState, useEffect, useMemo } from "react";
import { aiTools, type Category, type AITool } from "@/data/aiTools";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { RecentlyUsed } from "@/components/RecentlyUsed";
import { AIToolCard } from "@/components/AIToolCard";
import { ViewSwitcher } from "@/components/ViewSwitcher";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentlyUsed, setRecentlyUsed] = useState<AITool[]>([]);
  const [view, setView] = useState<'grid' | 'compact'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load recently used and favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("recentlyUsed");
    if (stored) {
      try {
        const ids = JSON.parse(stored);
        const tools = ids
          .map((id: string) => aiTools.find(t => t.id === id))
          .filter(Boolean)
          .slice(0, 8);
        setRecentlyUsed(tools as AITool[]);
      } catch (e) {
        console.error("Failed to load recently used", e);
      }
    }
    
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs));
      } catch (e) {
        console.error("Failed to load favorites", e);
      }
    }
  }, []);

  // Filter tools based on search, categories, and favorites
  const filteredTools = useMemo(() => {
    let filtered = aiTools;
    
    // Apply favorites filter first
    if (showFavorites) {
      filtered = filtered.filter(tool => favorites.includes(tool.id));
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(tool => 
        selectedCategories.includes(tool.category as Category)
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategories, searchQuery, showFavorites, favorites]);

  const handleCategoryToggle = (category: Category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleToolLaunch = (tool: AITool) => {
    // Update recently used
    const newRecent = [tool, ...recentlyUsed.filter(t => t.id !== tool.id)].slice(0, 8);
    setRecentlyUsed(newRecent);
    
    // Save to localStorage
    const ids = newRecent.map(t => t.id);
    localStorage.setItem("recentlyUsed", JSON.stringify(ids));
    
    // Open tool in new tab
    window.open(tool.url, "_blank", "noopener,noreferrer");
  };

  const handleToggleFavorite = (tool: AITool) => {
    const newFavorites = favorites.includes(tool.id)
      ? favorites.filter(id => id !== tool.id)
      : [...favorites, tool.id];
    
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        onSearch={setSearchQuery}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
        />
        
        <main className="flex-1 container mx-auto px-4 py-6 lg:ml-64">
          <RecentlyUsed 
            tools={recentlyUsed}
            onToolClick={handleToolLaunch}
          />
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              {searchQuery ? `Search Results` : `All AI Tools`}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredTools.length} tools)
              </span>
            </h2>
          </div>
          
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No AI tools found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {filteredTools.map(tool => (
                <AIToolCard
                  key={tool.id}
                  tool={tool}
                  onLaunch={handleToolLaunch}
                />
              ))}
            </div>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
