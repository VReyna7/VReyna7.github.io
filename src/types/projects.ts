export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string; // URL o import de imagen
  github?: string; // opcional: enlace a repo
  demo?: string; // opcional: enlace a demo
}
