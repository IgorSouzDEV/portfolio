import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sinta-se a vontade para entrar em contato comigo através dos meios
          abaixo. Estou sempre aberto a novas oportunidades e colaborações.
        </p>
        <div className="grid sm:grid-cols-2 justify-center">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold mb-4 text-start">
              Informações de Contato
            </h3>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-primary" />
              <a
                href="tel:+5521992849165"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +55(21)99284-9165
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-primary" />
              <a
                href="mailto:igor.dsouza91@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                igor.dsouza91@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-start">
              Siga nas redes sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="linkedin.com/in/igor-de-souza-aguiar-1259a9168/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/igoordesouz/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/igoordsouza/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
