import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //looping through and array of videos via the array map method.
  const videoItems = props.videos.map((video) => {
    //define a key for the item based on the api, youtube search api has an etag for each video using key as property
    return <VideoListItem key={video.etag} video={video}/>
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

};

export default VideoList;
