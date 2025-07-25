const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-bold text-xl gradient-text">
            CATS BOXPVP
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © 2024 CATS BOXPVP. All rights reserved.
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gaming-primary rounded-full animate-pulse" />
            <span className="text-sm text-gaming-primary font-medium">
              Server Online
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            This server is not an official Minecraft product and is not approved by Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;