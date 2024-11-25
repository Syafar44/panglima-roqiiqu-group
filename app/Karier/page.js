import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import NavbarBack from "../components/header/navbarBack";

const loker = [
  {
    id: 1,
    pekerjaan: "Assistant Baker",
    waktu: "25/11/2024",
  },
  {
    id: 2,
    pekerjaan: "Driver",
    waktu: "25/11/2024",
  },
  {
    id: 3,
    pekerjaan: "Supervisor Maintenance",
    waktu: "25/11/2024",
  },
  {
    id: 4,
    pekerjaan: "Supervisor R&D Bakery Pastry",
    waktu: "25/11/2024",
  },
];

const Karier = () => {
  return (
    <>
      <header className="h-[6rem] md:h-[7rem] 2xl:w-[1200px] 2xl:m-auto">
        <div className="fixed top-0 w-full z-50 2xl:w-[1200px] 2xl:m-auto">
          <Header />
          <NavbarBack />
        </div>
      </header>
      <main className="grid grid-cols-3 py-10 px-5 2xl:px-0 gap-5 2xl:w-[1200px] 2xl:m-auto">
        {loker.map((info) => {
          return (
            <div key={info.id} className="text-sm border border-black p-3">
              <div className="flex justify-between">
                <h1>
                  Posisi: <span className="font-bold">{info.pekerjaan}</span>
                </h1>
                <h4 className="font-bold">{info.waktu}</h4>
              </div>
              <div>
                <h1>Kualfikasi :</h1>
                <ul className="pl-5">
                  <li>1. Laki-Laki Maksimal {info.umur} Tahun</li>
                  <li>
                    2. Taat Beribadah Wajib & sunnah serta bersedia diatur
                    sesuai Syariat Islam
                  </li>
                  <li>
                    3. Pendidikan Minimal SMA/Sederajat (tidak sedang berkuliah)
                  </li>
                  <li>4. Fresh Graduate Silahkan Melamar</li>
                  <li>5. Wajib memiliki Smartphone</li>
                  <li>
                    6. Memiliki kemampuan Interpesonal dan Komunikasi yang baik
                  </li>
                  <li>7. Jujur, Pekerja Keras & Terpercaya</li>
                  <li>8. Bersedia Bekerja Shift</li>
                  <li>9. Penempatan Samarinda</li>
                </ul>
              </div>
              <div className="font-bold">
                BENEFIT: GAJI POKOK, CUTI 18 HARI/TAHUN, FASILITAS KESEHATAN
              </div>
              <a href="https://bit.ly/FormulirLamaranKerjaPRG" target="_blank">
                <button className="bg-primary p-2 rounded-md w-full mt-2 font-bold hover:bg-black hover:text-white transition-all ease-in-out duration-300">
                  Lamar Sekarang
                </button>
              </a>
            </div>
          );
        })}
      </main>
      <footer className="bg-black py-5 px-5 2xl:w-[1200px] 2xl:m-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Karier;
