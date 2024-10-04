"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const NavbarPrg = () => {
  return (
    <div className="md:px-7 bg-black sticky">
      <Navbar fluid rounded className="bg-black">
        <div className="w-full flex justify-end">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="md:flex gap-7 text-lg lg:text-sm text-white items-center py-2">
            <Navbar.Link
              href="#"
              active
              className="text-secondary hover:bg-gray-600"
            >
              Beranda
            </Navbar.Link>
            <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
              Profile Kami
            </Navbar.Link>
            <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
              Bisnis Kami
            </Navbar.Link>
            <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
              Karier
            </Navbar.Link>
            <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
              Ruang Berita
            </Navbar.Link>
            <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
              Kontak Kami
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarPrg;
