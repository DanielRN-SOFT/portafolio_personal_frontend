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
        className={`relative px-1 py-1.5 font-mono text-sm tracking-tight transition-colors duration-200 ${
          isActive
            ? "text-primary"
            : "text-neutral-content/50 hover:text-neutral-content"
        }`}
      >
        <span
          className={`mr-1 ${isActive ? "text-primary" : "text-neutral-content/20"}`}
        >
          $
        </span>
        {label}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full bg-primary transition-transform duration-200 origin-left ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
    );
  };

  return (
    <div className="navbar sticky top-0 z-50 border-b border-neutral-content/10 bg-neutral/95 backdrop-blur px-4 sm:px-6">
      <div className="navbar-start gap-2">
        {/* Dropdown móvil */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden text-neutral-content/70"
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
            className="menu menu-sm dropdown-content z-1 mt-3 w-56 gap-1 rounded-box border border-neutral-content/10 bg-neutral p-2 shadow-xl shadow-black/30"
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
          className="flex items-center gap-2 text-base font-mono font-semibold tracking-tight text-neutral-content"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0 text-primary"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="14"
              rx="1.5"
              className="fill-current"
            />
            <path
              d="M4 5L6.5 8L4 11"
              stroke="currentColor"
              className="text-neutral"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11H12"
              stroke="currentColor"
              className="text-neutral"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-neutral-content/40">~/</span>
          Daniel Ramírez
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
