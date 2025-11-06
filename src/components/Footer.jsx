import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative mt-12 pt-8 flex flex-wrap justify-between items-center">
            {""}
            <p className="text-muted-foreground text-sm"> &copy; {new Date().getFullYear()} Igor de Souza Aguiar, todos os direitos reservados.</p>
        <a href="#home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp size={20}/>
        </a>
        </footer>
    )
}