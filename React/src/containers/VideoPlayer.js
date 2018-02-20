import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
    <Player
      aspectRatio='4:3'
      poster="/assets/poster.png"
      src="http://media.w3.org/2010/05/video/movie_300.webm"
    />
  );
};