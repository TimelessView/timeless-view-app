/* interface VideographyServiceType {
  // children: ReactNode;
} */


import HeadingAndLabel from '@/components/UI/HeadingAndLabel';
import HighlightText from '@/components/Typography/HighlightText';
import SmallSpan from '@/components/Typography/SmallSpan';

function VideographyService(/*{  }: VideographyServiceType*/) {
  return (
    <div className={`flex flex-col gap-16`}>
      <div className={`flex flex-col gap-11`}>
        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus; <HighlightText text={`1 hour`} /> on location and <HighlightText text={`2 hours`} /> of basic video
            editing <SmallSpan text={`(video up to 1 minute).`} />
          </div>
        )} heading={`includes:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  from <HighlightText text={`$50 CAD/hour`} /> <SmallSpan text={`(The price will be calculated individually depending
            on the circumstances and request).`} />
          </div>
        )} heading={`price:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  <HighlightText text={`$100 CAD`} /> for each additional 2 hours of editing or for each additional
            30 seconds of video.
          </div>
        )} heading={`additional photos:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  Book a video shoot and receive <HighlightText text={`5 edited photos`} /> as a gift.
          </div>
        )} heading={(
          <>
            <HighlightText highlightColor={`yellow`} text={`"VIDEO SHOOT"`} /> PACKAGE
          </>
        )} />
      </div>
    </div>
  );
}

export default VideographyService;
