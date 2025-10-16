/** biome-ignore-all assist/source/organizeImports: <explanation> */
import Link from "next/link";
import { MobileNav } from "../mobile-nav";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export function NavHeader() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/feature"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/signin"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/signin"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle></ModeToggle>
            <Link href={"/signin"}>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>

            <Link href={"/dashboard"}>
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
