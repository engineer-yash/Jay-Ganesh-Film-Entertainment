'use client';
import { useEffect, useRef } from 'react';

const SK_SCRIPT_SRC = 'https://widgets.sociablekit.com/instagram-reels/widget.js';

/**
 * SociableKit Instagram Reels widget — SPA-safe.
 *
 * SociableKit's widget.js scans the DOM for `.sk-ww-instagram-reels` elements
 * only once, when the script is first parsed. On Next.js client-side navigation
 * the script is already in memory and never re-scans, which is why the widget
 * looks empty unless you hard-reload the page.
 *
 * Fix: on every mount, remove any existing SociableKit script tag, clear our
 * own container, and inject a fresh cache-busted script tag so the browser
 * re-executes it and re-scans the DOM.
 */
export default function InstagramReelsWidget({
  embedId,
  heightClass = 'h-[70vh] min-h-[520px] max-h-[820px]',
  className = '',
}) {
  const embedRef = useRef(null);

  useEffect(() => {
    if (!embedId || typeof window === 'undefined') return;

    // 1. Clear anything the previous widget instance rendered inside our div
    if (embedRef.current) {
      embedRef.current.innerHTML = '';
    }

    // 2. Remove any existing SociableKit script tags so the new one re-executes
    document
      .querySelectorAll(`script[src^="${SK_SCRIPT_SRC}"]`)
      .forEach((s) => s.remove());

    // 3. Inject a fresh, cache-busted script tag
    const script = document.createElement('script');
    script.src = `${SK_SCRIPT_SRC}?v=${Date.now()}`;
    script.defer = true;
    script.setAttribute('data-sk-instagram-reels', 'true');
    document.body.appendChild(script);

    // 4. Cleanup on unmount / embedId change
    return () => {
      script.remove();
      if (embedRef.current) {
        embedRef.current.innerHTML = '';
      }
    };
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
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-primary/20"
      />

      {/* Height-limited, scrollable container */}
      <div
        className={`relative w-full overflow-y-auto overflow-x-hidden ${heightClass}
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-primary/40
                    [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        <div
          ref={embedRef}
          key={embedId}
          className="sk-ww-instagram-reels"
          data-embed-id={embedId}
          data-testid={`instagram-reels-embed-${embedId}`}
        />
      </div>

      {/* Bottom fade for polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
      />
    </div>
  );
}