import "./App.css";
import NavBar from "./components/layout/NavBar";
import HeroSection from "./components/layout/HeroSection";
import Card from "./components/layout/Card";
import Titulo from "./components/layout/Titulo";
import TechStack from "./components/layout/TechStack";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />

      {/* Card de Proyectos */}
      <main id="proyectos" className="my-10">
        <Titulo subtitulo={"Portafolio"} titulo={"Mis"} span={"Proyectos"} />
        <section className="my-10 flex justify-center items-center flex-col sm:grid sm:grid-cols-3 place-items-center">
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      {/* Stack de tecnologias */}
      <section id="habilidades" className="mt-15 bg-gray-900 p-15">
        <Titulo
          subtitulo={"Stack de Tecnologias"}
          titulo={"Mis"}
          span={"Habilidades"}
        />
        <TechStack />
      </section>


      <Footer/>
    </>
  );
}

export default App;
