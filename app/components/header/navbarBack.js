import { Button } from "flowbite-react";

const NavbarBack = () => {
  return (
    <nav className="h-14 bg-black px-10 flex items-center">
      <button>
        <a href="/" className="flex text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
          </svg>
          <h1>Kembali</h1>
        </a>
      </button>
    </nav>
  );
};

export default NavbarBack;
