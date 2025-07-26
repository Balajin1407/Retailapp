
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Smart Home Technology",
      excerpt: "Discover the latest trends in smart home automation and how AI is transforming our living spaces.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Smart Home",
      image: "/placeholder.svg"
    },
    {
      title: "Top 10 Tech Gadgets for 2025",
      excerpt: "Our curated list of must-have tech gadgets that will define the upcoming year.",
      author: "Mike Chen",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Reviews",
      image: "/placeholder.svg"
    },
    {
      title: "Sustainable Tech: Eco-Friendly Electronics",
      excerpt: "How the tech industry is moving towards more sustainable and environmentally friendly products.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: "/placeholder.svg"
    },
    {
      title: "Gaming Setup Guide: Building Your Dream Rig",
      excerpt: "Complete guide to creating the ultimate gaming setup on any budget.",
      author: "Alex Thompson",
      date: "December 8, 2024",
      readTime: "12 min read",
      category: "Gaming",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Reviews", "Smart Home", "Gaming", "Sustainability", "Tutorials"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">VibeKart Blog</h1>
            <p className="text-muted-foreground text-lg">
              Stay informed with the latest tech trends, product reviews, and industry insights.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Featured Post */}
          <Card className="mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured post" 
                  className="w-full h-64 md:h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <Badge className="mb-2">Featured</Badge>
                <h2 className="text-2xl font-bold mb-2">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Stay Updated</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to get the latest blog posts delivered to your inbox.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
