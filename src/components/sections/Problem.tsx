import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Problem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Problem We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data scientists need seamless database access within their notebooks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-2 border-destructive/20 hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Before</h3>
                  <p className="text-muted-foreground">The fragmented workflow</p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span className="text-muted-foreground">Switch between multiple tools and interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span className="text-muted-foreground">Write repetitive boilerplate connection code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span className="text-muted-foreground">Manual data formatting and visualization setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span className="text-muted-foreground">Complex error handling and debugging</span>
                </li>
              </ul>
            </Card>

            {/* After */}
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-2 border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">After</h3>
                  <p className="text-muted-foreground">The streamlined experience</p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Native SQL execution with <code className="px-2 py-1 bg-muted rounded text-sm">%%mariadb</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Automatic table and chart visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Built-in error highlighting and query history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Schema introspection with autocomplete</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
