import { Heart } from "lucide-react";

/* Footer Component
 * Simple footer with copyright
 * Modify: Update year or add additional footer content
 */
const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2025 Yahya Amami. All rights reserved.
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
