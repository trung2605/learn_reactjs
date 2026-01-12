import Video1 from './video/download.mp4';

import useRef from 'react';

function Video() {

    const videoRef = useRef(null);
  return (
    <video controls>
      <source src={Video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
export default Video;
