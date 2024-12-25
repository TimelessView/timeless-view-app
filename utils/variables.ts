import UserImg1 from '@/assets/testimonials/user-icon-1.png';
import UserImg2 from '@/assets/testimonials/user-icon-2.png';
import UserImg3 from '@/assets/testimonials/user-icon-3.png';
import UserImg4 from '@/assets/testimonials/user-icon-4.png';
import UserImg5 from '@/assets/testimonials/user-icon-5.png';
import UserImg6 from '@/assets/testimonials/user-icon-6.png';
import UserImg7 from '@/assets/testimonials/user-icon-7.png';

export const UNIT_AMOUNT = 10000;

export const OLENAS_INSTAGRAM = `https://www.instagram.com/timeless_view_ca?igsh=Z3I5aTUxZmxsbmox`;

export const photographyOptions = [
  {
    value: `photography`,
    label: `Photography`
  },
  {
    value: `videography`,
    label: `Videography`
  },
  { value: `both`, label: `Both` }];

export const videographyOptions = [
  {
    value: `videography`,
    label: `Videography`
  },
  {
    value: `photography`,
    label: `Photography`
  },
  { value: `both`, label: `Both` }];

export const photographyPackageOptions = [
  { value: `none`, label: `NONE` },
  { value: `photoSession`, label: `Photo Session` }
];

export const videographyPackageOptions = [
  { value: `none`, label: `NONE` },
  { value: `videoShoot`, label: `Video Shoot` }
];

export const photographyAndVideographyPackages = [
  { value: `none`, label: `NONE` },
  { value: `photoSession`, label: `Photo Session` },
  { value: `videoShoot`, label: `Video Shoot` },
  { value: `both`, label: `Both` }
];


export const sliderSettings = {
  infinite: true,
  // speed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 900
  // pauseOnHover: true
};


export const videos = [
  'https://www.youtube.com/embed/YWU8Dbe_chU?si=w5ZFTVuD7-fq3Men',
  'https://www.youtube.com/embed/1dLeIdLddE8?si=D6dCxgISezbuFa4t',
  'https://www.youtube.com/embed/pc1LaQ-1bMA?si=XUWUb0Q8Ujsh_h_-',
  'https://www.youtube.com/embed/ffligM1ocpM?si=B6YSZ1mYbVRY0VwL',
  'https://www.youtube.com/embed/gCnxdmN0RoY'
];


export const TESTIMONIALS = [
  {
    title: `Highly recommend her for anyone!`,
    quote: `Lena has an amazing talent for capturing movement in a way that feels both dynamic and authentic. She recently filmed me doing an aerial hoop flow, and the results were stunning..`,
    imgSrc: UserImg1.src,
    initials: `Andrea MV`
  },
  {
    title: `She is very talented at what she does!`,
    quote: `Olena is such a joy to work with! She is incredibly professional, communicative, and thoughtful in her work. Olena shared her vision in advance..`,
    imgSrc: UserImg2.src,
    initials: `Paulina`
  },
  {
    title: `She’s the one to work with!`,
    quote: `I had the pleasure of working with an incredibly talented Lena, and I couldn’t recommend her enough! Her work is truly high quality, with every detail thoughtfully crafted to bring out the best in each project..`,
    imgSrc: UserImg3.src,
    initials: `Akvile`
  },
  {
    title: `I can’t recommend her enough!`,
    quote: `Working with Olena is always a pleasure. I’ve hired her multiple times because she’s reliable, professional, and a great communicator..`,
    imgSrc: UserImg4.src,
    initials: `Madison Smith`
  },
  {
    title: `She has an eye for capturing the best!`,
    quote: `Her expertise in marketing techniques and audience dynamics have significantly increased our social media traffic and sales. I highly recommend collaborating with her for all your content creation needs..`,
    imgSrc: UserImg5.src,
    initials: `Robbie, R.Song Studios`
  },

  {
    title: `Olena is an amazing professional!`,
    quote: `She recorded me for a Halloween choreography I had in mind, and the video/photos I got were amazing. She also helped me on how to look for the camera when doing some particular moves in order to look better..`,
    imgSrc: UserImg6.src,
    initials: `Jonathan`
  },

  {
    title: `Olena, thank you so much for the amazing video!`,
    quote: `You captured the exact mood and atmosphere I envisioned. Every shot is thoughtfully crafted, and the editing is outstanding. It’s clear you put your heart and professionalism into this project.`,
    imgSrc: UserImg7.src,
    initials: `Sergey`
  }
];
