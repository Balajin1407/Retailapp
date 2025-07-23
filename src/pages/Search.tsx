import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { fetchAllProducts, Product } from "@/lib/productApi";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      // Search by Index (ID) instead of Internal ID
      const filtered = products.filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        const productId = product.id.toString();
        
        return (
          productId.includes(searchLower) ||
          product.name.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const clearSearch = () => {
    setSearchTerm("");
    setSearchParams({});
    setFilteredProducts([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Products</h1>
            
            {/* Search Instructions */}
            <p className="text-muted-foreground mb-6">
              Use the search bar in the header above to search by product ID, name, brand, or category.
            </p>
          </div>

          {/* Search Results */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading products...</p>
            </div>
          ) : searchTerm ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  Search Results for "{searchTerm}"
                </h2>
                <div className="flex items-center space-x-4">
                  <p className="text-muted-foreground">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                  </p>
                  <Button onClick={clearSearch} variant="outline" size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try searching with different keywords or product ID
                  </p>
                  <Button onClick={clearSearch} variant="outline">
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search Products</h3>
              <p className="text-muted-foreground">
                Use the search bar in the header to find products by ID, name, brand, or category
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage; 