import { ArrowRight, ExternalLink, Github } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "TijuTech",
    description: "Landing page para empresa de manutenção de celulares.",
    image:
    "../../public/projects/preview.png",
    tags: ["React", "TailwindCSS", "Vite"],
    demoUrl: "https://tijutech-landing.vercel.app",
    githubUrl: "https://github.com/IgorSouzDEV/tijutech-landing",
  },
  {
    id: 2,
    title: "Em desenvolvimento",
    description: "Estou trabalhando nisso",
    image:
      "https://plus.unsplash.com/premium_photo-1682693240729-8f46e509c73e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Construindo"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Em desenvolvimento",
    description: "Estou trabalhando nisso",
    image:
      "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Construindo"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4-xl font-bold mb-4 text-center">
          {" "}
          Alguns <span className="text-primary">projetos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui você pode ver alguns dos meus trabalhos. Clique em cada projeto
          para ver mais detalhes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={projects.image}
                  alt={projects.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      href={projects.demoUrl}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      href={projects.githubUrl}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button flex items-center w-fit mx-auto" 
          target="_blank"
          href="https://github.com/IgorSouzDEV">
            Visite o meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
