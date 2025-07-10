
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Fast and reliable shipping options to get your orders delivered safely.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Standard Shipping</h3>
                    <p className="text-sm text-muted-foreground mb-2">5-7 business days</p>
                    <p className="font-medium">FREE on orders over $50</p>
                    <p className="text-sm text-muted-foreground">$5.99 under $50</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Express Shipping</h3>
                    <p className="text-sm text-muted-foreground mb-2">2-3 business days</p>
                    <p className="font-medium">$12.99</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Overnight Shipping</h3>
                    <p className="text-sm text-muted-foreground mb-2">Next business day</p>
                    <p className="font-medium">$24.99</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Processing Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Orders placed before 2 PM PST are processed the same day</li>
                  <li>• Orders placed after 2 PM PST are processed the next business day</li>
                  <li>• Weekend orders are processed on Monday</li>
                  <li>• Custom orders may require additional processing time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Domestic Shipping (US)</h4>
                    <p className="text-sm text-muted-foreground">
                      We ship to all 50 states including Alaska and Hawaii. 
                      PO Boxes and APO/FPO addresses are accepted.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">International Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      International shipping available to select countries. 
                      Additional customs fees may apply.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Order Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via email. 
                  You can track your package status on our website or directly with the carrier.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
