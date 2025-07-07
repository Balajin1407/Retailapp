// Mock product data for the e-commerce site
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

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    brand: "Apple",
    category: "Electronics",
    price: 2499.99,
    stock: 15,
    internalId: "APL-MBP16-001",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    description: "Powerful laptop with M2 Pro chip, perfect for professional work and creative tasks.",
    specifications: {
      color: "Space Gray",
      size: "16-inch",
      ean: "194252056721",
      availability: "In Stock"
    }
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Electronics",
    price: 999.99,
    stock: 42,
    internalId: "APL-IP15P-002",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop",
    description: "Latest iPhone with titanium design and advanced camera system.",
    specifications: {
      color: "Natural Titanium",
      size: "6.1-inch",
      ean: "194253433996",
      availability: "In Stock"
    }
  },
  {
    id: 3,
    name: "Samsung 4K Smart TV",
    brand: "Samsung",
    category: "Electronics",
    price: 799.99,
    stock: 8,
    internalId: "SAM-TV55-003",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop",
    description: "55-inch 4K Smart TV with HDR and streaming capabilities.",
    specifications: {
      color: "Black",
      size: "55-inch",
      ean: "887276314501",
      availability: "Limited Stock"
    }
  },
  {
    id: 4,
    name: "Nike Air Max 90",
    brand: "Nike",
    category: "Clothing",
    price: 120.00,
    stock: 67,
    internalId: "NIKE-AM90-004",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    description: "Classic sneakers with comfortable cushioning and iconic design.",
    specifications: {
      color: "White/Black",
      size: "Various",
      ean: "194501094238",
      availability: "In Stock"
    }
  },
  {
    id: 5,
    name: "Modern Sofa Set",
    brand: "IKEA",
    category: "Furniture",
    price: 899.99,
    stock: 12,
    internalId: "IKEA-SOF3-005",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    description: "3-seater modern sofa with comfortable cushions and durable fabric.",
    specifications: {
      color: "Gray",
      size: "220x88x85cm",
      ean: "401.897.64",
      availability: "In Stock"
    }
  },
  {
    id: 6,
    name: "Coffee Maker Pro",
    brand: "Breville",
    category: "Home & Garden",
    price: 299.99,
    stock: 23,
    internalId: "BRE-CM12-006",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    description: "Professional coffee maker with built-in grinder and programmable settings.",
    specifications: {
      color: "Stainless Steel",
      size: "12-cup capacity",
      ean: "021614088239",
      availability: "In Stock"
    }
  },
  {
    id: 7,
    name: "Wireless Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 249.99,
    stock: 31,
    internalId: "SNY-WH10-007",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    description: "Premium wireless headphones with noise cancellation and long battery life.",
    specifications: {
      color: "Black",
      size: "Over-ear",
      ean: "027242916463",
      availability: "In Stock"
    }
  },
  {
    id: 8,
    name: "Gaming Chair",
    brand: "Secretlab",
    category: "Furniture",
    price: 429.99,
    stock: 19,
    internalId: "SEC-GC20-008",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop",
    description: "Ergonomic gaming chair with premium materials and adjustable features.",
    specifications: {
      color: "Black/Red",
      size: "Large",
      ean: "810106322856",
      availability: "In Stock"
    }
  },
  {
    id: 9,
    name: "Organic Cotton T-Shirt",
    brand: "Patagonia",
    category: "Clothing",
    price: 35.00,
    stock: 89,
    internalId: "PAT-OCT1-009",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
    description: "Sustainable organic cotton t-shirt with comfortable fit.",
    specifications: {
      color: "Navy Blue",
      size: "M",
      ean: "192938647312",
      availability: "In Stock"
    }
  },
  {
    id: 10,
    name: "Smart Watch Series 9",
    brand: "Apple",
    category: "Electronics",
    price: 399.99,
    stock: 45,
    internalId: "APL-SW9-010",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&h=600&fit=crop",
    description: "Advanced smartwatch with health monitoring and fitness tracking.",
    specifications: {
      color: "Midnight",
      size: "45mm",
      ean: "194253508878",
      availability: "In Stock"
    }
  }
];

// Generate additional products for pagination testing
const additionalProducts: Product[] = [];
for (let i = 11; i <= 100; i++) {
  const categories = ["Electronics", "Clothing", "Furniture", "Home & Garden"];
  const brands = ["Apple", "Samsung", "Nike", "IKEA", "Sony", "Breville", "Patagonia"];
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  
  additionalProducts.push({
    id: i,
    name: `Product ${i}`,
    brand: brand,
    category: category,
    price: Math.floor(Math.random() * 1000) + 20,
    stock: Math.floor(Math.random() * 100) + 1,
    internalId: `${brand.substring(0, 3).toUpperCase()}-PRD${i.toString().padStart(3, '0')}`,
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&h=600&fit=crop`,
    description: `High-quality ${category.toLowerCase()} product from ${brand}.`,
    specifications: {
      color: ["Black", "White", "Gray", "Blue", "Red"][i % 5],
      size: ["Small", "Medium", "Large", "XL"][i % 4],
      ean: `${Math.floor(Math.random() * 900000000000) + 100000000000}`,
      availability: Math.random() > 0.1 ? "In Stock" : "Limited Stock"
    }
  });
}

export const allProducts = [...mockProducts, ...additionalProducts];

export const getProductById = (id: number): Product | null => {
  return allProducts.find(product => product.id === id) || null;
};

export const getProductsByCategory = (category: string, limit?: number): Product[] => {
  const filtered = allProducts.filter(product => product.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getLatestProducts = (limit = 10): Product[] => {
  return allProducts
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
};

export const searchProductsByInternalId = (searchTerm: string): Product[] => {
  return allProducts.filter(product => 
    product.internalId.toLowerCase().includes(searchTerm.toLowerCase())
  );
};