# TechStore - Modern E-commerce Platform

A fully-functional e-commerce website built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

### Homepage (/)
- **Header**: Logo, navigation (Home, Products), search bar, shopping cart icon
- **Hero Slider**: 3 beautiful full-screen images with navigation arrows and dot indicators
- **Latest Products**: Displays 10 products with highest IDs (newest arrivals)
- **Footer**: 4-column layout with organized links (Shop, Customer Service, Company, Connect)

### Products Page (/products)
- **Advanced Search**: Real-time search by product name, brand, internal ID, category, or description
- **Search Suggestions**: Popular search terms and recent searches for better UX
- **Search Results**: Dedicated search results page with clear search functionality
- **Sort Options**: Sort by Name (A-Z), Price (Low/High), Stock (High to Low)
- **Product Grid**: Responsive grid showing 50 products per page
- **Pagination**: Smart pagination with page numbers and navigation
- **Product Cards**: Display image, name, brand, category, price, stock, and internal ID
- **Category Filtering**: Filter products by category groups

### Search Functionality
- **Header Search**: Search bar in header (desktop and mobile) that navigates to products page
- **API Integration**: Primary search uses backend API with local fallback
- **Search Results**: Dedicated component with sorting, clear search, and no results handling
- **Search History**: Recent searches stored in localStorage
- **Search Tips**: Helpful suggestions for better search results
- **Error Handling**: Graceful fallback to local search if API fails

### Product Details (/product-details?id={ID})
- **Breadcrumb Navigation**: Home > Products > Product Name
- **Product Layout**: Large image on left, product info on right
- **Stock Alerts**: Warning displayed when stock < 50 items
- **Quantity Selector**: Choose 1-10 items with +/- buttons
- **Action Buttons**: Add to Cart and Add to Wishlist
- **Tabs**: Description and detailed Specifications
- **Similar Products**: 5 products from the same category

## 🔍 Search Features

### Search Implementation
- **Primary Search**: Uses API endpoint `/api/products/search?q={query}`
- **Fallback Search**: Local search if API fails, searches across:
  - Product name
  - Brand
  - Internal ID
  - Category
  - Description
- **Search Suggestions**: 
  - Recent searches (stored in localStorage)
  - Popular search terms
  - Search tips and guidance

### Search Components
- **Header Search**: Global search accessible from any page
- **Products Page Search**: Dedicated search with suggestions
- **SearchResults**: Component for displaying search results
- **SearchSuggestions**: Component for search guidance

### Search UX Features
- **Real-time Results**: Instant search results display
- **Clear Search**: Easy way to return to normal browsing
- **Search History**: Remembers recent searches
- **No Results Handling**: Helpful suggestions when no products found
- **Loading States**: Proper loading indicators during search

## 🎨 Design System

### Colors & Theme
- **Primary**: Professional teal (#2E8B8B) for trust and reliability
- **Secondary**: Warm accent colors for highlights
- **Gradients**: Subtle gradients for hero sections and buttons
- **Responsive**: Mobile-first design with adaptive layouts

### Components
- **Cards**: Hover effects with smooth transitions
- **Buttons**: Custom variants with proper semantic colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth fade-ins, scale effects, and slide transitions

## 📱 Responsive Design

- **Mobile**: Single column layouts, hamburger menu, mobile search
- **Tablet**: 2-3 column product grids, optimized navigation
- **Desktop**: 4-5 column grids, full navigation, enhanced interactions

## 🔧 Technical Features

### Navigation
- React Router for client-side routing
- Browser back button support
- URL-based product details (query parameters)
- Active navigation states

### Search & Filtering
- Real-time search with API integration
- Local search fallback for reliability
- Multiple sort options with instant updates
- Pagination with smart page number display
- Category-based filtering
- Search suggestions and history

### Product Management
- Mock data with realistic product information
- Image fallbacks for broken links
- Stock level indicators and warnings
- Category-based similar product recommendations

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📊 Test Data

The website includes 100+ mock products across 4 categories:
- **Electronics**: Laptops, phones, TVs, headphones, smartwatches
- **Furniture**: Sofas, chairs, desks, storage solutions
- **Clothing**: Shirts, shoes, accessories, apparel
- **Home & Garden**: Kitchen appliances, tools, decor

## 🧪 Testing Features

### Manual Testing Checklist
- ✅ Homepage loads with slider and latest products
- ✅ Navigation between pages works correctly
- ✅ Search functionality works from header and products page
- ✅ Search suggestions and recent searches display correctly
- ✅ Search results show with proper sorting and clear search
- ✅ No results handling provides helpful suggestions
- ✅ Sorting options update results properly
- ✅ Pagination navigates through all products
- ✅ Product details page loads with correct data
- ✅ Similar products display correctly
- ✅ Responsive design works on all screen sizes
- ✅ Stock warnings appear for low inventory items
- ✅ Quantity selector functions properly

### Search Testing
- ✅ Search by product name
- ✅ Search by brand
- ✅ Search by internal ID
- ✅ Search by category
- ✅ Search suggestions work
- ✅ Recent searches are saved
- ✅ Clear search functionality
- ✅ No results handling
- ✅ Search from header navigation
- ✅ Search from products page

### Automated Testing Tools
- **Lighthouse**: Performance, accessibility, and SEO analysis
- **WebPageTest**: Website performance optimization testing
- **Browser DevTools**: Built-in testing and debugging

## 🌐 URL Structure

- **Homepage**: `/` or `/index.html`
- **Product List**: `/products`
- **Product Details**: `/product-details?id={Internal ID}`
- **Search Results**: `/products?search={query}`

## 📋 Footer Links

Organized into 4 main categories:

1. **Shop**: Electronics, Furniture, Clothing, Home & Garden
2. **Customer Service**: Contact, Shipping, Returns, FAQ
3. **Company**: About, Careers, Privacy, Terms
4. **Connect**: Newsletter, Social Media, Blog, Support

## 🎯 Key Requirements Met

- ✅ Full-screen image slider with 3 images and navigation
- ✅ Latest products showing 10 items with highest index
- ✅ Advanced search functionality with API integration
- ✅ Search suggestions and recent searches
- ✅ Sort functionality (Name, Price, Stock)
- ✅ 50 products per page with pagination
- ✅ Product details with image, info, and similar products
- ✅ Stock alerts for items with < 50 inventory
- ✅ Quantity selector (1-10 items)
- ✅ Breadcrumb navigation
- ✅ Responsive design for all screen sizes
- ✅ Professional footer with 4-column layout

## 💡 Future Enhancements

- Shopping cart functionality
- User authentication
- Product reviews and ratings
- Wishlist management
- Advanced filtering options
- Product comparison feature
- Newsletter signup
- Social media integration
- Search analytics and insights
- Voice search capability
- Search result highlighting

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and shadcn/ui
