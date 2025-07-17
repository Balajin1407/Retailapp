import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Electronics", href: "/products?category=electronics" },
      { name: "Furniture", href: "/products?category=furniture" },
      { name: "Clothing", href: "/products?category=clothing" },
      { name: "Home & Garden", href: "/products?category=home-garden" },
    ],
    customerService: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    connect: [
      { name: "Newsletter", href: "/newsletter" },
      { name: "Social Media", href: "/social" },
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gradient mb-4 md:mb-0">
              TechStore
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 TechStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;