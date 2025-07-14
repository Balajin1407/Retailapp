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

const API_URL = 'http://34.142.139.231:5000/api/products';
const IMAGE_BASE_URL = 'http://34.142.139.231:5000/images/';

// Helper to map API product to app Product type
function mapApiProduct(apiProduct: any): Product {
  return {
    id: apiProduct.Index, // or parseInt(apiProduct.Index)
    name: apiProduct.Name,
    brand: apiProduct.Brand,
    category: apiProduct.Category,
    price: Number(apiProduct.Price),
    stock: Number(apiProduct.Stock),
    internalId: apiProduct["Internal ID"] || apiProduct.InternalID || apiProduct.internalId || '',
    image: apiProduct.Image && !apiProduct.Image.startsWith('http') ? IMAGE_BASE_URL + apiProduct.Image : apiProduct.Image,
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