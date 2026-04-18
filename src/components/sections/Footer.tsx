export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="font-label text-[10px] tracking-widest uppercase opacity-50 text-neon-cyan">
          © {new Date().getFullYear()} NEON ARISTOCRAT. ALL RIGHTS RESERVED.
        </div>
        <nav className="flex gap-6">
          {["Privacy", "Terms", "Decrypt", "Status"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label text-[10px] tracking-widest uppercase text-white/40 hover:text-neon-pink hover:opacity-100 transition-all"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}