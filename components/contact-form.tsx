"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Please enter your company name."),
  message: z.string().min(20, "Please provide at least 20 characters.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <form className="tech-panel space-y-4 p-6" onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-slate-200">Full name</label>
        <input id="name" {...register("name")} className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm" />
        {errors.name ? <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-slate-200">Business email</label>
        <input id="email" type="email" {...register("email")} className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm" />
        {errors.email ? <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p> : null}
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm text-slate-200">Company</label>
        <input id="company" {...register("company")} className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm" />
        {errors.company ? <p className="mt-1 text-xs text-rose-400">{errors.company.message}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-slate-200">Project details</label>
        <textarea id="message" rows={5} {...register("message")} className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm" />
        {errors.message ? <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p> : null}
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Send inquiry"}
      </Button>
      {submitted ? <p className="text-sm text-cyan">Demo submission successful. We will contact you shortly.</p> : null}
    </form>
  );
}
