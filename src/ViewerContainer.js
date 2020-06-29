import React from 'react'

function ViewerContainer ({selectedVideo}) {
    if (selectedVideo === null) {
        return <div>Loading...</div>
    }
    const embedUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <iframe src={embedUrl} />
            <h3>{selectedVideo.snippet.title}</h3>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    )
}

export default ViewerContainer



// if it is not holding any state it can be a functional component

// selectedVideo is null ->Q: what I do before we have data?
// .. A: If i dont have someting dont break
// .. do something like this:
    // if (selectedVideo === null) {
    //     return <div>Loading...</div>
    // }



// const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//
// // in the JSX
// <iframe src={embedUrl} />
