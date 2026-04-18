export function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
        <div className="absolute inset-4 bg-tertiary/20 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute inset-8 border border-primary/30 rounded-full flex items-center justify-center">
          <div className="text-xs font-label text-primary/50 tracking-widest uppercase animate-pulse">Loading Core</div>
        </div>
      </div>
    </div>
  );
}
