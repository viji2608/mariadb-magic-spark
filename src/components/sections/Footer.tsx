import { Database, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg">JupyterMagics for MariaDB</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Bringing seamless MariaDB integration to Jupyter notebooks. Built for data scientists, by data scientists.
              </p>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => window.open("https://twitter.com", "_blank")}
                  className="hover:bg-primary/10"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => window.open("mailto:contact@example.com", "_blank")}
                  className="hover:bg-primary/10"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => window.open("https://docs.mariadb.com", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://github.com", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://pypi.org", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    PyPI
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("#", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Examples
                  </button>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => window.open("https://github.com/discussions", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Discussions
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://github.com/issues", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Report Issues
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("#", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Contributing
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("#", "_blank")} className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2024 JupyterMagics for MariaDB. Open source project licensed under MIT.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
