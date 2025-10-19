import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Database, FileText } from "lucide-react";

const docCards = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics and set up your first MariaDB magic connection",
    link: "https://mariadb.com/docs/server/server-usage/connecting/mariadb-connecting-guide-1",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete reference of all magic commands and their parameters",
    link: "https://mariadb.com/kb/en/library/",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Database,
    title: "MariaDB Docs",
    description: "Official MariaDB documentation and SQL reference guide",
    link: "https://mariadb.com/kb/en/documentation/",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Examples & Tutorials",
    description: "Practical examples and step-by-step tutorials for common tasks",
    link: "https://www.youtube.com/results?search_query=jupyter+notebook+tutorial",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function Documentation() {
  return (
    <section id="docs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know to master JupyterMagics for MariaDB
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {docCards.map((card, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(card.link, "_blank")}
              >
                <div className={`p-3 ${card.bgColor} rounded-lg w-fit mb-4`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <Button variant="ghost" size="sm" className="group">
                  Read more
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm inline-block">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/discussions", "_blank")}
                >
                  Community Forum
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/issues", "_blank")}
                >
                  Report an Issue
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://discord.com", "_blank")}
                >
                  Join Discord
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
