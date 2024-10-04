// Header
import Header from "./components/header/header";
import NavbarPrg from "./components/header/navbar";

// Main
import Hero from "./components/main/hero";
import OurLogo from "./components/main/ourLogo";
import Profile from "./components/main/profile";

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
      </main>
    </>
  );
};

export default Beranda;
