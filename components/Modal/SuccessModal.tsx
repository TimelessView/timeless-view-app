import Heading from '@/components/Typography/Heading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import ContactMeBadge from '@/components/UI/ContactMeBadge';
import { OLENAS_INSTAGRAM } from '@/utils/variables';

interface SuccessModalType {
  onClose: (value: boolean) => void;
  // children: ReactNode;
}

function SuccessModal({ onClose }: SuccessModalType) {

  function handleCloseSuccessForm() {
    onClose(false);
  }

  return (
    <>
      <div className={`mt-11 sm:px-8 px-2 relative`}>
        <div onClick={() => handleCloseSuccessForm()} className={`absolute -top-7 right-0 cursor-pointer
          transition-all duration-200 hover:rotate-180 hover:scale-110`}>
          <svg className={`w-20 lg:w-28 h-20 lg:h-28`} xmlns="http://www.w3.org/2000/svg" width="120"
               height="120"
               viewBox="0 0 125 125"
               fill="none">
            <path
              d="M62.5 7.8125C32.0312 7.8125 7.8125 32.0312 7.8125 62.5C7.8125 92.9688 32.0312 117.188 62.5 117.188C92.9688 117.188 117.188 92.9688 117.188 62.5C117.188 32.0312 92.9688 7.8125 62.5 7.8125ZM83.5938 89.8438L62.5 68.75L41.4062 89.8438L35.1562 83.5938L56.25 62.5L35.1562 41.4062L41.4062 35.1562L62.5 56.25L83.5938 35.1562L89.8438 41.4062L68.75 62.5L89.8438 83.5938L83.5938 89.8438Z"
              fill="#DFDFDF" />
          </svg>
        </div>
        <Heading animation={false} heading={(
          <div className={`font-raleway font-semibold sm:text-7xl text-5xl max-w-screen-md mb-16`}>
            Thanks! The deposit
            was successfully paid!
          </div>
        )} />
        <div className={`flex flex-col gap-5`}>
          <Paragraph text={(
            <>
              Thank you for making your deposit payment for my photography/videography services!
              I’ve sent <HighlightText highlightColor={`yellow`}
                                       text={`additional details about your booking to your email.`} />
            </>
          )} />

          <Paragraph text={(
            <>
              Please take a moment to fill out the required Google form to help me better understand your needs and
              preferences: <a href="" className={`underline text-yellow-400 underline-offset-2`}><HighlightText
              highlightColor={`yellow`}
              text={`Complete the Form Here.`} /></a>  </>
          )} />

          <div className={`flex lg:justify-between flex-col lg:flex-row gap-14 lg:gap-0`}>
            <div>
              <button
                onClick={() => handleCloseSuccessForm()}
                type={`button`}
                className={`sm:text-3xl text-2xl bg-zinc-900 py-4 px-8 rounded-md text-zinc-500 hover:bg-zinc-950 transition-colors duration-200 mt-12
                flex w-full lg:w-fit justify-center lg:justify-start`}>
                Close Form
              </button>
            </div>
            <div className={`flex flex-col gap-7`}>
              <ContactMeBadge span={`contact me at`} href={`mailto:timelessview24@gmail.com`}
                              content={`timelessview24@gmail.com`} />

              <ContactMeBadge span={`my phone number`} href={`tel:+1825288279`}
                              content={`+1 825 288 279`} />
              <ContactMeBadge span={`my instagram`} content={`CONTENT_CREATOR_OLENA`}
                              href={OLENAS_INSTAGRAM} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessModal;
