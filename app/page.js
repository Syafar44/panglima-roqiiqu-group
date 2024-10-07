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
import Footer from "./components/footer/footer";

const Beranda = () => {
  return (
    <>
      <header className="h-[6rem] md:h-[7rem]">
        <div className="fixed top-0 w-full z-50">
          <Header />
          <NavbarPrg />
        </div>
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
      <footer className="grid grid-cols-1 md:grid-cols-2 md:h-full py-5 md:px-10 bg-black">
        <Karier />
        <Kontak />
        <Footer />
      </footer>
    </>
  );
};

export default Beranda;
