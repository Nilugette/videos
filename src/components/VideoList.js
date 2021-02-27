import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
    //console.log(props.images)
       const renderedList = videos.map(video => {
            return <VideoItem key={video.id} video={video} />
        })
        
        return <div className="video-list">{renderedList}</div>
    }
    
export default VideoList