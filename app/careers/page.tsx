"use client";

import { useRef, useState, type FormEvent, type DragEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const formContainer = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.35, staggerChildren: 0.12 },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const inputClass =
  "w-full border-0 border-b border-museum-dark/20 bg-transparent py-3 text-base font-light tracking-wide text-museum-dark outline-none transition-colors placeholder:text-museum-dark/35 focus:border-asilsa-gold sm:text-sm";

export default function CareersPage() {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setCvFile(file);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (cvFile) formData.set("cv", cvFile);

    setStatus("sending");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-svh bg-asilsa-cream px-fluid pb-[calc(7rem+env(safe-area-inset-bottom))] pt-6 sm:pb-20 sm:pt-8 md:pt-12">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl font-light tracking-wide text-museum-dark md:text-5xl"
          >
            {t.careers.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed tracking-wide text-gray-500 md:text-base"
          >
            {t.careers.subtitle}
          </motion.p>
          <motion.span
            variants={fadeInUp}
            className="mx-auto mt-8 block h-px w-12 bg-asilsa-gold"
          />
        </motion.div>

        <motion.form
          initial="hidden"
          animate="visible"
          variants={formContainer}
          onSubmit={handleSubmit}
          className="mt-14 space-y-10 md:mt-16"
        >
          <motion.div variants={fieldVariant}>
            <label
              htmlFor="name"
              className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-museum-dark/45"
            >
              {t.careers.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t.careers.namePlaceholder}
              className={inputClass}
            />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label
              htmlFor="email"
              className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-museum-dark/45"
            >
              {t.careers.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t.careers.emailPlaceholder}
              className={inputClass}
            />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label
              htmlFor="position"
              className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-museum-dark/45"
            >
              {t.careers.position}
            </label>
            <input
              id="position"
              name="position"
              type="text"
              required
              placeholder={t.careers.positionPlaceholder}
              className={inputClass}
            />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label
              htmlFor="message"
              className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-museum-dark/45"
            >
              {t.careers.about}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t.careers.aboutPlaceholder}
              className={`${inputClass} resize-none`}
            />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-museum-dark/45">
              {t.careers.cv}
            </label>
            <div
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={`flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed px-6 py-12 transition-colors duration-300 ${
                isDragging
                  ? "border-asilsa-gold bg-asilsa-beige/40"
                  : "border-museum-dark/25 hover:border-asilsa-gold/70 hover:bg-asilsa-beige/30"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-8 w-8 text-museum-dark/40"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0 4 4m-4-4-4 4M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
                />
              </svg>
              <p className="max-w-xs text-center text-sm font-light tracking-wide text-museum-dark/55">
                {cvFile?.name ?? t.careers.cvHint}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
            </div>
          </motion.div>

          <motion.div variants={fieldVariant} className="pt-4 text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full px-10 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? t.careers.sending : t.careers.submit}
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm font-light text-museum-dark/70">
                {t.careers.success}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-light text-red-800/80">
                {t.careers.error}
              </p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
