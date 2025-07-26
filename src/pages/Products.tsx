import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SearchResults from "@/components/SearchResults";
import SearchSuggestions from "@/components/SearchSuggestions";
import { fetchProductsPaginated, searchProductsByQuery, Product } from "@/lib/productApi";
import { CATEGORY_GROUPS } from "../data/categoryGroups";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [sortBy, setSortBy] = useState("name");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const group = searchParams.get("group");
  const searchParam = searchParams.get("search");

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        if (searchParam) {
          // Search mode
          setIsSearching(true);
          const searchResults = await searchProductsByQuery(searchParam);
          setProducts(searchResults);
          setPagination({ page: 1, totalPages: 1, total: searchResults.length });
          setSearchQuery(searchParam);
        } else {
          // Normal pagination mode
          setIsSearching(false);
          const { products, pagination } = await fetchProductsPaginated(currentPage);
          setProducts(products);
          setPagination(pagination);
          setSearchQuery("");
        }
        console.log('Unique categories:', [...new Set(products.map(p => p.category))]);
        console.log('Current group:', group);
      } catch (e) {
        setProducts([]);
        setPagination({ page: 1, totalPages: 1, total: 0 });
      }
      setLoading(false);
    };
    fetchProducts();
  }, [currentPage, searchParam]);

  // Filter by group if present (only when not searching)
  let filteredProducts = products;
  if (!isSearching && group && CATEGORY_GROUPS[group]) {
    const categories = CATEGORY_GROUPS[group];
    filteredProducts = products.filter(product => categories.includes(product.category));
  }

  // Sort products client-side
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "stock":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery.trim() });
      setCurrentPage(1);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchParams({});
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSearchSuggestion = (query: string) => {
    setSearchParams({ search: query });
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const { page, totalPages } = pagination;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {isSearching ? (
          <SearchResults
            products={products}
            loading={loading}
            searchQuery={searchParam || ""}
            onClearSearch={clearSearch}
          />
        ) : (
          <>
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {group && CATEGORY_GROUPS[group] ? `${group} Products` : "All Products"}
              </h1>
              <p className="text-muted-foreground">
                {loading ? 'Loading products...' : `Showing page ${pagination.page} of ${pagination.totalPages} (${filteredProducts.length} products${group && CATEGORY_GROUPS[group] ? ` in ${group}` : ''})`}
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products by name, brand, or internal ID..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <Button type="submit" disabled={!searchQuery.trim()}>
                  Search
                </Button>
              </form>
            </div>

            {/* Search Suggestions */}
            {!searchQuery && !group && (
              <div className="mb-8">
                <SearchSuggestions 
                  onSearch={handleSearchSuggestion}
                  currentQuery={searchParam}
                />
              </div>
            )}

            {/* Sort Dropdown */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="stock">Stock (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
              {loading ? (
                <div className="col-span-full text-center py-12">Loading...</div>
              ) : sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results Message */}
            {!loading && filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found.</p>
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {getPageNumbers().map((page, index) => (
                  page === "..." ? (
                    <span key={index} className="px-3 py-2">...</span>
                  ) : (
                    <Button
                      key={index}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageClick(page as number)}
                      className="w-10 h-10"
                    >
                      {page}
                    </Button>
                  )
                ))}
                <Button
                  variant="outline"
                  onClick={handleNextPage}
                  disabled={currentPage === pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Products;