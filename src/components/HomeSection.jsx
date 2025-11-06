import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Oi, eu sou o</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Igor
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              de Souza Aguiar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3 mt-4">
            Estudante desenvolvedor front-end, com foco em Javascript, React,
            Next.js e Tailwind.
          </p>
          <div className="pt-4 mt-5 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Conheça o meu trabalho
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
