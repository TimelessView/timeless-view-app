'use client';

/* interface ConsultationServiceType {
  // children: ReactNode;
} */


import { FormEvent, useState } from 'react';
import { consultationFormSchema } from '@/utils/schemas';
import scrollTo from '@/utils/functions/scrollTo';
import Input from '@/components/UI/Input';
import FormButton from '@/components/UI/FormButton';
import axios from 'axios';

function ConsultationService(/*{  }: ConsultationServiceType*/) {
  const [formStage, setFormStage] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<string>(``);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setErrors(``);
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { name: string, email: string, phone: string };

    const validateForm = consultationFormSchema.safeParse(results);

    if (!validateForm.success) {
      setErrors(validateForm.error.errors[0].message);
      return;
    }
    setLoading(true);
    setErrors(``);

    const { name, email, phone } = validateForm.data;

    const { sanitizedEmail, sanitizedName, sanitizedPhone } = {
      sanitizedEmail: email.trim().toLowerCase(),
      sanitizedName: name.trim(),
      sanitizedPhone: phone.trim()
    };

    try {
      const response = await axios.post(`/api/resend`, {
        subject: `A New Consultation Request is made at TimelessView!`,
        html: `
        <div style="font-family: 'Raleway', sans-serif">
          <h1>
            A new consultation request has been made <br> from your <b>timelessview</b> website. The details are as follows:
          </h1>
          <div>
            <h3>Name: ${sanitizedName};</h3>
            <h3>Email: ${sanitizedEmail};</h3>
            <h3>Phone: ${sanitizedPhone}.</h3>
          </div>
          <div style="font-size: 0.875rem;">
            Please reach out to this person as soon as possible. <br>
            <span>Date of request: ${new Date().toLocaleDateString()}</span>
          </div>
        </div>`
      });

      if (response.data.status === `success`) {
        scrollTo(`myServices`);
        setFormStage(2);
        setErrors(``);
        setLoading(false);
      }

    } catch (e) {
      // console.log(`Executing error in ConsultationService: `, e);
      scrollTo(`myServices`);
      setErrors(`Something went wrong. Please try again later.`);
      setLoading(false);
      console.error(e);
      return;
    }

  }


  const firstFormStage = (
    <>
      <div className={`flex flex-col gap-12 mb-20 w-full`}>
        <Input disabled={loading} name={`name`} label={`your name`} placeholder={`e.g. Jane Doe`} />
        <Input disabled={loading} name={`email`} label={`your email`} placeholder={`e.g. jane.doe@gmail.com`} />
        <Input disabled={loading} type={`number`} name={`phone`} label={`your phone`} placeholder={`Your Phone`} />
      </div>
      <div className={`mb-28`}>
        <FormButton loading={loading} label={`consult me`} />
      </div>
    </>
  );

  const secondFormStage = (
    <>
      <div className={`text-amber-400 text-lg`}>Thank you for reaching out to me! I will get back to you as soon as
        possible.
      </div>
    </>
  );


  return (
    <>
      {errors && <div className={`text-red-500 text-lg mb-4`}>{errors}</div>}
      <form onSubmit={handleSubmit} className={`pr-4 sm:pr-0`}>
        {formStage === 1 && firstFormStage}
        {formStage === 2 && secondFormStage}
      </form>
    </>
  );
}

export default ConsultationService;
