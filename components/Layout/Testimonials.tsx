/* interface TestimonialsType {
  // children: ReactNode;
} */


import Heading from '@/components/Typography/Heading';
import HighlightLetter from '@/components/Typography/HighlightLetter';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';

function Testimonials(/*{  }: TestimonialsType*/) {
  return (
    <section>
      <div className={`w-full max-w-screen-xl m-auto px-4 sm:px-9 flex flex-col gap-9`}>
        <div className={`ml-auto`}>
          <Heading heading={(
            <div className={`flex justify-end flex-col`}>
              <div>
                <HighlightLetter text={`W`} />hat my clients
              </div>
              <div>
                see <HighlightLetter text={`T`} />hrough the <HighlightLetter text={`L`} />ens
              </div>
            </div>
          )} />
        </div>
        <div className={`ml-auto mb-12`}>
          <Paragraph text={(
            <>
              From captivating brand stories to heartfelt personal narratives, my videos are crafted to <HighlightText
              text={`inspire,
                engage, and leave a lasting impact.`} highlightColor={`yellow`} /></>
          )} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
