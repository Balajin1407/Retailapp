
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  showImage?: boolean;
}

const ProductCard = ({ product, showImage = true }: ProductCardProps) => {
  const { addToCart } = useCart();
  const isLowStock = product.stock < 50;

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="card-product card-hover group">
      <Link to={`/product-details?id=${product.id}`}>
        <CardContent className="p-4">
          {showImage && (
            <div className="aspect-square overflow-hidden rounded-md mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop`;
                }}
              />
            </div>
          )}
          
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              {isLowStock && (
                <Badge variant="destructive" className="text-xs">
                  Low Stock
                </Badge>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground">{product.brand}</p>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-muted-foreground">
                Stock: {product.stock}
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground font-mono">
              ID: {product.internalId}
            </p>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button size="sm" className="btn-primary flex-1" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
