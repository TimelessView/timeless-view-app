'use client';

import {
  photographyAndVideographyPackages,
  photographyOptions,
  photographyPackageOptions,
  videographyOptions,
  videographyPackageOptions
} from '@/utils/variables';
import { Tooltip } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import Select from '@/components/UI/Select';
import Input from '@/components/UI/Input';
import ArrowIcon from '@/components/UI/ArrowIcon';
import HighlightText from '@/components/Typography/HighlightText';
import { serviceBookingSchema } from '@/utils/schemas';
import scrollTo from '@/utils/functions/scrollTo';
import axios from 'axios';
import { redirectToCheckout } from '@/utils/stripe';
import SmallSpan from '@/components/Typography/SmallSpan';
import { motion } from 'framer-motion';
import Heading from '@/components/Typography/Heading';

interface FillInFormType {
  mode: `photography` | `videography` | `success` | `error`;
  onClose: (value: boolean) => void;
  // children: ReactNode;
}

function FillInForm({ mode, onClose }: FillInFormType) {
  const [errors, setErrors] = useState<string>(``);
  const [loading, setLoading] = useState<boolean>(false);

  const [chosenSelectionOptionsService, setChosenSelectionOptionsService] =
    useState(mode === `photography` ? photographyOptions : videographyOptions);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chosenSelectionOptionsPackage, setChosenSelectionOptionsPackage] =
    useState(mode === `photography` ? photographyPackageOptions : videographyPackageOptions);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);

    switch (event.target.value) {
      case `photography`:
        setChosenSelectionOptionsService(photographyOptions);
        setChosenSelectionOptionsPackage(photographyPackageOptions);
        break;
      case `videography`:
        setChosenSelectionOptionsService(videographyOptions);
        setChosenSelectionOptionsPackage(videographyPackageOptions);
        break;
      case `both`:
        setChosenSelectionOptionsService(photographyOptions);
        setChosenSelectionOptionsPackage(photographyAndVideographyPackages);
        break;
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as {
      serviceChosen: string;
      name: string;
      email: string;
      phone: string;
      preferredWayOfCommunication: string;
    };


    const validation = serviceBookingSchema.safeParse(results);

    if (!validation.success) {
      setErrors(validation.error.errors[0].message);
      scrollTo(`form-heading`);
      return;
    }
    setLoading(true);

    const { sanitizedName, sanitizedEmail, sanitizedPhone, sanitizedPreferredWayOfCommunication } = {
      sanitizedName: results.name.trim(),
      sanitizedEmail: results.email.trim().toLowerCase(),
      sanitizedPhone: results.phone.trim(),
      sanitizedPreferredWayOfCommunication: results.preferredWayOfCommunication.trim(),
      // sanitizedPackage: results.package.trim()
    };

    try {
      const response = await axios.post('/api/create-checkout-session', {
        serviceChosen: results.serviceChosen,
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        preferredWayOfCommunication: sanitizedPreferredWayOfCommunication,
      });

      const session = response.data;

      if (session.id) {
        await redirectToCheckout(session.id);
        setLoading(false);
      } else {
        setLoading(false);
        setErrors('Failed to create Stripe Checkout session.');
      }
    } catch (error) {
      setLoading(false);
      setErrors('Something went wrong. Please try again later.');
      console.error(error);
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className={`mt-11 sm:px-8 px-2 relative`}>
        <div onClick={() => onClose(false)} className={`absolute -top-7 right-0 cursor-pointer
          transition-all duration-200 hover:rotate-180 hover:scale-110`}>
          <svg className={`w-20 lg:w-28 h-20 lg:h-28`} xmlns="http://www.w3.org/2000/svg" width="120" height="120"
               viewBox="0 0 125 125"
               fill="none">
            <path
              d="M62.5 7.8125C32.0312 7.8125 7.8125 32.0312 7.8125 62.5C7.8125 92.9688 32.0312 117.188 62.5 117.188C92.9688 117.188 117.188 92.9688 117.188 62.5C117.188 32.0312 92.9688 7.8125 62.5 7.8125ZM83.5938 89.8438L62.5 68.75L41.4062 89.8438L35.1562 83.5938L56.25 62.5L35.1562 41.4062L41.4062 35.1562L62.5 56.25L83.5938 35.1562L89.8438 41.4062L68.75 62.5L89.8438 83.5938L83.5938 89.8438Z"
              fill="#DFDFDF" />
          </svg>
        </div>
        <Heading animation={false} heading={(
          <div className={`font-raleway font-semibold sm:text-7xl text-5xl form-heading`}>
            Let’s fill in the form!
          </div>
        )} />

        {errors && (
          <div className={`text-red-500 p-4 mt-5 rounded-md mb-4 text-xl`}>
            <p>{errors}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className={`flex flex-col bp-938:grid md:rid-cols-2 mt-[60px] gap-10`}>
          <div className={`flex flex-col gap-8`}>
            <Select
              label={`service chosen`}
              name={`serviceChosen`}
              options={chosenSelectionOptionsService}
              onChange={handleServiceChange}
            />

            <Input disabled={loading} label={`your name`} name={`name`} placeholder={`e.g. Jane Doe`} />
            <Input disabled={loading} label={`your email`} name={`email`} placeholder={`e.g. jane.doe@gmil.com`} />
          </div>

          <div className={`flex flex-col gap-8 mb-14`}>
            <Input disabled={loading} label={`your phone`} name={`phone`} placeholder={`Your Phone`} />
            <Select label={`preferred way of communication`} name={`preferredWayOfCommunication`}
                    options={[
                      {
                        value: `email`,
                        label: `Via Email`
                      },
                      {
                        value: `phone`,
                        label: `Via Phone`
                      },
                      { value: `socialMedia`, label: `Via Social Media` }]} />
          </div>
          <div className={`text-left col-span-2`}>
            <p className="text-sm text-zinc-300 max-w-screen-lg leading-relaxed">
              After paying the deposit, check your email for a confirmation letter. For a photography session, fill
              in <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5-Q-ZXAZHJh5hYDhWrDYSrXYIgzAMhY23-e0_FtsKe26Xpg/viewform?usp=sf_link"
              className="underline underline-offset-2">
              <HighlightText text="this form" />
            </a>. For a videography session, complete <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVMZsarB889Te6zSYE4sG4mScanmwrZgCyOmp-xMcQqP9Qug/viewform?usp=sf_link"
              className="underline underline-offset-2">
              <HighlightText text="that form" />
            </a> after payment. The links would be attached in the confirmation letter as well sent to your email.
            </p>


            <div className={`flex lg:justify-between lg:items-center mt-10 mb-4 flex-col lg:flex-row gap-8 lg:gap-10`}>
              <button
                className={`font-federo uppercase justify-center text-yellow-500 px-16 py-7 border border-amber-500 sm:text-3xl text-xl text-nowrap flex lg:w-fit items-center gap-4 transition-all duration-200 active:text-white active:border-zinc-50
              ${loading ? `animate-pulse text-zinc-600 border-zinc-600` : ``}`}>
                {loading ? `Processing...` : `Pay 100$ CAD Deposit`}
                <div className={`hidden sm:flex`}>
                  <ArrowIcon color={loading ? `grey` : `yellow`} style={`large`} />
                </div>
              </button>
              <button
                disabled={loading}
                onClick={() => onClose(false)}
                type={`button`}
                className={`sm:text-3xl text-2xl bg-zinc-900 py-4 px-8 rounded-md text-zinc-500 hover:bg-zinc-950 transition-colors duration-200
                ${loading ? `animate-pulse cursor-not-allowed` : ``}`}>
                Close
              </button>
            </div>
            <div>
              <Tooltip
                title={(
                  <ul>
                    <li className={`text-[13px]`}>1. If the shoot takes place as scheduled, the deposit will be
                      deducted from the
                      total service cost.
                    </li>
                    <li className={`text-[13px]`}>2. If the shoot is canceled less than 72 hours before the scheduled
                      time,
                      the
                      $100 CAD deposit will be
                      non-refundable.
                    </li>
                  </ul>
                )}
                placement={`top`}>
                <p className={`text-[13px] text-zinc-300 max-w-screen-lg leading-relaxed mt-4`}>By clicking the &#34;Pay
                  100$
                  CAD
                  Deposit&#34; button, you agree to the <span
                    className={`underline underline-offset-2 cursor-pointer`}><HighlightText
                    text={`Terms and Conditions.`} />
                </span> <SmallSpan customClasses={`text-[12px] sm:hidden no-underline`}
                                   text={`(press to view)`} />
                </p>
              </Tooltip>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default FillInForm;
