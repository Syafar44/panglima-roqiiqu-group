'use client';

import Link from 'next/link';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NavbarBack from '../components/header/navbarBack';
import { Button } from 'flowbite-react';

// const loker = [
//   {
//     id: 1092873,
//     jobs: 'ASSISTANT BAKER',
//     date: '24/11/2024',
//     condition: [
//       'Laki-laki maksimal 30 tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan Minimal SMA/Sederajat',
//       'Fresh Graduate silahkan melamar (diutamakan memiliki pengalaman)',
//       'Memiliki Smartphone',
//       'Memiliki kemampuan interpersonal dan komunikasi yang baik',
//       'Jujur, pekerja keras & terpercaya',
//       'Bersedia bekerja shift',
//       'Penempatan Samarinda',
//       'Dapat bergabung segera',
//     ],
//   },
//   {
//     id: 1092876,
//     jobs: 'SUPERVISOR MAINTENANCE',
//     date: '24/11/2024',
//     condition: [
//       'Laki-Laki Maksimal 45 Tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan Minimal SMA/Sederajat ',
//       'Memiliki pengalaman kerja dibidangnya',
//       'Menguasai Arus Kuat serta Arus Lemah kelistrikan, mengerti SOP untuk pengoperasian elektrikal dan menguasai teknik sipil bangunan ',
//       'Dapat bergabung segera',
//     ],
//   },
//   {
//     id: 1092877,
//     jobs: 'SUPERVISOR R&D BAKERY PASTRY',
//     date: '28/11/2024',
//     condition: [
//       'Laki-Laki Maksimal 45 Tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan D3 atau S1 di bidang Kuliner, Tata Boga, atau Teknologi Pangan ',
//       'Memiliki pengalaman kerja dibidangnya',
//       'Memiliki kreativitas dan inovasi tinggi dalam pengembangan resep bakery, pastry, kue ',
//       'Dapat bergabung segera',
//     ],
//   },
//   {
//     id: 1092823,
//     jobs: 'STAFF PRODUKSI AMPLANG',
//     date: '28/11/2024',
//     condition: [
//       'Laki-laki maksimal 30 tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan Minimal SMA/Sederajat',
//       'Fresh Graduate silahkan melamar (diutamakan memiliki pengalaman)',
//       'Memiliki Smartphone',
//       'Memiliki kemampuan interpersonal dan komunikasi yang baik',
//       'Jujur, pekerja keras & terpercaya',
//       'Bersedia bekerja shift',
//       'Penempatan Samarinda',
//       'Dapat bergabung segera',
//     ],
//   },
//   {
//     id: 1092873,
//     jobs: 'DRIVER',
//     date: '18/12/2024',
//     condition: [
//       'Laki-laki maksimal 30 tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan Minimal SMA/Sederajat',
//       'Fresh Graduate silahkan melamar (diutamakan memiliki pengalaman)',
//       'Memiliki Smartphone',
//       'Memiliki kemampuan interpersonal dan komunikasi yang baik',
//       'Jujur, pekerja keras & terpercaya',
//       'Memiliki SIM A',
//       'Bersedia bekerja shift',
//       'Penempatan Samarinda',
//       'Dapat bergabung segera',
//     ],
//   },
//   {
//     id: 1092873,
//     jobs: 'ASSISTANT COOK',
//     date: '18/12/2024',
//     condition: [
//       'Laki-laki maksimal 30 tahun',
//       'Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai Syariat Islam',
//       'Pendidikan Minimal SMA/Sederajat',
//       'Fresh Graduate silahkan melamar (diutamakan memiliki pengalaman)',
//       'Memiliki Smartphone',
//       'Memiliki kemampuan interpersonal dan komunikasi yang baik',
//       'Jujur, pekerja keras & terpercaya',
//       'Bersedia bekerja shift',
//       'Penempatan Samarinda',
//       'Dapat bergabung segera',
//     ],
//   },
// ];

const loker = [
  {
    id: 18231234,
    image: 'photo_2025-03-05_11-23-41.jpg',
  },
  {
    id: 32453245,
    image: 'photo_2025-03-05_11-23-42.jpg',
  },
  {
    id: 3425345,
    image: 'photo_2025-03-05_11-23-44.jpg',
  },
  {
    id: 3245345,
    image: 'photo_2025-03-05_11-23-46.jpg',
  },
  {
    id: 656747,
    image: 'photo_2025-03-05_11-23-47.jpg',
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 px-5 2xl:px-0 gap-5 2xl:w-[1200px] 2xl:m-auto">
        {loker.map((info) => (
          <div key={info.id} className="p-3 flex flex-col gap-3">
            <img
              src={`./karir/${info.image}`}
              alt="loker"
              className="rounded-md"
            />
            <Button color="warning">
              <a href="mailto:hrdpanglimaroqiiqugroup@gmail.com?subject=Lamar%20Pekerjaan&body=Halo%2C%0A%0ASaya%20ingin%20melamar%20pekerjaan%20di%20perusahaan%20Anda.%0ATerima%20kasih.">
                Lamar Sekarang
              </a>
            </Button>
          </div>
        ))}
      </div>
      <footer className="bg-black py-5 px-5 2xl:w-[1200px] 2xl:m-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Karier;
