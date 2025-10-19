import { Button } from "@/components/ui/button";
import { Github, BookOpen, Rocket } from "lucide-react";

export function Hero() {
  const scrollToInstallation = () => {
    const element = document.getElementById("installation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-card backdrop-blur-sm rounded-full border border-border mb-8">
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">MariaDB Integration for Jupyter</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Query MariaDB
            <br />
            Right in Your Notebook
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seamless magic commands for data scientists. Execute SQL, visualize results, and explore MariaDB without leaving Jupyter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              onClick={scrollToInstallation}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-muted/50 px-8"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Code Example */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-elegant p-6 text-left animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Jupyter Notebook</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">
                  <span className="text-primary">%load_ext</span> mariadb_magic{"\n"}
                  <span className="text-accent">%%mariadb</span>{"\n"}
                  <span className="text-secondary">SELECT</span> * <span className="text-secondary">FROM</span> users{"\n"}
                  <span className="text-secondary">WHERE</span> created_at {'>'} <span className="text-accent">'2024-01-01'</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
