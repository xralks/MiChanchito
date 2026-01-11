import NavbarHome from "../components/NavbarHome/NavbarHome";
import HeroHome from "../components/HeroHome/HeroHome";
import FuncionalidadesHome from "../components/FuncionalidadesHome/FuncionalidadesHome";
import SeguridadConfHome from "../components/SeguridadConfHome/SeguridadConfHome";
import FooterHome from "../components/FooterHome/FooterHome";
import Footer from "../components/Footer/Footer";

const Inicio = () => {
  return (
    <div>
      <NavbarHome/>
      <HeroHome />
      <FuncionalidadesHome/>
      <SeguridadConfHome/>
      <FooterHome/>
      <Footer/>
    </div>
  );
};

export default Inicio;
