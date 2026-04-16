const techs = {
  Frontend: [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  Herramientas: [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    {
      name: "VS Code",
      icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
    },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  ],
};


const TechStack = () => {
  return (
    <section className="my-10 sm:px-5 flex justify-center items-center sm:grid sm:grid-cols-3 sm:gap-20">
      {Object.entries(techs).map(([category, items]) => (
        <div key={category} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px flex-1 bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              {category}
            </span>
            <span className="h-px flex-1 bg-primary" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((tech) => (
              <div
                key={tech.name}
                className="tooltip tooltip-top"
                data-tip={tech.name}
              >
                <div className="w-17 h-17 rounded-xl bg-gray-100 border border-base-300 flex items-center justify-center hover:border-gray-500 hover:bg-gray-400 transition-colors cursor-default">
                  <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    
     
    </section>
  );
};

export default TechStack;
