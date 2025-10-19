import { Database, Github, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const nav = document.querySelector('nav');
      const offset = nav ? (nav as HTMLElement).offsetHeight : 64;
      const y = element.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Database className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg">JupyterMagics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("installation")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Installation
            </button>
            <button onClick={() => scrollToSection("docs")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </button>
            <button onClick={() => scrollToSection("roadmap")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.open("https://github.com", "_blank")}>
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("features")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("installation")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Installation
              </button>
              <button onClick={() => scrollToSection("docs")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </button>
              <button onClick={() => scrollToSection("roadmap")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </button>
              <Button variant="outline" size="sm" className="justify-start" onClick={() => window.open("https://github.com", "_blank")}>
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
