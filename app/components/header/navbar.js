"use client";
import { Navbar } from "flowbite-react";

const NavbarPrg = () => {
  return (
    <nav className="md:px-7 bg-black">
      <Navbar className="bg-black">
        <div className="w-full flex justify-end fill-white">
          <Navbar.Toggle className="bg-black active:bg-black hover:bg-black focus:ring-black text-primary" />
        </div>
        <Navbar.Collapse>
          <div className="md:flex gap-7 text-lg lg:text-sm text-white items-center py-2">
            <Navbar.Link
              href="/"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Beranda
            </Navbar.Link>
            <Navbar.Link
              href="#profile"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Profile Kami
            </Navbar.Link>
            <Navbar.Link
              href="#bisnis"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Bisnis Kami
            </Navbar.Link>
            <Navbar.Link
              href="/Karier"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Karier
            </Navbar.Link>
            {/* <Navbar.Link
              href="/Berita"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Ruang Berita
            </Navbar.Link> */}
            <Navbar.Link
              href="#kontak"
              className="text-secondary hover:text-black hover:bg-primary active:bg-primary"
            >
              Kontak Kami
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavbarPrg;
