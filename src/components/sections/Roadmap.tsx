import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    status: "completed",
    icon: CheckCircle2,
    title: "Core Magic Commands",
    items: [
      "Basic %%mariadb magic implementation",
      "Connection management",
      "Query execution and result formatting",
      "Error handling system",
    ],
  },
  {
    phase: "Phase 2",
    status: "in-progress",
    icon: Clock,
    title: "Enhanced Features",
    items: [
      "Schema introspection with autocomplete",
      "Query history and favorites",
      "Advanced visualization options",
      "Performance optimization",
    ],
  },
  {
    phase: "Phase 3",
    status: "planned",
    icon: Sparkles,
    title: "Advanced Integration",
    items: [
      "MariaDB Vector queries support",
      "AI-powered query suggestions",
      "VS Code notebooks compatibility",
      "Google Colab integration",
    ],
  },
  {
    phase: "Phase 4",
    status: "planned",
    icon: Sparkles,
    title: "Ecosystem Growth",
    items: [
      "Submit to PyPI and JupyterCon",
      "Educational platform integration",
      "Community plugins system",
      "Enterprise features",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our vision for the future of MariaDB in Jupyter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roadmapItems.map((item, index) => {
              const StatusIcon = item.icon;
              const statusColors = {
                completed: "text-primary bg-primary/10",
                "in-progress": "text-secondary bg-secondary/10",
                planned: "text-accent bg-accent/10",
              };

              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card backdrop-blur-sm hover:shadow-elegant transition-all duration-300 border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${statusColors[item.status as keyof typeof statusColors]}`}>
                      <StatusIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wide">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {item.items.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
