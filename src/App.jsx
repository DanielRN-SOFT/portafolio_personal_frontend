import "./App.css";
import NavBar from "./components/layout/NavBar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Titulo from "./components/Titulo";
import TechStack from "./components/TechStack";
import Footer from "./components/layout/Footer";
import FormularioContacto from "./components/FormularioContacto";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <>
      <NavBar />
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Card de Proyectos */}
      <section id="proyectos" className="my-10">
        <Titulo
          subtitulo={"Portafolio"}
          titulo={"Mis"}
          span={"Proyectos"}
          colorTxt={"text-gray-900"}
        />
        <div className="my-10 flex justify-center items-center flex-col md:grid md:grid-cols-2 md:place-items-center lg:grid lg:grid-cols-3 lg:place-items-center">
          <Proyectos />
        </div>
      </section>

      {/* Stack de tecnologias */}
      <section id="habilidades" className="m5-15 bg-gray-900 pt-12 pb-20">
        <Titulo
          subtitulo={"Stack de Tecnologias"}
          titulo={"Mis"}
          span={"Habilidades"}
          colorTxt={"text-gray-100"}
        />
        <TechStack />
      </section>

      {/* Formulario de contacto y redes sociales */}
      <section id="contacto">
        <Titulo
          subtitulo={"Contacto"}
          titulo={"Informacion"}
          span={"de Contacto"}
          colorTxt={"text-gray-900"}
        />
        <FormularioContacto />
      </section>

      <Footer />
    </>
  );
}

export default App;
