import axios from 'axios';

// The Product type as used in the app
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  internalId: string;
  image: string;
  description: string;
  specifications: {
    color: string;
    size: string;
    ean: string;
    availability: string;
  };
}

const API_URL = 'https://34.142.139.231/api/products';
const IMAGE_BASE_URL = 'https://34.142.139.231/images/';

// Image mapping for real product images
const imageMap = [
  '/lovable-uploads/1.jpg',
  '/lovable-uploads/2.jpg',
  '/lovable-uploads/3.jpg',
  '/lovable-uploads/4.jpg',
  '/lovable-uploads/5.jpg',
  '/lovable-uploads/6.jpg',
  '/lovable-uploads/7.jpg',
  '/lovable-uploads/8.jpg',
  '/lovable-uploads/9.jpg',
  '/lovable-uploads/10.jpg',
  '/lovable-uploads/11.jpg',
  '/lovable-uploads/12.jpg',
  '/lovable-uploads/13.jpg',
  '/lovable-uploads/14.jpg',
  '/lovable-uploads/15.jpg',
  '/lovable-uploads/16.jpg',
  '/lovable-uploads/17.jpg',
  '/lovable-uploads/18.jpg',
  '/lovable-uploads/19.jpg',
  '/lovable-uploads/20.jpg',
];

// Counter for cycling through images
let imageCounter = 0;

// Helper to map API product to app Product type
function mapApiProduct(apiProduct: any): Product {
  const imageIndex = imageCounter % imageMap.length;
  imageCounter++;
  
  return {
    id: apiProduct.Index, // or parseInt(apiProduct.Index)
    name: apiProduct.Name,
    brand: apiProduct.Brand,
    category: apiProduct.Category,
    price: Number(apiProduct.Price),
    stock: Number(apiProduct.Stock),
    internalId: apiProduct["Internal ID"] || apiProduct.InternalID || apiProduct.internalId || '',
    image: imageMap[imageIndex], // Use our real product images
    description: apiProduct.ShortDescription || '',
    specifications: {
      color: apiProduct.Color || '',
      size: apiProduct.Size || '',
      ean: String(apiProduct.EAN || ''),
      availability: apiProduct.Availability || '',
    },
  };
}

// Fallback product data when API is not accessible
const fallbackProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    brand: "TechAudio",
    category: "Electronics",
    price: 89.99,
    stock: 45,
    internalId: "WH-001",
    image: "/lovable-uploads/1.jpg",
    description: "High-quality wireless headphones with noise cancellation",
    specifications: {
      color: "Black",
      size: "One Size",
      ean: "1234567890123",
      availability: "In Stock",
    },
  },
  {
    id: 2,
    name: "Gaming Laptop",
    brand: "GameTech",
    category: "Electronics",
    price: 1299.99,
    stock: 12,
    internalId: "GL-002",
    image: "/lovable-uploads/2.jpg",
    description: "High-performance gaming laptop with RTX graphics",
    specifications: {
      color: "Silver",
      size: "15.6 inch",
      ean: "1234567890124",
      availability: "In Stock",
    },
  },
  {
    id: 3,
    name: "Modern Sofa",
    brand: "ComfortHome",
    category: "Furniture",
    price: 599.99,
    stock: 8,
    internalId: "MS-003",
    image: "/lovable-uploads/3.jpg",
    description: "Comfortable 3-seater sofa with premium fabric",
    specifications: {
      color: "Gray",
      size: "3-Seater",
      ean: "1234567890125",
      availability: "In Stock",
    },
  },
  {
    id: 4,
    name: "Running Shoes",
    brand: "SportFlex",
    category: "Clothing",
    price: 129.99,
    stock: 67,
    internalId: "RS-004",
    image: "/lovable-uploads/4.jpg",
    description: "Lightweight running shoes with excellent cushioning",
    specifications: {
      color: "Blue",
      size: "10",
      ean: "1234567890126",
      availability: "In Stock",
    },
  },
  {
    id: 5,
    name: "Smart Watch",
    brand: "TechWear",
    category: "Electronics",
    price: 299.99,
    stock: 23,
    internalId: "SW-005",
    image: "/lovable-uploads/5.jpg",
    description: "Feature-rich smartwatch with health monitoring",
    specifications: {
      color: "Black",
      size: "42mm",
      ean: "1234567890127",
      availability: "In Stock",
    },
  },
];

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const res = await axios.get(API_URL);
    return res.data.products.map(mapApiProduct);
  } catch (error) {
    console.error('Error fetching all products, using fallback data:', error);
    return fallbackProducts;
  }
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const res = await axios.get(API_URL);
    const found = res.data.products.find((p: any) => Number(p.Index) === id);
    return found ? mapApiProduct(found) : null;
  } catch (error) {
    console.error('Error fetching product by ID, using fallback data:', error);
    const fallbackProduct = fallbackProducts.find(p => p.id === id);
    return fallbackProduct || null;
  }
}

export async function fetchProductsByCategory(category: string, limit?: number): Promise<Product[]> {
  try {
    const res = await axios.get(API_URL);
    const filtered = res.data.products.filter((p: any) => p.Category === category);
    const mapped = filtered.map(mapApiProduct);
    return limit ? mapped.slice(0, limit) : mapped;
  } catch (error) {
    console.error('Error fetching products by category, using fallback data:', error);
    const filtered = fallbackProducts.filter(p => p.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }
}

export async function fetchLatestProducts(limit = 10): Promise<Product[]> {
  try {
    const res = await axios.get(API_URL);
    const sorted = res.data.products.sort((a: any, b: any) => b.Index - a.Index);
    return sorted.slice(0, limit).map(mapApiProduct);
  } catch (error) {
    console.error('Error fetching latest products, using fallback data:', error);
    return fallbackProducts.slice(0, limit);
  }
}

export async function searchProductsByQuery(query: string): Promise<Product[]> {
  try {
    const res = await axios.get(`${API_URL}/search?q=${encodeURIComponent(query)}`);
    return res.data.products.map(mapApiProduct);
  } catch (error) {
    console.error('Error searching products:', error);
    // Fallback to local search if API fails
    return searchProductsLocally(query);
  }
}

// Local search fallback function
async function searchProductsLocally(query: string): Promise<Product[]> {
  try {
    const allProducts = await fetchAllProducts();
    const searchTerm = query.toLowerCase();
    
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.internalId.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  } catch (error) {
    console.error('Local search also failed:', error);
    return [];
  }
}

// Optionally, update searchProductsByInternalId to use the new endpoint if you want all search to go through it
export async function searchProductsByInternalId(searchTerm: string): Promise<Product[]> {
  // For backward compatibility, but now uses the new search endpoint
  return searchProductsByQuery(searchTerm);
}

// Fetch products for a specific page (server-side pagination)
export async function fetchProductsPaginated(page = 1) {
  try {
    const res = await axios.get(`${API_URL}?page=${page}`);
    return {
      products: res.data.products.map(mapApiProduct),
      pagination: res.data.pagination,
    };
  } catch (error) {
    console.error('Error fetching paginated products, using fallback data:', error);
    // Simulate pagination with fallback data
    const itemsPerPage = 50;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = fallbackProducts.slice(startIndex, endIndex);
    
    return {
      products: paginatedProducts,
      pagination: { 
        page: page, 
        totalPages: Math.ceil(fallbackProducts.length / itemsPerPage), 
        total: fallbackProducts.length 
      },
    };
  }
} 