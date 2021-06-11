import React from 'react';
import { videoUrl } from '../../utils/data';
import { VideoStyle } from './styles';

const VideoContainer = () => {
  return (
    <VideoStyle>
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </VideoStyle>
  );
};

export default VideoContainer;
