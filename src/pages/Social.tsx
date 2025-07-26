
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/vibekart",
      description: "Follow us for product updates and community engagement"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/vibekart",
      description: "Get real-time updates and tech news"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vibekart",
      description: "Visual product showcases and lifestyle content"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/vibekart",
      description: "Product reviews, tutorials, and tech content"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/vibekart",
      description: "Professional updates and company news"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/vibekart",
      description: "Join our community for discussions and support"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Connect With Us</h1>
            <p className="text-muted-foreground text-lg">
              Follow us on social media for the latest updates, exclusive content, and community engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {socialLinks.map((platform) => (
              <Card key={platform.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <platform.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-center">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {platform.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(platform.url, '_blank')}
                  >
                    Follow Us
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Why Follow Us?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Get exclusive sneak peeks of new products</li>
                      <li>• Participate in giveaways and contests</li>
                      <li>• Access to flash sales and limited-time offers</li>
                      <li>• Join our community of tech enthusiasts</li>
                      <li>• Get quick customer support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    We encourage open discussions and value your feedback. Please follow these guidelines:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Be respectful and courteous</li>
                    <li>• Stay on topic and relevant</li>
                    <li>• No spam or promotional content</li>
                    <li>• Report inappropriate content</li>
                    <li>• Help others in the community</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Social Media Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-primary text-2xl">100K+</h4>
                  <p className="text-sm text-muted-foreground">Total Followers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-2xl">Daily</h4>
                  <p className="text-sm text-muted-foreground">Content Updates</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-2xl">24/7</h4>
                  <p className="text-sm text-muted-foreground">Community Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Social;
