'use client';
import React, { useState, useRef } from 'react';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';

// Types
interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const response = await fetch('https://formspree.io/f/myzggwzz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(
            'Il y a eu un problème avec votre soumission: ' +
              JSON.stringify(data['errors'])
          );
        } else {
          alert('Il y a eu un problème avec votre soumission.');
        }
      }
    } catch (error) {
      alert(
        'Il y a eu une erreur en envoyant le formulaire: ' +
          (error as Error).message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setIsSubmitted(false);
  };

  return (
    <section className="section container" id="contact">
      <motion.div
        className="max-w-2xl mx-auto p-4 md:p-8 shadow-input bg-[#f5f5f5] flex flex-col gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="sub-title w-full">Contactez votre garagiste</h2>

        <div className="flex flex-col gap-2 justify-around w-full">
          <div className="flex gap-4 items-center justify-center ">
            <CiMail />
            <a href="mailto:mustaphatouay@hotmail.com" className="">
              jimmyfeltmann24@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <MdOutlineSmartphone />
            <a href="tel:0617122321">06 70 94 28 02</a>
          </div>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col gap-4">
            <p className="text-purple font-bold mt-4">Message envoyé !</p>
            <button
              className="border border-neutral-200 hover:border-neutral-400 py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-500"
              onClick={handleReset}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form ref={formRef} className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">Nom</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Nom"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Prénom</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Prénom"
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="exemple@gmail.com"
                type="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                className="focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 h-24 w-full border-none shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 bg-gray-50"
                required
              />
            </LabelInputContainer>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-neutral-200 hover:border-neutral-400 py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-500"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} &rarr;
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
