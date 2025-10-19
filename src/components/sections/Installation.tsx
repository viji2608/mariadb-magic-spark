import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Installation() {
  const [copied, setCopied] = useState(false);
  const installCommand = "pip install mariadb-magic";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="installation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started in Seconds
            </h2>
            <p className="text-xl text-muted-foreground">
              Install with pip and start querying immediately
            </p>
          </div>

          <div className="space-y-8">
            {/* Installation Card */}
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-2 animate-slide-up">
              <h3 className="text-2xl font-bold mb-4">Installation</h3>
              <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
                <code className="text-lg font-mono">{installCommand}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyToClipboard}
                  className="hover:bg-primary/10"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </Card>

            {/* Quick Start Card */}
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-4">Quick Start</h3>
              <div className="space-y-4">
                <div className="bg-card/80 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</div>
                    <span className="font-medium">Load the extension</span>
                  </div>
                  <pre className="text-sm bg-muted/50 p-3 rounded overflow-x-auto">
                    <code className="text-primary">%load_ext mariadb_magic</code>
                  </pre>
                </div>

                <div className="bg-card/80 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary">2</div>
                    <span className="font-medium">Connect to your database</span>
                  </div>
                  <pre className="text-sm bg-muted/50 p-3 rounded overflow-x-auto">
                    <code>
                      <span className="text-accent">%%mariadb_connect</span>{"\n"}
                      <span className="text-muted-foreground">host=localhost user=root password=pwd database=mydb</span>
                    </code>
                  </pre>
                </div>

                <div className="bg-card/80 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-xs font-bold text-accent">3</div>
                    <span className="font-medium">Run your queries</span>
                  </div>
                  <pre className="text-sm bg-muted/50 p-3 rounded overflow-x-auto">
                    <code>
                      <span className="text-accent">%%mariadb</span>{"\n"}
                      <span className="text-secondary">SELECT</span> * <span className="text-secondary">FROM</span> products{"\n"}
                      <span className="text-secondary">LIMIT</span> <span className="text-primary">10</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </Card>

            {/* Documentation Button */}
            <div className="text-center animate-fade-in">
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => window.open("https://docs.mariadb.com", "_blank")}
              >
                View Full Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
