import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Toaster, toast } from "react-hot-toast";

const icons = [
  {
    Icon: DiGithubBadge,
    size: 42,
    url: "https://github.com/VReyna7",
    tooltip: "Visita mi GitHub",
  },
  {
    Icon: FaLinkedin,
    size: 30,
    url: "https://www.linkedin.com/in/victor-reyna-168a78290/",
    tooltip: "Mira mi LinkedIn",
  },
  {
    Icon: BiLogoGmail,
    size: 30,
    url: "mailto:veduardo239@gmail.com",
    copy: "veduardo239@gmail.com",
    tooltip: "Copia mi Gmail",
  },
  {
    Icon: PiReadCvLogoFill,
    size: 30,
    url: "/files/CV_Victor_Reyna.pdf",
    tooltip: "Descarga mi CV",
  },
];

const text = "¡Hola, soy Victor Reyna!";

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3, type: "spring", stiffness: 55 },
  }),
};

export default function HeroSection() {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Correo copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Error al copiar el correo");
    }
  };

  return (
    <section className="px-4 py-10 text-center">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        {text.split("").map((char, index) => {
          const displayChar = char === " " ? "\u00A0" : char;
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.2 }}
            >
              {displayChar}
            </motion.span>
          );
        })}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl"
        onAnimationComplete={() => setTextAnimationComplete(true)}
      >
        Desarrollador Back-end · Estudiante de Ingeniería · Apasionado por IA y
        DevOps
      </motion.p>

      <div className="mt-6 flex h-14 items-center justify-center">
        {textAnimationComplete && (
          <div className="flex flex-wrap items-center justify-center gap-6">
            {icons.map(({ Icon, size, url, copy, tooltip }, i) => {
              const isEmail = typeof copy === "string";
              const isDownload = url.endsWith(".pdf");

              if (isEmail) {
                return (
                  <div key={i} className="group relative">
                    <motion.button
                      onClick={() => handleCopyEmail(copy)}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                      className="text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      <Icon size={size} />
                    </motion.button>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {copied ? "¡Correo copiado!" : tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 transform border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={i} className="group relative">
                  <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={isDownload}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    className="text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    <Icon size={size} />
                  </motion.a>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 transform border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
