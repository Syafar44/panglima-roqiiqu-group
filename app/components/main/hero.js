const Hero = () => {
  return (
    <div id="beranda" className="flex flex-col md:flex-row px-5 pt-5 md:px-0 md:pt-0 md:justify-between md:items-center md:h-72 overflow-hidden md:pl-10 bg-primary">
      <div>
        <h2 className="text-xl md:text-3xl font-bold">Website Resmi</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-5">Panglima Roqqiu Group</h1>
        <p className="md:w-[80%] text-xs md:text-sm mb-3">
          Kami berkomitmen menjadi perusahaan syariah kelas dunia yang dicintai,
          menyediakan produk halal berkualitas, serta berkontribusi bagi
          peradaban mulia. Dengan prinsip Islam, profesionalisme, inovasi, dan
          fokus pada pelanggan, kami bertujuan untuk terus tumbuh dan bermanfaat
          bagi semua.
        </p>
      </div>
      <img className="h-60 md:h-96" src="hero/panglima.jpg" />
    </div>
  );
};

export default Hero;
