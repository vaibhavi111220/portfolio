import React, { useRef, useState, useEffect } from 'react';

const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.warn('Audio playback failed - may be blocked by browser autoplay policy');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Save music preference to localStorage
    localStorage.setItem('musicEnabled', String(!isPlaying));
  }, [isPlaying]);

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Placeholder - you can replace with actual lo-fi music URL */}
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-full transition-all duration-300 ${
          isPlaying
            ? 'bg-accent-coral text-white shadow-lg shadow-accent-coral/50'
            : 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30 hover:border-accent-coral/50'
        }`}
        title={isPlaying ? 'Stop music' : 'Play ambient music'}
        aria-label="Toggle ambient music"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">{isPlaying ? '🎵' : '🔇'}</span>
          <span className="text-xs font-semibold">
            {isPlaying ? 'On' : 'Off'}
          </span>
        </div>

        {/* Animated pulse when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-accent-coral opacity-20 animate-ping"></div>
        )}
      </button>
    </>
  );
};

export default MusicToggle;
