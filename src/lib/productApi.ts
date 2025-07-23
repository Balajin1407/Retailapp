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

const API_URL = 'http://34.142.139.231/api/products';
const IMAGE_BASE_URL = 'http://34.142.139.231/images/';

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

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await axios.get(API_URL);
  return res.data.products.map(mapApiProduct);
}

export async function fetchProductById(id: number): Promise<Product | null> {
  const res = await axios.get(API_URL);
  const found = res.data.products.find((p: any) => Number(p.Index) === id);
  return found ? mapApiProduct(found) : null;
}

export async function fetchProductsByCategory(category: string, limit?: number): Promise<Product[]> {
  const res = await axios.get(API_URL);
  const filtered = res.data.products.filter((p: any) => p.Category === category);
  const mapped = filtered.map(mapApiProduct);
  return limit ? mapped.slice(0, limit) : mapped;
}

export async function fetchLatestProducts(limit = 10): Promise<Product[]> {
  const res = await axios.get(API_URL);
  const sorted = res.data.products.sort((a: any, b: any) => b.Index - a.Index);
  return sorted.slice(0, limit).map(mapApiProduct);
}

export async function searchProductsByQuery(query: string): Promise<Product[]> {
  const res = await axios.get(`${API_URL}/search?q=${encodeURIComponent(query)}`);
  return res.data.products.map(mapApiProduct);
}

// Optionally, update searchProductsByInternalId to use the new endpoint if you want all search to go through it
export async function searchProductsByInternalId(searchTerm: string): Promise<Product[]> {
  // For backward compatibility, but now uses the new search endpoint
  return searchProductsByQuery(searchTerm);
}

// Fetch products for a specific page (server-side pagination)
export async function fetchProductsPaginated(page = 1) {
  const res = await axios.get(`${API_URL}?page=${page}`);
  return {
    products: res.data.products.map(mapApiProduct),
    pagination: res.data.pagination,
  };
} 

// Enhanced product mapping with real product images
const enhanceProduct = (product: any, index: number): Product => {
  const imageIndex = index % imageMap.length;
  
  return {
    id: product.id,
    internalId: product.internalId,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: parseFloat(product.price),
    stock: parseInt(product.stock),
    image: imageMap[imageIndex],
    description: product.description,
    specifications: {
      color: product.color || '',
      size: product.size || '',
      ean: product.ean || '',
      availability: product.availability || 'In Stock',
    },
  };
};

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

const fallbackImageMap = [
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