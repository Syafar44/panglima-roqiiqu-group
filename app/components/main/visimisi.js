const Visi = () => {
  return (
    <>
      <div className="md:flex items-center justify-between p-5 md:p-10">
        <div
          className="bg-cover h-[15rem] mb-5 md:mb-0 md:h-60 w-full md:w-80 flex justify-center items-center font-bold"
          style={{
            backgroundImage: "url(hero/gerai.jpg)",
          }}
        >
          <h1 className="text-white text-2xl">Visi & Misi</h1>
        </div>
        <div className="md:w-[60%] text-sm">
          <h3 className="text-base font-bold">Visi:</h3>
          <p>
            Menginspirasi Indonesia! Menjadi Perusahaan Syariah Kelas Dunia Yang
            Dicintai, Berperan Dalam Peradaban Mulia, Dan Bermanfaat Bagi Semua.
          </p>
          <h3 className="text-base font-bold mt-5">Misi:</h3>
          <ul className="list-disc pl-5">
            <li>
              Mengelola perusahaan Murni sesuai Syariat Islam oleh individu yang
              Saleh dengan standart Kelas Dunia
            </li>
            <li>
              Menyediakan produk yang halal, berkualitas dan memberi nilai yang
              terbaik bagi pelanggan
            </li>
            <li>Menyebar manfaat serta berperan nyata dalam peradaban mulia</li>
            <li>
              Bertumbuh dengan Cepat dan Berkesinambungan sehingga dapat Semakin
              Bermanfaat Bagi Semua
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap-reverse md:flex md:flex-nowrap items-center justify-between p-5 md:p-10">
        <div className="mt-5 md:mt-0 md:w-[55%] text-sm">
          <div className="mb-5">
            <h3 className="text-base font-bold">Syar&apos;i </h3>
            <p>
              Setiap perbuatan / aktivitas yang dilakukan selalu mengikuti
              aturan yang sesuai dengan syariah Islam dalam semua aspek, baik
              ibadah maupun kehidupan sehari-hari termasuk ketika bekerja.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-base font-bold">Profesional</h3>
            <p>
              Memiliki pengetahuan, keahlian dan sikap yang sesuai dengan
              standar kompetensi jabatan.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-base font-bold">Customer Centric</h3>
            <p>
              Semua aktivitas ditujukan untuk meraih loyalitas customer dan atau
              kepuasan pelanggan
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-base font-bold">Innovation</h3>
            <p>
              Kemampuan beradaptasi dengan segala perubahan demi menciptakan
              produk atau layanan yang lebih baik dari sebelumnya.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-base font-bold">Helpful</h3>
            <p>
              Menjadi pribadi Muslim yang bermanfaat bagi orang lain dan
              peradaban islam
            </p>
          </div>
        </div>
        <div
          className="bg-cover h-[15rem] md:h-[25rem] w-full md:w-96 flex justify-center items-center font-bold"
          style={{
            backgroundImage: "url(hero/resto.jpg)",
          }}
        >
          <h1 className="text-white text-2xl">Nilai-nilai</h1>
        </div>
      </div>
    </>
  );
};

export default Visi;
