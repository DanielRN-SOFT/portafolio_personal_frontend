import { useState, useEffect } from "react";
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
        rootMargin: "-80px 0px -50% 0px", // ajusta según altura navbar
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                className={`relative transition-all duration-300 ${
                  activo === "inicio"
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : ""
                }`}
                href="#inicio"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className={`relative transition-all duration-300 ${
                  activo === "proyectos"
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : ""
                }`}
                href="#proyectos"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                className={`relative transition-all duration-300 ${
                  activo === "habilidades"
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : ""
                }`}
                href="#habilidades"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                className={`relative transition-all duration-300 ${
                  activo === "contacto"
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : ""
                }`}
                href="#contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-primary">
          Daniel Felipe Ramírez Navarro
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className={`relative transition-all duration-300 ${
                activo === "inicio"
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : ""
              }`}
              href="#inicio"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className={`relative transition-all duration-300 ${
                activo === "proyectos"
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : ""
              }`}
              href="#proyectos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className={`relative transition-all duration-300 ${
                activo === "habilidades"
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : ""
              }`}
              href="#habilidades"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className={`relative transition-all duration-300 ${
                activo === "contacto"
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : ""
              }`}
              href="#contacto"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input type="hidden" />
      </div>
    </div>
  );
};

export default NavBar;
