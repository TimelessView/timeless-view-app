import UserImg1 from '@/assets/testimonials/user-icon-1.png';
import UserImg2 from '@/assets/testimonials/user-icon-2.png';
import UserImg3 from '@/assets/testimonials/user-icon-3.png';
import UserImg4 from '@/assets/testimonials/user-icon-4.png';


export const OLENAS_INSTAGRAM = `https://www.instagram.com/content_creator_olena?igsh=Z3I5aTUxZmxsbmox`;

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
  'https://www.youtube.com/embed/GlmAH_opZos?si=XTMqtCMjAqvWITP-',
  'https://www.youtube.com/embed/1dLeIdLddE8?si=D6dCxgISezbuFa4t',
  'https://www.youtube.com/embed/B76GfvpW-L0?si=21arfQD1P6ys9FFa',
  'https://www.youtube.com/embed/pc1LaQ-1bMA?si=XUWUb0Q8Ujsh_h_-',
  'https://www.youtube.com/embed/ffligM1ocpM?si=B6YSZ1mYbVRY0VwL',
  'https://www.youtube.com/embed/gCnxdmN0RoY'
];


export const TESTIMONIALS = [
  {
    title: `Highly recommend her for anyone!`,
    quote: `Lena has an amazing talent for capturing movement in a way that feels both dynamic and authentic. She recently filmed me doing an aerial hoop flow, and the results were stunning..`,
    imgSrc: UserImg1.src,
    initials: `Andrea MV`,
    date: `August 14, 2024`
  },
  {
    title: `She is very talented at what she does!`,
    quote: `Olena is such a joy to work with! She is incredibly professional, communicative, and thoughtful in her work. Olena shared her vision in advance..`,
    imgSrc: UserImg2.src,
    initials: `Paulina`,
    date: `August 14, 2024`
  },
  {
    title: `She’s the one to work with!`,
    quote: `I had the pleasure of working with an incredibly talented Lena, and I couldn’t recommend her enough! Her work is truly high quality, with every detail thoughtfully crafted to bring out the best in each project..`,
    imgSrc: UserImg3.src,
    initials: `Akvile`,
    date: `August 14, 2024`
  },
  {
    title: `I can’t recommend her enough!`,
    quote: `Working with Olena is always a pleasure. I’ve hired her multiple times because she’s reliable, professional, and a great communicator..`,
    imgSrc: UserImg4.src,
    initials: `Madison Smith`,
    date: `August 14, 2024`
  }
];
