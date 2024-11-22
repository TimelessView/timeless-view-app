// import VideoPreview1 from '../../assets/videography/videography-1.png';

function Videography(/*{  }: VideographyType*/) {
  return (
    <div className={`flex overflow-x-auto scrollbar-hide gap-8 items-center py-7`}>
      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/nxg4C365LbQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`-rotate-3 mr-5`}
        ></iframe>
      </div>

      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/nxg4C365LbQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`rotate-3 mr-5`}
        ></iframe>
      </div>

      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/nxg4C365LbQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen

          className={`-rotate-3 mr-5`}
        ></iframe>
      </div>

      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/nxg4C365LbQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`rotate-3 mr-5`}
        ></iframe>
      </div>

    </div>
  );
}

export default Videography;
