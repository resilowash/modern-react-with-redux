import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //the params above are equivalent to the lines below:
  //const video = props.videos;
  //const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
 // the {video} syntax is identical to const video = props.video. The first argument in the objects array has a property video, grab it an declare it calling it video
  //in the video_list.js we created a property for video in the tag for VideoListItem we're pulling it out of the properties here.
  //const video = props.video;

//className is bootstrap
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
