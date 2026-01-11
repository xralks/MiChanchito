import NavbarHome from "../components/NavbarHome/NavbarHome";
import SeccionNosotros from "../components/SeccionNosotros/SeccionNosotros";
import HeroNosotros from "../components/HeroNosotros/HeroNosotros";
import Footer from "../components/Footer/Footer";

const Inicio = () => {
  return (
    <div>
      <NavbarHome/>
      <HeroNosotros/>
      <SeccionNosotros/>
      <Footer/>
    </div>
  );
};

export default Inicio;
