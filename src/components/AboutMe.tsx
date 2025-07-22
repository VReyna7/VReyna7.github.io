// components/SobreMi.tsx
import { Badge, Card } from "flowbite-react";
import { FaCode } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { useState } from "react";
export const SobreMi = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  return (
    <article
      id="sobre-mi"
      className="mt-24 flex w-full items-start justify-center bg-black py-20"
    >
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="mb-2 text-center text-xl font-bold">Sobre mí</h2>
          <h3 className="mb-2 text-center font-sans text-4xl font-bold md:text-5xl">
            Creando Soluciones Backend
          </h3>
          <p className="mb-8 text-center font-sans text-lg font-bold text-[#666666] md:text-xl">
            Programador Back-end con experiencia en el diseño y construcción de
            sistemas web robustos y eficientes. <br />
            explorando nuevas tecnologías para aportar valor en cada proyecto
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
            {/* Historia */}
            <div className="lg:col-span-5">
              <Card className="rounded-2xl border-gray-300 !bg-black dark:!border-white/40">
                <h5 className="text-2xl font-bold text-white">Mi historia</h5>
                <p className="mt-2 text-gray-400">
                  Mi camino en la programación comenzó en el bachillerato y
                  desde entonces no he parado de aprender. He tenido la
                  oportunidad de colaborar en proyectos de migración de sistemas
                  web que me han enseñado mucho sobre el mundo real del
                  desarrollo. También me gusta crear mis propios proyectos para
                  experimentar y poner a prueba lo que voy aprendiendo. Ahora
                  que estoy en la universidad estudiando ingeniería, me he
                  enfocado principalmente en Python porque me fascina lo
                  versátil que es.
                </p>
              </Card>
            </div>

            {/* Habilidades */}
            <div className="self-center lg:col-span-3">
              <Card className="mt-0 rounded-2xl !bg-black md:mt-24 dark:!border-white/50">
                <h5 className="flex items-center text-sm font-bold text-white md:text-2xl">
                  <FaCode size={30} className="mr-2" />
                  Programación
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "C#",
                    "PHP",
                    "Java",
                    "TypeScript",
                    "Flask",
                    "Django",
                    "SQL",
                  ].map((skill) => (
                    <Badge key={skill} color="gray" className="justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Experiencia */}
            <div className="lg:col-span-8">
              <h5 className="mt-8 mb-4 flex items-center text-2xl font-bold text-white md:mt-0">
                <IoMdBriefcase size={30} className="mr-2" />
                Experiencia laboral
              </h5>

              {/* Proyecto BAES */}
              <Card className="rounded-2xl !bg-black dark:!border-white/40">
                <label className="font-bold">
                  Proyecto BAES - Migración de tecnologías <br />
                  <span className="font-thin">Servicios Profesionales</span>
                  <br />
                  <span className="font-thin text-gray-400">
                    El Salvador, San Salvador
                  </span>
                </label>
                <p className="mt-0 text-gray-400">
                  Tuve la oportunidad de contribuir en un proyecto de
                  actualización y migración tecnológica, aportando experiencia
                  en la automatización de diversas secciones del sitio web y
                  optimizando su rendimiento en comparación con la versión
                  anterior. La migración se enfocó en adoptar tecnologías
                  modernas y escalables.
                  {!expanded ? (
                    <>
                      ...{" "}
                      <button
                        className="ml-1 text-blue-400 underline hover:text-blue-300"
                        onClick={() => setExpanded(true)}
                      >
                        leer más
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mt-2">
                        <ul className="mx-12 list-disc">
                          <li className="mt-2">
                            Implementamos mejoras significativas en el SEO
                            utilizando herramientas como Lighthouse y PageSpeed
                            Insights.
                          </li>
                          <li className="mt-2">
                            Apoyé en la elevación del puntaje SEO de 30 a 79,
                            mejorando la visibilidad del sitio.
                          </li>
                          <li className="mt-2 mb-2">
                            Implementé una solución para gestionar contenido de
                            forma dinámica en lugar de múltiples archivos PHP
                            estáticos.
                          </li>
                        </ul>
                      </div>
                      <button
                        className="ml-1 text-blue-400 underline hover:text-blue-300"
                        onClick={() => setExpanded(false)}
                      >
                        leer menos
                      </button>
                    </>
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "PHP",
                    "Bitbucket",
                    "Tailwind",
                    "Jira",
                    "LightHouse",
                    "HTML/CSS",
                  ].map((tech) => (
                    <Badge key={tech} color="purple" className="justify-center">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Telus */}
              <Card className="mt-8 rounded-2xl !bg-black dark:!border-white/40">
                <label className="font-bold">
                  Soporte Técnico - Telus Digital (Prácticas) <br />
                  <span className="font-thin">
                    Prácticas laborales - Nov 2023
                  </span>
                  <br />
                  <span className="font-thin text-gray-400">
                    El Salvador, San Salvador
                  </span>
                </label>
                <p className="mt-0 text-gray-400">
                  Una experiencia completa y enriquecedora donde pude estar
                  implicado en el área de soporte técnico en TELUS
                  INTERNATIONAL.
                  {!expanded2 ? (
                    <>
                      ...{" "}
                      <button
                        className="ml-1 text-blue-400 underline hover:text-blue-300"
                        onClick={() => setExpanded2(true)}
                      >
                        leer más
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mt-2">
                        <ul className="mx-12 list-disc">
                          <li className="mt-2">
                            Revisión de fallos a equipos computacionales
                          </li>
                          <li className="mt-2">
                            Manejo de problemas en tiempo real y complejos
                          </li>
                          <li className="mt-2 mb-2">
                            Aprendizaje sobre procesos estructurados de soporte
                            técnico
                          </li>
                        </ul>
                      </div>
                      <button
                        className="ml-1 text-blue-400 underline hover:text-blue-300"
                        onClick={() => setExpanded2(false)}
                      >
                        leer menos
                      </button>
                    </>
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "OS",
                    "Soporte Técnico",
                    "Copias de seguridad",
                    "Creación de imágenes específicas de sistemas operativos",
                  ].map((tech) => (
                    <Badge key={tech} color="purple" className="justify-center">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SobreMi;
