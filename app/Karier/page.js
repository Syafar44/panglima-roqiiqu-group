import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NavbarBack from '../components/header/navbarBack';

const loker = [
  {
    id: 1092873,
    jobs: 'ASSISTANT BAKER',
    date: '24/11/2024',
    condition: [
      'Laki-laki maksimal 30 tahun',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan Minimal SMA/Sederajat (tidak sedang berkuliah)',
      'Fresh Graduate Silahkan Melamar',
      'Memiliki Smartphone',
      'Memiliki kemampuan interpersonal dan komunikasi yang baik',
      'Jujur, pekerja keras & terpercaya',
      'Bersedia bekerja shift',
      'Penempatan Samarinda',
      'Dapat bergabung segera',
    ],
  },
  {
    id: 1092823,
    jobs: 'STAFF PRODUKSI AMPLANG',
    date: '28/11/2024',
    condition: [
      'Laki-laki maksimal 30 tahun',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan Minimal SMA/Sederajat (tidak sedang berkuliah)',
      'Fresh Graduate Silahkan Melamar',
      'Memiliki Smartphone',
      'Memiliki kemampuan interpersonal dan komunikasi yang baik',
      'Jujur, pekerja keras & terpercaya',
      'Bersedia bekerja shift',
      'Penempatan Samarinda',
      'Dapat bergabung segera',
    ],
  },
  {
    id: 1092874,
    jobs: 'CHEF DE PARTIE',
    date: '24/11/2024',
    condition: [
      'Laki-Laki Maksimal 30 Tahun ',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan Minimal SMA/Sederajat ',
      'Memiliki pengalaman kerja dibidangnya',
      'Dapat bergabung segera',
    ],
  },
  {
    id: 1092875,
    jobs: 'DRIVER',
    date: '24/11/2024',
    condition: [
      'Laki-Laki Maksimal 30 Tahun ',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan Minimal SMA/Sederajat ',
      'Memiliki pengalaman kerja dibidangnya',
      'Memiliki SIM A',
      'Dapat bergabung segera',
    ],
  },
  {
    id: 1092876,
    jobs: 'SUPERVISOR MAINTENANCE',
    date: '24/11/2024',
    condition: [
      'Laki-Laki Maksimal 45 Tahun',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan Minimal SMA/Sederajat ',
      'Memiliki pengalaman kerja dibidangnya',
      'Menguasai Arus Kuat serta Arus Lemah kelistrikan, mengerti SOP untuk pengoperasian elektrikal dan menguasai teknik sipil bangunan ',
      'Dapat bergabung segera',
    ],
  },
  {
    id: 1092877,
    jobs: 'SUPERVISOR R&D BAKERY PASTRY',
    date: '28/11/2024',
    condition: [
      'Laki-Laki Maksimal 45 Tahun',
      'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
      'Pendidikan D3 atau S1 di bidang Kuliner, Tata Boga, atau Teknologi Pangan ',
      'Memiliki pengalaman kerja dibidangnya',
      'Memiliki kreativitas dan inovasi tinggi dalam pengembangan resep bakery, pastry, kue ',
      'Dapat bergabung segera',
    ],
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
      <main className="grid md:grid-cols-2 lg:grid-cols-3 py-10 px-5 2xl:px-0 gap-5 2xl:w-[1200px] 2xl:m-auto">
        {loker.map((info) => (
          <div key={info.id} className="text-sm border border-black p-3 flex flex-col justify-between">
            <div className="flex justify-between">
              <h1>
                Posisi: <span className="font-bold">{info.jobs}</span>
              </h1>
              <h4 className="font-bold">{info.date}</h4>
            </div>
            <div>
              <h1>Kualifikasi:</h1>
              <ul className="pl-5 list-decimal">
                {info.condition.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="font-bold">
              <p>
                BENEFIT: GAJI POKOK, CUTI, FASILITAS KESEHATAN, SARANA IBADAH
              </p>
              <a
                href="https://bit.ly/FormulirLamaranKerjaPRG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary p-2 rounded-md w-full mt-2 font-bold hover:bg-black hover:text-white transition-all ease-in-out duration-300">
                  Lamar Sekarang
                </button>
              </a>
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-black py-5 px-5 2xl:w-[1200px] 2xl:m-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Karier;
