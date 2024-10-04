import Header from "./components/header/header";
import NavbarPrg from "./components/header/navbar";
import Hero from "./components/main/hero";

const Beranda = () => {
  return (
    <>
      <header>
        <Header />
        <NavbarPrg />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Beranda;
