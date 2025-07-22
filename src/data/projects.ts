import { Project } from "../types/projects";
export const projects: Project[] = [
  {
    id: "1",
    title: "NovaMedic",
    description:
      "Desarrollo de una aplicación web orientada a conectar profesionales de la salud con usuarios, brindando servicios personalizados en áreas como medicina general, nutrición y psicología. Proyecto realizado en 2022, enfocado en mejorar el acceso a atención especializada mediante herramientas digitales.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "BOOSTRAP", "JS"],
    image: "./img/Nova_medic.webp",
    github: "https://github.com/VReyna7/Nova-Medic",
  },
  {
    id: "2",
    title: "Beectivo/Rent a  professional",
    description:
      "Proyecto tipo Workana, cuya meta principal era apoyar a freelancers salvadoreños y pequeñas empresas (Pymes) a encontrar oportunidades laborales por proyecto. Inició bajo el nombre 'Rent a Professional', pero actualmente se encuentra en proceso de rediseño y evolución bajo un nuevo nombre: Beectivo",
    tech: ["PHP", "Next.js", "Tailwind", "MySQL"],
    image: "./img/beectivo.webp",
    github: "https://github.com/VReyna7/rent_a_professional",
  },
  {
    id: "3",
    title: "SIAAS - Gestor de Archivos",
    description:
      "SIAAS (Sistema Inteligente de Administración de Archivos Simples) es un gestor de archivos por consola desarrollado en Python, diseñado para automatizar y organizar archivos a nivel local. Actualmente en etapa de pruebas, con planes de publicación futura",
    tech: ["Python", "Consola"],
    image: "./img/gestor_archivos.webp",
    github: "#proyectos",
  },
  {
    id: "4",
    title: "Inventario con estructura de datos",
    description:
      "Desarrollo de una aplicación que implementa diversas estructuras de datos (listas, pilas, colas, árboles, etc.) para la gestión de información. La interfaz gráfica fue construida utilizando Windows Forms.",
    tech: ["C#", "Windows Form", "SQL SERVER"],
    image: "./img/inventario.webp",
    github: "https://github.com/VReyna7/InventarioPED",
  },
];
