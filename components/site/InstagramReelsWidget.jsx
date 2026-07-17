'use client';
import { useMemo } from 'react';

/**
 * SociableKit Instagram Reels widget — rendered inside an isolated iframe.
 *
 * Why an iframe?
 *   SociableKit's widget.js uses global window state and only scans the DOM
 *   once. On Next.js client-side navigation the script is already "initialized"
 *   in memory, which is why the widget hangs on the loader spinner and only
 *   works after a hard refresh.
 *
 *   Rendering inside an iframe (via srcDoc) gives every instance its own
 *   fresh window + document. On route change React unmounts the iframe,
 *   mounts a new one, and the widget initializes cleanly every time.
 */
export default function InstagramReelsWidget({
  embedId,
  heightClass = 'h-[70vh] min-h-[520px] max-h-[820px]',
  className = '',
}) {
  const srcDoc = useMemo(() => {
    if (!embedId) return '';
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: transparent;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #fff;
    }
    /* Custom scrollbar inside the iframe (WebKit) */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.4); border-radius: 999px; }
  </style>
</head>
<body>
  <div class="sk-ww-instagram-reels" data-embed-id="${embedId}"></div>
  <script src="https://widgets.sociablekit.com/instagram-reels/widget.js" defer></script>
</body>
</html>`;
  }, [embedId]);

  if (!embedId) return null;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden ring-1 ring-border bg-gradient-to-b from-background/60 to-background/20 backdrop-blur-sm shadow-2xl ${className}`}
      data-testid="instagram-reels-widget-wrapper"
    >
      {/* Decorative gradient border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-primary/20 z-10"
      />

      {/* Fresh iframe per embedId — key forces remount on navigation */}
      <div className={`relative w-full ${heightClass}`}>
        <iframe
          key={embedId}
          title="Instagram Reels"
          srcDoc={srcDoc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 block bg-transparent"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          data-testid={`instagram-reels-embed-${embedId}`}
        />
      </div>

      {/* Bottom fade for polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent z-10"
      />
    </div>
  );
}