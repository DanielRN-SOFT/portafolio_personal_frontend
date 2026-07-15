import "./App.css";
import NavBar from "./components/layout/NavBar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Titulo from "./components/Titulo";
import TechStack from "./components/TechStack";
import Footer from "./components/layout/Footer";
import FormularioContacto from "./components/FormularioContacto";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <>
      <NavBar />
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Sobre mi */}
      <section id="sobre-mi" className="pt-10 pb-20 bg-neutral">
        <Titulo
          subtitulo={"¿Quien soy?"}
          titulo={"Sobre"}
          span={"Mi"}
          colorTxt={"text-gray-100"}
          oscuro
        />

        <SobreMi />
      </section>

      {/* Card de Proyectos */}
      <section
        id="proyectos"
        className="py-20 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950/95"
      >
        <Titulo
          subtitulo={"Portafolio"}
          titulo={"Mis"}
          span={"Proyectos"}
          colorTxt={"text-white"}
          oscuro
        />
        <div className="my-5 flex justify-center items-center flex-col md:grid md:grid-cols-2 md:place-items-center lg:grid lg:grid-cols-3 lg:place-items-center">
          <Proyectos />
        </div>
      </section>

      {/* Stack de tecnologias */}
      <section id="habilidades" className="bg-neutral pt-10 pb-20">
        <Titulo
          subtitulo={"Stack de Tecnologias"}
          titulo={"Mis"}
          span={"Habilidades"}
          colorTxt={"text-gray-100"}
          oscuro
        />
        <TechStack />
      </section>

      {/* Formulario de contacto y redes sociales */}
      <section
        id="contacto"
        className="py-10 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950/95"
      >
        <Titulo
          subtitulo={"Contacto"}
          titulo={"Mi"}
          span={"Contacto"}
          colorTxt={"text-white"}
          oscuro
        />
        <FormularioContacto />
      </section>

      <Footer />
    </>
  );
}

export default App;
