import { Card } from "@/components/ui/card";
import { Terminal, BarChart3, Zap, History, Database, Sparkles } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Magic Commands",
    description: "Use %%mariadb magic for inline SQL execution directly in your notebook cells",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Auto Visualization",
    description: "Results automatically formatted into beautiful tables and charts with Pandas & Matplotlib",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Database,
    title: "Schema Introspection",
    description: "Explore your database structure with intelligent autocomplete and hints",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized MariaDB connector ensures rapid query execution and data transfer",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: History,
    title: "Query History",
    description: "Track and reuse your queries with built-in history management",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sparkles,
    title: "Error Highlighting",
    description: "Clear error messages with syntax highlighting for quick debugging",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to work with MariaDB in Jupyter notebooks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 ${feature.bgColor} rounded-lg w-fit mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
