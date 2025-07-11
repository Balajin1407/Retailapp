
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const { cart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Your order has been processed successfully!",
      });
      
      clearCart();
      setIsProcessing(false);
      navigate("/");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some products to your cart before proceeding to payment.
            </p>
            <Link to="/products">
              <Button className="btn-primary">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold mb-2">Payment</h1>
          <p className="text-muted-foreground">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary ({getTotalItems()} items)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item, index) => (
                  <div key={item.product.id}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop`;
                          }}
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold line-clamp-1">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${item.product.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                    {index < cart.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Payment Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Payment Method</p>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span className="text-sm">Mock Payment (Demo)</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-primary" 
                    size="lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    This is a demo payment. No actual charges will be made.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
