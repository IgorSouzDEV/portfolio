import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Apaixonado por tecnologia e inovação</h3>

            <p className="text-muted-foreground">
              Estudante com foco em desenvolvimento web, onde estou me
              especializando em criar soluções inovadoras e eficientes para os
              desafios do mundo digital.
            </p>
            <p className="text-muted-foreground">
              Me especializando em desenvolver aplicações web modernas e
              responsivas, utilizando as últimas tecnologias e tendências do
              mercado, sempre buscando aprimorar minhas habilidades e melhores
              práticas do setor.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    {""}
                    Entre em contato
                </a>
                <a href="/curriculo.pdf" download="curriculo.pdf" className="px-6 py-2 rounded-full border border-primary text-primary
                hover:bg-primary/10 transition-colors duration-300">
                    Download currículo
                </a>

            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">Criação de aplicações web modernas e responsivas</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Javascript e React</h4>
                  <p className="text-muted-foreground">Utilizando os principais frameworks e bibliotecas</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Transparência e compromisso</h4>
                  <p className="text-muted-foreground">Prezando sempre pela entrega de projetos de alta qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
