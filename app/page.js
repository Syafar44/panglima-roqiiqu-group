// Header
import Header from "./components/header/header";
import NavbarPrg from "./components/header/navbar";

// Main
import Hero from "./components/main/hero";
import OurLogo from "./components/main/ourLogo";
import Profile from "./components/main/profile";
import Achievement from "./components/main/achievement";
import Visi from "./components/main/visimisi";
import Bisnis from "./components/main/bisnis";

const Beranda = () => {
  return (
    <>
      <header>
        <Header />
        <NavbarPrg />
      </header>
      <main>
        <Hero />
        <Profile />
        <OurLogo />
        <Achievement />
        <Visi />
      </main>
    </>
  );
};

export default Beranda;
