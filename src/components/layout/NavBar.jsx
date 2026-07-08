import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contacto", label: "Contacto" },
];

const NavBar = () => {
  const [activo, setActivo] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivo(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label }) => {
    const isActive = activo === id;
    return (
      <a
        href={`#${id}`}
        className={`relative px-1 py-1.5 text-sm font-medium tracking-normal transition-colors duration-200 ${
          isActive
            ? "text-primary"
            : "text-base-content/60 hover:text-base-content"
        }`}
      >
        {label}
        <span
          className={`absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary transition-transform duration-200 origin-left ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
    );
  };

  return (
    <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur px-4 sm:px-6">
      <div className="navbar-start gap-2">
        {/* Dropdown móvil */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-1 mt-3 w-56 gap-1 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl shadow-primary/5"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink id={item.id} label={item.label} />
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-primary"
        >
          Daniel Felipe Ramírez Navarro
        </a>
      </div>

      {/* Nav desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink id={item.id} label={item.label} />
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end" />
    </div>
  );
};

export default NavBar;
