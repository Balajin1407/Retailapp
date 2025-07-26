
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping delivers the next business day. Free standard shipping is available on orders over $50."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items and 15 days for clothing and personal care items. Items must be in original condition with all packaging and accessories."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly with the shipping carrier."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select international destinations. Additional customs fees and longer delivery times may apply. Check our shipping page for a full list of supported countries."
    },
    {
      question: "How do I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters processing and cannot be changed. Contact our customer service team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card details on our servers."
    },
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner of any page, or you'll be prompted to create an account during checkout. You can also checkout as a guest if preferred."
    },
    {
      question: "What if I receive a damaged or defective item?",
      answer: "Contact our customer service team immediately with photos of the damaged item. We'll arrange for a replacement or full refund, including return shipping costs."
    },
    {
      question: "Do you offer price matching?",
      answer: "We offer price matching on identical items from major competitors. The item must be in stock at both retailers and the competitor's price must be verifiable."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center">
                  <p className="font-semibold">Email Support</p>
                  <p className="text-sm text-muted-foreground">support@vibekart.com</p>
                  <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Phone Support</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">1-800-VIBEKART</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM PST</p>
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

export default FAQ;
