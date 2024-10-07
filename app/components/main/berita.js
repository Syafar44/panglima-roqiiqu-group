const news = [
  {
    id: 1,
    deskripsi:
      "Culpa pariatur incididunt amet sit ut culpa. Nulla laborum aliqua ex duis irure amet.....",
    tanggal: "2020-01-01",
    gambar: "berita/gambar1.jpg",
  },
  {
    id: 2,
    deskripsi:
      "Culpa pariatur incididunt amet sit ut culpa. Nulla laborum aliqua ex duis irure amet.....",
    tanggal: "2020-01-02",
    gambar: "berita/gambar2.jpg",
  },
  {
    id: 3,
    deskripsi:
      "Culpa pariatur incididunt amet sit ut culpa. Nulla laborum aliqua ex duis irure amet.....",
    tanggal: "2020-01-03",
    gambar: "berita/gambar3.jpg",
  },
];

const Berita = () => {
  return (
    <div id="berita" className="px-5 pt-10 md:p-10">
      <h1 className="text-center text-2xl font-bold text-primary drop-shadow-xl mb-10">
        Ruang Berita
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {news.map((item) => {
          return (
            <div key={item.id} className="bg-accent mb-5 md:mb-0">
              <div
                className="h-[10rem] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.gambar})`,
                }}
              ></div>
              <div className="p-5">
                <p className="pb-14">{item.deskripsi}</p>
                <button className="bg-primary w-full py-2">
                  <a href="#">Lebih Banyak...</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Berita;
