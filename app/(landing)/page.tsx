import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FacebookEmbed from "@/components/ui/FacebookEmbed";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-foreground">
              Popok Academy_NextJS {" "}
              <span className="text-accent">Build the Future</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
              {
                "Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences with our platform."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 bg-transparent"
              >
                <a href="https://www.facebook.com/profile.php?id=61555142585877">Watch Demo</a>
                
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                10M+
              </div>
              <div className="text-sm text-muted-foreground">
                Requests Daily
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                150+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Powerful features designed to help your team build faster and
              scale effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Deploy in seconds with our global edge network. Experience
                unmatched performance worldwide.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground">
                Bank-grade security with SOC 2 compliance. Your data is
                protected with industry-leading encryption.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Built-in tools for seamless teamwork. Share, review, and iterate
                faster than ever before.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Analytics & Insights
              </h3>
              <p className="text-muted-foreground">
                Real-time analytics to understand your users and optimize
                performance continuously.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
              <p className="text-muted-foreground">
                Reliable infrastructure you can count on. Our SLA guarantees
                maximum availability.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
                Connect with your existing tools seamlessly. Comprehensive APIs
                and documentation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-accent-foreground/80 text-balance mb-8">
              Join thousands of teams already building the future with our
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* hard coded */}
      <footer className="py-12 border-t border-border text-30px">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold">Nexus</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building the future of web development, one deployment at a
                time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
