import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="font-display text-8xl md:text-9xl text-gradient-gold">404</div>
        <h1 className="font-display text-3xl md:text-4xl mt-4">This stage doesn’t exist — yet.</h1>
        <p className="mt-4 text-muted-foreground">The page you’re looking for may have moved or is being choreographed. Head back to explore our studios and events.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">Back home</Link>
      </div>
    </div>
  );
}
