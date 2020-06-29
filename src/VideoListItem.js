import React from 'react'

const VideoListItem = ({singleVideo, clickHandler}) => {

  return (
    <div className="item"  >
      <div className="ui small image">
        {/* Change the image source */}
        <img src={''} />
      </div>
      <div onClick={() => clickHandler(singleVideo)} className="content">
        <img src={singleVideo.snippet.thumbnails.default.url} />
        <h3>{singleVideo.snippet.title}</h3>
      </div>
    </div>
  )
}

export default VideoListItem


// const imageUrl = video.snippet.thumbnails.default.url

// () => clickHandler(singleVideo) has to be a callback function
//.. because we dont want to call it when it renders we want to
//.. call it on click
