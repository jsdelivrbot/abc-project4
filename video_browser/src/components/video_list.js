import React from 'react'; 
import VideoListItem from './video_list_item'

// function based component access props differently than 
// a class based (which uses this.props)

const VideoList = (props) => {


	const videoItems = props.videos.map((video) => {
		return ( 
			<VideoListItem 
				video={video} 
				key={video.etag}
				onVideoSelect={props.onVideoSelect}/>
		)
	})

	return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		); 
}

export default VideoList; 