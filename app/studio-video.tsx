'use client';
import { useEffect, useRef, useState } from 'react';
export default function StudioVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) ref.current?.pause();
  }, []);
  async function toggle() {
    const video = ref.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      await video.play();
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <div className="hero-video">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
        aria-label="EA Kuaför saç çalışması"
      >
        <source src="/ea-sac-calismasi.mp4" type="video/mp4" />
      </video>
      <div className="video-signature">
        <span>EA SIGNATURE</span>
        <span>Saçın hareketi. Rengin ışığı.</span>
      </div>
      <button
        type="button"
        className="video-toggle"
        onClick={toggle}
        aria-label={playing ? 'Videoyu duraklat' : 'Videoyu oynat'}
      >
        {playing ? 'Ⅱ' : '▷'}
      </button>
      {failed && (
        <p className="video-error" role="status">
          Video başlatılamadı. Oynat düğmesiyle tekrar deneyin.
        </p>
      )}
    </div>
  );
}
