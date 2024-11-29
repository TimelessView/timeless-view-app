import { motion } from 'framer-motion';
import { videos } from '@/utils/variables';
// @ts-ignore
import Slider from 'react-slick';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className={`overflow-x-auto overflow-y-hidden scrollbar-hide gap-8 items-center py-7 hidden sm:flex`}>
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
              width="290"
              height="520"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`mr-5`}
            ></iframe>
          </motion.div>
        ))}
      </div>

      <div className={`sm:hidden`}>
        <Slider {...settings}>
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
                width="290"
                height="520"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`ml-5`}
              ></iframe>
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Videography;