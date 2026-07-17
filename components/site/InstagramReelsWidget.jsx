'use client';
import Script from 'next/script';

/**
 * SociableKit Instagram Reels widget wrapped in a theme-matching, height-limited,
 * responsive container. Pass a unique embedId per location.
 *
 * Props:
 *  - embedId     (required): SociableKit widget data-embed-id for this location
 *  - heightClass (optional): Tailwind height classes for the scroll container
 *  - className   (optional): Extra classes for the outer wrapper
 */
export default function InstagramReelsWidget({
  embedId,
  heightClass = 'h-[70vh] min-h-[520px] max-h-[820px]',
  className = '',
}) {
  if (!embedId) return null;

  return (
    <>
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

      {/* SociableKit script — next/script deduplicates identical src automatically */}
      <Script
        src="https://widgets.sociablekit.com/instagram-reels/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}