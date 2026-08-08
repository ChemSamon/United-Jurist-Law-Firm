import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface FacebookVideoPlayerProps {
  facebookUrl?: string;
  className?: string;
}

export const FacebookVideoPlayer: React.FC<FacebookVideoPlayerProps> = ({
  facebookUrl = "https://www.facebook.com/watch/?v=1460842985077330",
  className = "",
}) => {
  const [iframeError, setIframeError] = useState(false);

  // Encode URL for Facebook iframe plugin
  const encodedUrl = encodeURIComponent(facebookUrl);
  const videoEmbedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=500`;

  return (
    <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-borderLight dark:border-dark-border shadow-card bg-neutral-950 group ${className}`}>
      {/* Video Container Frame */}
      <div className="relative w-full aspect-video flex items-center justify-center">
        {!iframeError ? (
          <iframe
            src={videoEmbedUrl}
            title="United Jurist Law Firm Facebook Video"
            className="w-full h-full border-0"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onError={() => setIframeError(true)}
          />
        ) : (
          /* Fallback view if iframe fails or is blocked */
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold text-brand-gold flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 ml-1 text-brand-gold" />
            </div>
            <div className="space-y-1 max-w-md">
              <h4 className="text-base font-serif font-bold text-white">Watch Firm Video on Facebook</h4>
              <p className="text-xs text-neutral-400">
                Click below to watch the official presentation on Facebook.
              </p>
            </div>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-gold text-neutral-900 text-xs font-bold shadow-gold hover:bg-brand-goldBright transition-all"
            >
              <span>Play Video on Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Subtle overlay bar on bottom-right with direct watch link */}
      <div className="px-4 py-2 bg-neutral-900/90 backdrop-blur-sm border-t border-white/10 flex items-center justify-between text-xs">
        <span className="text-[11px] text-neutral-300 font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Official Firm Presentation
        </span>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-brand-gold hover:text-brand-goldBright inline-flex items-center gap-1 transition-colors"
        >
          <span>Watch on Facebook</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
