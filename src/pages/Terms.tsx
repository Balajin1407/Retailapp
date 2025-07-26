
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using VibeKart's website and services, you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on VibeKart's
                  website for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We strive to provide accurate product information, but we do not warrant that product 
                  descriptions or other content is accurate, complete, reliable, current, or error-free. 
                  Prices and availability are subject to change without notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orders and Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We reserve the right to refuse or cancel your order at any time for certain reasons 
                  including but not limited to: product or service availability, errors in the description 
                  or price of the product or service, error in your order, or other reasons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Returns and Refunds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for most items. Items must be returned in their 
                  original condition and packaging. Some restrictions may apply. Please see our 
                  detailed return policy for more information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  In no case shall VibeKart or its directors, officers, employees, affiliates, agents,
                  contractors, interns, suppliers, service providers or licensors be liable for any injury,
                  loss, claim, or any direct, indirect, incidental, punitive, special, or consequential
                  damages of any kind, including, without limitation lost profits, lost revenue, lost savings,
                  loss of data, replacement costs, or any similar damages, whether based in contract, tort
                  (including negligence), strict liability or otherwise, arising from your use of any of the
                  service or any products procured using the service, or for any other claim related in any
                  way to your use of the service or any product, including, but not limited to, any errors
                  or omissions in any content, or any loss or damage of any kind incurred as a result of the
                  use of the service or any content (or product) posted, transmitted, or otherwise made
                  available via the service, even if advised of their possibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of the United States and you irrevocably submit to the exclusive jurisdiction of the 
                  courts in that state or location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The materials on VibeKart's website are provided on an 'as is' basis. VibeKart makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In no case shall VibeKart or its directors, officers, employees, affiliates, agents,
                  contractors, interns, suppliers, service providers or licensors be liable for any injury,
                  loss, claim, or any direct, indirect, incidental, punitive, special, or consequential
                  damages of any kind, including, without limitation lost profits, lost revenue, lost savings,
                  loss of data, replacement costs, or any similar damages, whether based in contract, tort
                  (including negligence), strict liability or otherwise, arising from your use of any of the
                  service or any products procured using the service, or for any other claim related in any
                  way to your use of the service or any product, including, but not limited to, any errors
                  or omissions in any content, or any loss or damage of any kind incurred as a result of the
                  use of the service or any content (or product) posted, transmitted, or otherwise made
                  available via the service, even if advised of their possibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-muted-foreground">
                    Email: legal@vibekart.com<br />
                    Phone: 1-800-VIBEKART
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

export default Terms;
