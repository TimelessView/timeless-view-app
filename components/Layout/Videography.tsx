// import VideoPreview1 from '../../assets/videography/videography-1.png';

function Videography(/*{  }: VideographyType*/) {
  return (
    <div className={`flex overflow-x-auto scrollbar-hide gap-8 items-center py-7`}>
      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/1vYLQ58Ulx8?si=KRxwUkn4hKg2WOB0"
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
          src="https://www.youtube.com/embed/gu82Lu0-fz8?si=unlo-wKKx64hUICs"
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
          src="https://www.youtube.com/embed/e-88iaM48dk?si=CPYrcii180ffTLZ1"
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
          src="https://www.youtube.com/embed/QjYM8J99uow?si=2moIU-P6bjXYuRcy"
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
          src="https://www.youtube.com/embed/kVuv3DNaGmc?si=1wCXwHeXM2BtvOqf"
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
          src="https://www.youtube.com/embed/ZHcmF92x3R0?si=h1QRUdlzoEhQV4FF"
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
