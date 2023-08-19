import React, { useState } from 'react';

const YouTubeVideo = ({ videoId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {isVideoPlaying ? (
        <iframe
          width="950px"
          height="600px"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '850px',
            height: '415px',
            background: `url("https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg") center/cover`,
            cursor: 'pointer',
          }}
          onClick={handleVideoClick}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              fontSize: '24px',
            }}
          >
            Visit Resturent
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
