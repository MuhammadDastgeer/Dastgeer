const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Dastgeer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
