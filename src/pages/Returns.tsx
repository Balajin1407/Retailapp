
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Calendar, Shield, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Returns & Exchanges</h1>
          <p className="text-muted-foreground text-lg mb-8">
            We want you to be completely satisfied with your purchase. Here's our return policy.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Return Window
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  You have 30 days from the date of delivery to return most items. 
                  Some categories may have different return periods.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">30-Day Returns</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Electronics</li>
                      <li>• Furniture</li>
                      <li>• Home & Garden</li>
                      <li>• Most other items</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">15-Day Returns</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clothing & Accessories</li>
                      <li>• Personal care items</li>
                      <li>• Opened software</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  How to Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Start Your Return</h4>
                      <p className="text-sm text-muted-foreground">
                        Log into your account and select the item you want to return.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Print Return Label</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll email you a prepaid return shipping label.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Ship It Back</h4>
                      <p className="text-sm text-muted-foreground">
                        Package the item securely and drop it off at any authorized location.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Return Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Items We Accept</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Items in original condition and packaging</li>
                      <li>• Items with all accessories and manuals</li>
                      <li>• Items within the return window</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Items We Cannot Accept</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Used or damaged items</li>
                      <li>• Items without original packaging</li>
                      <li>• Personalized or custom items</li>
                      <li>• Perishable goods</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Refund Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Refunds are processed within 3-5 business days after we receive your return. 
                  The refund will be credited to your original payment method.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Original shipping costs are non-refundable unless the return 
                    is due to our error or a defective product.
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

export default Returns;
