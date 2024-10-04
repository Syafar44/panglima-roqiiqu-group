import Header from "./components/header/header";
import NavbarPrg from "./components/header/navbar";
import Hero from "./components/main/hero";
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
      </main>
    </>
  );
};

export default Beranda;
