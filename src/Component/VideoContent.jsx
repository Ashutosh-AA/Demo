import React from 'react'
// import video from '../content/farzi.mp4'

function VideoContent() {
    const video = "https://www.youtube.com/embed/vMGrPZG7MrI"
    return (
        <>
        {/* to play from youtube */}
            <div>
            <iframe
    style={{ width: '100vw', height: '100vh' }}
      src={video}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />

                
            {/* to play video locally */}
                {/* <div className="jumbotron jumbotron-fluid">
            <div className="">
              <video style={{ width: '100vw', height: '80vh' }} controls >
                <source src={video} type="video/mp4" />
              </video>

            </div>
          </div> */}
            </div>
        </>
    )
}

export default VideoContent