export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="font-label text-xs tracking-[0.3em] uppercase opacity-40 text-primary-container">
          © {new Date().getFullYear()} NEON ARISTOCRAT. ALL RIGHTS RESERVED.
        </div>
        <nav className="flex gap-8">
          {["Privacy", "Terms", "Decrypt", "Status"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant/40 hover:text-secondary hover:opacity-100 transition-all"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
