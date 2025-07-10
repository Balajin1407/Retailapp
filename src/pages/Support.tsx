
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "Available 24/7",
      responseTime: "Instant",
      status: "online"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support representative",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      status: "limited"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      icon: Mail,
      availability: "Available 24/7",
      responseTime: "Within 24 hours",
      status: "online"
    }
  ];

  const commonIssues = [
    {
      title: "Order Issues",
      description: "Problems with placing, modifying, or tracking orders",
      solutions: ["Check order status", "Modify shipping address", "Cancel order"]
    },
    {
      title: "Payment Problems",
      description: "Issues with payments, refunds, or billing",
      solutions: ["Payment declined", "Refund status", "Update payment method"]
    },
    {
      title: "Account Help",
      description: "Login issues, password reset, account settings",
      solutions: ["Reset password", "Update profile", "Delete account"]
    },
    {
      title: "Product Support",
      description: "Technical issues, warranties, and product questions",
      solutions: ["Warranty claim", "Technical troubleshooting", "Product manuals"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Customer Support</h1>
            <p className="text-muted-foreground text-lg">
              We're here to help! Choose the support option that works best for you.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {supportOptions.map((option) => (
              <Card key={option.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative">
                    <option.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                    <Badge 
                      variant={option.status === 'online' ? 'default' : 'secondary'}
                      className="absolute -top-1 -right-1"
                    >
                      {option.status === 'online' ? 'Online' : 'Limited'}
                    </Badge>
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {option.availability}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Response time: {option.responseTime}
                    </p>
                  </div>
                  <Button 
                    className="w-full"
                    disabled={option.status !== 'online'}
                  >
                    {option.title === 'Live Chat' ? 'Start Chat' : 
                     option.title === 'Phone Support' ? 'Call Now' : 'Send Email'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* System Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Website</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Operational</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Payments</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Operational</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium">Shipping</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Minor delays</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Support</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <Card>
            <CardHeader>
              <CardTitle>Common Issues & Quick Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        {issue.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                    </div>
                    <div className="space-y-1">
                      {issue.solutions.map((solution, idx) => (
                        <Button 
                          key={idx}
                          variant="ghost" 
                          size="sm"
                          className="w-full justify-start text-left h-auto p-2"
                        >
                          {solution}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Additional Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p>Sunday: Closed (Emergency support available)</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emergency Support</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For urgent issues outside business hours, use our emergency support line.
                  </p>
                  <p className="text-sm font-medium">1-800-TECH-911</p>
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

export default Support;
