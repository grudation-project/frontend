
import Footer from '../../Components/Footer/Footer';
import NavbarLanding from '../../Components/Navbar/NavbarLanding';
import MainSection from '../../Components/LandingPage/MainSection';
import ServicesSection from '../../Components/LandingPage/ServicesSection';
import CreateTicketL from '../../Components/LandingPage/CreateTicketL';

export default function LandingPage() {
  return (
    <>
      <NavbarLanding />
      <MainSection />
      <ServicesSection />
      <CreateTicketL />
      <Footer />
    </>
  );
}
