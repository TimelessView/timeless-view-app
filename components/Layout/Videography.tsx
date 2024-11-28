// import VideoPreview1 from '../../assets/videography/videography-1.png';

function Videography(/*{  }: VideographyType*/) {
  return (
    <div className={`flex overflow-x-auto scrollbar-hide gap-8 items-center py-7`}>
      <div className={`flex`}>
        <iframe
          width="400"
          height="620"
          src="https://www.youtube.com/embed/YWU8Dbe_chU?si=w5ZFTVuD7-fq3Men"
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
          src="https://www.youtube.com/embed/GlmAH_opZos?si=XTMqtCMjAqvWITP-"
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
          src="https://www.youtube.com/embed/1dLeIdLddE8?si=D6dCxgISezbuFa4t"
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
          src="https://www.youtube.com/embed/B76GfvpW-L0?si=21arfQD1P6ys9FFa"
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
          src="https://www.youtube.com/embed/pc1LaQ-1bMA?si=XUWUb0Q8Ujsh_h_-"
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
          src="https://www.youtube.com/embed/ffligM1ocpM?si=B6YSZ1mYbVRY0VwL"
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
          src="https://www.youtube.com/embed/gCnxdmN0RoY"
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
