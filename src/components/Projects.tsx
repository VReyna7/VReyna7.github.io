import { projects } from "../data/projects";
import { Card } from "flowbite-react";
import { Badge } from "flowbite-react";
import { Button } from "flowbite-react";

export const Proyectos = () => {
  return (
    <div id="proyectos" className="mb-12 pt-5">
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl !bg-white/5 p-2 text-white backdrop-blur dark:!border-white/30"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 h-64 text-gray-300 md:h-42">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} color="gray">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="dark">Codigo</Button>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="blue">Demo</Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
