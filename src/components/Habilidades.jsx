import { useState } from "react"
import { cn } from "@/lib/utils"


const habilidades = [
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "JavaScript", level:60, category: "Frontend"},
    {name: "React", level: 40, category: "Frontend"},
    {name: "Tailwind CSS", level: 40, category: "Frontend"},
    {name: "TypeScript", level: 20, category: "Frontend"},
    {name: "Next.js", level: 10, category: "Frontend"},
    {name: "Git/GitHub", level: 65, category: "Ferramentas"},
    {name: "Figma", level: 60, category: "Ferramentas"},
    {name: "VS Code", level: 60, category: "Ferramentas"},
]

const categories = ["Todas", ...new Set(habilidades.map(skill => skill.category))]



export const Habilidades = () => {
    const [activeCategory, setActiveCategory] = useState("Todas")
    const filteredSkills = habilidades.filter((skill) => activeCategory === "Todas" || skill.category === activeCategory)
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Minhas 
                <span className="text-primary"> Habilidades</span></h2>

            <div className="flex flex-wrap justify-center mb-12 gap-4">
                {categories.map((category, index) => (
                    <button

                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, index) => (
                    <div key={index} className="p-6 bg-card rounded-lg shadow-xs card-hover">
                        <h3 className="text-left mb-4 font-semibold">{skill.name}</h3>
                        <div className="w-full bg-secondary/50 rounded-full h-4 dark:bg-gray-700">
                            <div className="bg-primary h-4 rounded-full transition-all duration-500 ease-in-out"
                                 style={{width: `${skill.level}%`}}></div>
                        </div>
                        <p className="text-right text-sm text-muted-foreground mt-1">{skill.level}%</p>
                    </div>
                ))}
            </div>
        </div>

    </section>
}