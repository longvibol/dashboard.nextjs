"use client";

import Link from "next/link";
import { Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface MobileNavProps {
  className?: string;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/feature", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className={`md:hidden ${className}`}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 sm:w-96">
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Nexus</span>
            </SheetTitle>
            <SheetDescription>
              Navigate through our platform
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-full mt-8">
            {/* Navigation Links */}
            <nav className="flex-1">
              <div className="space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="pt-6 mt-auto space-y-3 border-t border-border">
              <Button
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={handleLinkClick}
              >
                Sign In
              </Button>
              <Button
                className="w-full"
                onClick={handleLinkClick}
              >
                Get Started
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
