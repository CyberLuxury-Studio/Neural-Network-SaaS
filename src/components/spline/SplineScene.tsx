"use client";

// We'll bypass the @splinetool/react-spline package that is failing Next.js module resolution
// and build a quick and perfectly working React wrapper around @splinetool/runtime
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineScene({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = new Application(canvasRef.current);
    app.load(url);

    return () => {
      if (app) {
        app.dispose();
        app = null;
      }
    };
  }, [url]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
