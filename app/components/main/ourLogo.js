const OurLogo = () => {
  return (
    <div className="p-5 md:p-10 font-bold">
      <h1 className="md:text-xl">PENJELASAN LOGO</h1>
      <h1 className="md:text-xl">PANGLIMA ROQIIQU GROUP</h1>
      <div className="md:flex justify-between mt-5">
        <img className="mx-auto md:mx-0 w-[40%] mb-5" src="logo/prg.png" />
        <div className="text-sm md:w-[60%] grid">
          <p>Nama Panglima RoQiiqu Group berasal dari 3 kata :</p>
          <ul className="list-disc pl-5">
            <li>Panglima =&gt; Pemimpin pasukan yang gagah perkasa</li>
            <li>RoQiiQu =&gt; Sifat lembut & penyayang</li>
            <li>Group =&gt; Dikembangkan secara bermitra/syirkah</li>
          </ul>
          <p>
            Sehingga makna keseluruhannya adalah Perusahaan yang dikembangkan
            secara bermitra/syirkah yang berisikan individu hebat terbaik
            berkarakter pemimpin yang gagah perkasa serta lembut & penyayang
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLogo;
