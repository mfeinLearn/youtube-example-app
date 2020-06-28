import React from 'react'
import VideoListItem from './VideoListItem'
// What type of component is this?
// What can it do?
// What can't it do?
const VideoList = ({ videos }) => {
    const videoComponents = videos.map(video => <VideoListItem key={video.id.videoId}
        singleVideo={video} />)
  return (
    <div className="four wide column">
      <div className="ui relaxed items">
      {videoComponents}
      </div>
    </div>
  )
}

export default VideoList
// no state no async use function else class
// functional components just rendernig things out
