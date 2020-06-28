import React from 'react'

const VideoListItem = ({singleVideo}) => {

  return (
    <div className="item"  >
      <div className="ui small image">
        {/* Change the image source */}
        <img src={''} />
      </div>
      <div className="content">
        <img src={singleVideo.snippet.thumbnails.default.url} />
        <h3>{singleVideo.snippet.title}</h3>
      </div>
    </div>
  )
}

export default VideoListItem


// const imageUrl = video.snippet.thumbnails.default.url
