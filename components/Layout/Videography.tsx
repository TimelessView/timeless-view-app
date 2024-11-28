import { motion } from 'framer-motion';

const videoVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6
    }
  })
};

function Videography() {
  const videos = [
    'https://www.youtube.com/embed/YWU8Dbe_chU?si=w5ZFTVuD7-fq3Men',
    'https://www.youtube.com/embed/GlmAH_opZos?si=XTMqtCMjAqvWITP-',
    'https://www.youtube.com/embed/1dLeIdLddE8?si=D6dCxgISezbuFa4t',
    'https://www.youtube.com/embed/B76GfvpW-L0?si=21arfQD1P6ys9FFa',
    'https://www.youtube.com/embed/pc1LaQ-1bMA?si=XUWUb0Q8Ujsh_h_-',
    'https://www.youtube.com/embed/ffligM1ocpM?si=B6YSZ1mYbVRY0VwL',
    'https://www.youtube.com/embed/gCnxdmN0RoY'
  ];

  return (
    <div className={`flex overflow-x-auto overflow-y-hidden scrollbar-hide gap-8 items-center py-7`}>
      {videos.map((video, index) => (
        <motion.div
          key={video}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={videoVariants}
          className={`flex`}
        >
          <iframe
            width="400"
            height="620"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`rotate-3 mr-5`}
          ></iframe>
        </motion.div>
      ))}
    </div>
  );
}

export default Videography;