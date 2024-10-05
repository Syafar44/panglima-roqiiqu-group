const Bisnis = () => {
  return (
    <div className="bg-accent p-10">
      <h1 className="text-2xl font-bold text-center">Bisnis Kami</h1>
      <div className="flex justify-between pt-5 mx-auto">
        <img className="w-[60%] h-[20rem]" src="bisnis/gerai.jpg" />
        <div className="p-10 flex flex-col justify-center gap-5">
          <img src="logo/gerai.jpg" />
          <ul className="list-disc font-bold pl-[25%]">
            <li>Gerai utama juanda</li>
            <li>Bandara samarinda</li>
            <li>Bandara balikpapan</li>
          </ul>
          <button className="px-full py-2 text-white bg-red-700">
            <a href="#">Gerai Panglima</a>
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-5 mx-auto">
        <div className="p-10 flex flex-col justify-center gap-5">
          <img src="logo/jajan.png" />
          <p className="text-center font-bold">9 Cabang di kota Samarinda</p>
          <button className="px-full py-2 text-black bg-yellow-300">
            <a href="#">Jajan Panglima</a>
          </button>
        </div>
        <img className="h-[20rem]" src="bisnis/jajan.jpg" />
      </div>
    </div>
  );
};

export default Bisnis;
