// Header
import Header from "./components/header/header";
import NavbarPrg from "./components/header/navbar";

// Main
import Hero from "./components/main/hero";
import OurLogo from "./components/main/ourLogo";
import Profile from "./components/main/profile";
import Achievement from "./components/main/achievement";
import VisiMisi from "./components/main/visimisi";
import Bisnis from "./components/main/bisnis";
import Berita from "./components/main/berita";

// Footer

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
        <VisiMisi />
        <Bisnis />
        <Berita />
      </main>
      <footer></footer>
    </>
  );
};

export default Beranda;
