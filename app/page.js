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
import Karier from "./components/footer/karier";
import Kontak from "./components/footer/kontak";

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
      <footer className="grid md:grid-cols-2 md:h-full p-5 md:p-10 bg-black overflow-hidden">
        <Karier />
        <Kontak />
      </footer>
    </>
  );
};

export default Beranda;
