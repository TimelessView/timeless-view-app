/* interface PhotographyServiceType {
  // children: ReactNode;
} */


import HeadingAndLabel from '@/components/UI/HeadingAndLabel';
import HighlightText from '@/components/Typography/HighlightText';
import SmallSpan from '@/components/Typography/SmallSpan';

function PhotographyService(/*{  }: PhotographyServiceType*/) {
  return (
    <div className={`flex flex-col gap-16`}>
      <div className={`flex flex-col gap-11`}>
        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus; <HighlightText text={`1 hour`} /> on location and <HighlightText text={`2 hours`} /> of editing
            <SmallSpan text={` (up to 20 photos).`} />
          </div>
        )} heading={`includes:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  from <HighlightText text={`$50 CAD/hour`} />
            <SmallSpan text={` (The price will be calculated individually depending
            on the circumstances and request).`} />
          </div>
        )} heading={`price:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus; <HighlightText text={`$10 CAD`} /> Per edited Image
          </div>
        )} heading={`additional photos:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  Book a photo session and receive a <HighlightText
            text={`complimentary behind-the-scenes video `} />
            <SmallSpan text={` (up to 30 seconds).`} />
          </div>
        )} heading={(
          <div>
            <HighlightText highlightColor={`yellow`} text={`"PHOTO SESSION"`} /> PACKAGE
          </div>
        )} />
      </div>
    </div>
  );
}

export default PhotographyService;
