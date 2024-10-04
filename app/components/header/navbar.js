"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const NavbarPrg = () => {
  return (
    <Navbar fluid rounded className="bg-black">
      <div className="w-full flex justify-end">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="md:flex gap-10 md:text-2xl lg:text-base text-white items-center py-2">
          <Navbar.Link href="#" active className="text-secondary hover:bg-gray-600">
            Beranda
          </Navbar.Link>
          <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-secondary hover:bg-gray-600">
            Contact
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPrg;
