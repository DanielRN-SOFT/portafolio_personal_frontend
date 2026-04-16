import "./App.css";
import NavBar from "./components/layout/NavBar";
import HeroSection from "./components/layout/HeroSection";
import Card from "./components/Card";
import Titulo from "./components/Titulo";
import TechStack from "./components/TechStack";
import Footer from "./components/layout/Footer";
import FormularioContacto from "./components/FormularioContacto";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />

      {/* Card de Proyectos */}
      <main id="proyectos" className="my-10">
        <Titulo
          subtitulo={"Portafolio"}
          titulo={"Mis"}
          span={"Proyectos"}
          colorTxt={"text-gray-900"}
        />
        <section className="my-10 flex justify-center items-center flex-col sm:grid sm:grid-cols-3 place-items-center">
          <Card />
          <Card />
          <Card />
        </section>
      </main>

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
      <section>
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
