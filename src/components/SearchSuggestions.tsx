import { useState, useEffect } from "react";
import { Search, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchSuggestionsProps {
  onSearch: (query: string) => void;
  currentQuery?: string;
}

const SearchSuggestions = ({ onSearch, currentQuery }: SearchSuggestionsProps) => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Popular search terms
  const popularSearches = [
    "laptop", "phone", "headphones", "smartwatch", "tablet",
    "sofa", "chair", "desk", "bed", "wardrobe",
    "shirt", "shoes", "jacket", "dress", "accessories",
    "kitchen", "garden", "tools", "decor", "appliances"
  ];

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearchClick = (query: string) => {
    // Add to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    
    // Trigger search
    onSearch(query);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (currentQuery) {
    return null; // Don't show suggestions when there's an active search
  }

  return (
    <div className="space-y-6">
      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Recent Searches
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearRecentSearches}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSearchClick(search)}
                className="text-xs"
              >
                <Search className="h-3 w-3 mr-1" />
                {search}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Popular Searches */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground flex items-center mb-3">
          <TrendingUp className="h-4 w-4 mr-2" />
          Popular Searches
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSearchClick(search)}
              className="text-xs"
            >
              <Search className="h-3 w-3 mr-1" />
              {search}
            </Button>
          ))}
        </div>
      </div>

      {/* Search Tips */}
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">Search Tips</h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Search by product name, brand, or internal ID</li>
          <li>• Use specific terms for better results</li>
          <li>• Try different spellings if no results found</li>
          <li>• Browse categories for inspiration</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchSuggestions; 