"use client";
// fungsi flowbite
import { useState } from "react";
import { Modal } from "flowbite-react";
import Footer from "../components/footer/footer";

// components
import Header from "../components/header/header";
import NavbarBack from "../components/header/navbarBack";

const berita = [
  {
    id: 1,
    title: "Berita 1",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar1.jpg",
    date: "08-10-2024",
  },
  {
    id: 2,
    title: "Berita 2",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar2.jpg",
    date: "08-10-2024",
  },
  {
    id: 3,
    title: "Berita 2",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar3.jpg",
    date: "08-10-2024",
  },
  {
    id: 4,
    title: "Berita 2",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar2.jpg",
    date: "08-10-2024",
  },
  {
    id: 5,
    title: "Berita 2",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar1.jpg",
    date: "08-10-2024",
  },
  {
    id: 6,
    title: "Berita 2",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    image: "berita/gambar2.jpg",
    date: "08-10-2024",
  },
];

const Berita = () => {
  const [openModal, setOpenModal] = useState(false); // ubah ke false agar modal tidak muncul saat halaman di-refresh
  const [selectedBerita, setSelectedBerita] = useState(null);

  const handleOpenModal = (id) => {
    const beritaTerpilih = berita.find((item) => item.id === id); // cari berita berdasarkan id
    setSelectedBerita(beritaTerpilih); // set berita yang dipilih
    setOpenModal(true); // tampilkan modal
  };

  return (
    <>
      <header className="h-[6rem] md:h-[7rem]">
        <div className="fixed top-0 w-full z-50">
          <Header />
          <NavbarBack />
        </div>
      </header>
      <main className="px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {berita.map((item) => {
          return (
            <div key={item.id} className="bg-accent mb-5 md:mb-0">
              <div
                className="h-[10rem] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="px-5 py-2">
                <div className="text-sm mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#5f6368"
                    className="w-5 h-5"
                  >
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                  </svg>
                  <p>{item.date}</p>
                </div>
                <p className="pb-14">{item.desc}</p>
                <button
                  onClick={() => handleOpenModal(item.id)}
                  className="bg-primary w-full py-2"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          );
        })}
      </main>

      {/* Modal Detail Berita */}
      {selectedBerita && (
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="bg-opacity-30 bg-black"
        >
          <Modal.Header className="py-2 px-6 border-b-primary border bg-black stroke-black flex items-center">
            <h1 className="font-bold text-base text-primary">
              {selectedBerita.title}
            </h1>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              <div
                className="w-full h-[15rem] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${selectedBerita.image})`,
                }}
              ></div>
              <div>
                <div className="flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#5f6368"
                    className="w-4 lg:w-5"
                  >
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                  </svg>
                  <p className="text-sm lg:text-base">{selectedBerita.date}</p>
                </div>
                <p className="text-base leading-relaxed text-gray-500">
                  {selectedBerita.desc}
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <footer className="bg-black py-5 px-5">
        <Footer />
      </footer>
    </>
  );
};

export default Berita;
