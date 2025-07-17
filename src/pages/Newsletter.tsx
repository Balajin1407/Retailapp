
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Gift, Zap, TrendingUp } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Newsletter</h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest products, exclusive offers, and tech news.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Subscribe Now</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">First Name (Optional)</label>
                    <Input id="name" placeholder="Your first name" />
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Email Preferences:</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekly" defaultChecked />
                        <label htmlFor="weekly" className="text-sm">Weekly newsletter</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="deals" defaultChecked />
                        <label htmlFor="deals" className="text-sm">Exclusive deals and offers</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="new-products" />
                        <label htmlFor="new-products" className="text-sm">New product announcements</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tech-news" />
                        <label htmlFor="tech-news" className="text-sm">Tech news and trends</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Subscribe to Newsletter</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Exclusive Offers</h4>
                      <p className="text-sm text-muted-foreground">
                        Be the first to know about sales, discounts, and special promotions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">New Product Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Get notified when we launch new products and features.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Tech Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Stay informed with the latest technology trends and tips.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">50K+</p>
                      <p className="text-sm text-muted-foreground">Subscribers</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">Weekly</p>
                      <p className="text-sm text-muted-foreground">Updates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletter;
