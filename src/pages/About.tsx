
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">About VibeKart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your premier destination for cutting-edge technology and lifestyle products.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020, VibeKart has been at the forefront of bringing cutting-edge technology 
                to consumers worldwide. We believe that everyone deserves access to the latest innovations 
                that can enhance their daily lives and productivity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to technology by providing high-quality electronics, furniture, 
                clothing, and home & garden products at competitive prices, backed by exceptional 
                customer service and support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
                  <p className="text-muted-foreground text-sm">
                    We carefully curate our product selection to ensure only the best quality items reach our customers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Customer Satisfaction</h3>
                  <p className="text-muted-foreground text-sm">
                    Your satisfaction is our priority. We provide comprehensive support throughout your shopping journey.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-sm">
                    We continuously evolve our platform and services to provide the best shopping experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Trust</h3>
                  <p className="text-muted-foreground text-sm">
                    We build lasting relationships with our customers through transparency and reliability.
                  </p>
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

export default About;
