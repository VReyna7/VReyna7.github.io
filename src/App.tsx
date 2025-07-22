import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import victorpng from "./img/victor.webp";
import HeroSection from "./components/HeroSection";
import Proyectos from "./components/Projects";
import SobreMi from "./components/AboutMe";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden !bg-black text-white">
      {/* Header fijo */}
      <header className="fixed top-0 right-0 left-0 z-50 mx-1">
        <Navbar fluid rounded className="!bg-black/90 backdrop-blur-md">
          <NavbarBrand href="#">
            <span className="self-center font-[Bitcount] text-3xl font-semibold whitespace-nowrap dark:text-white">
              V-Reyna
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" className="text-white dark:text-white">
              Inicio
            </NavbarLink>
            <NavbarLink href="#sobre-mi" className="text-white dark:text-white">
              Sobre mi
            </NavbarLink>
            <NavbarLink
              href="#proyectos"
              className="text-white dark:text-white"
            >
              Proyectos
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>

      <main className="!bg-black">
        <article className="relative flex min-h-screen flex-col items-center justify-center bg-black pt-24 text-white">
          <section className="flex flex-col items-center justify-center">
            <img
              src={victorpng}
              alt="Foto de perfil"
              className="aspect-square w-40 rounded-full object-cover object-top sm:w-48 md:w-60 lg:w-72"
            />
            <HeroSection />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 2.5,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mt-6 flex justify-center"
            >
              <a
                href="#sobre-mi"
                className="cursor-pointer !bg-black text-white"
              >
                <MdOutlineKeyboardDoubleArrowDown size={40} />
              </a>
            </motion.div>
          </section>
        </article>
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>
      </main>

      <footer className="!bg-black py-8 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-gray-400">
            © 2025 V-Reyna. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
