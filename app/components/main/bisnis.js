import Link from "next/link";

const Bisnis = () => {
  return (
    <div id="bisnis" className="bg-primary p-5 md:p-10">
      <h1 className="text-xl md:text-2xl font-bold text-center">Bisnis Kami</h1>
      <div className="flex flex-col md:flex-row justify-between pt-5 mx-auto">
        <div
          className="bg-cover h-[15rem] md:h-[20rem] md:w-[60%]"
          style={{
            backgroundImage: "url(bisnis/gerai.jpg)",
          }}
        ></div>
        <div className="p-10 flex flex-col justify-center gap-5 md:w-[40%]">
          <img src="logo/gerai.jpg" />
          <ul className="list-disc font-bold mx-auto">
            <li>Gerai utama juanda</li>
            <li>Bandara samarinda</li>
            <li>Bandara balikpapan</li>
          </ul>
          <button className="px-full py-2 text-white bg-red-700">
            <a href="https://geraipanglima.com" target="_blank">
              Gerai Panglima
            </a>
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between pt-5 mx-auto">
        <div className="p-10 flex flex-col gap-5 md:w-[40%]">
          <img
            className="w-[10rem] mx-auto md:w-[60%] md:ml-[20%]"
            src="logo/jajan.png"
          />
          <p className="text-center font-bold">9 Cabang di kota Samarinda</p>
          <button className="px-full py-2 text-black bg-black text-white">
            <a href="https://www.jajanpanglima.com" target="_blank">
              Jajan Panglima
            </a>
          </button>
        </div>
        <div
          className="bg-cover h-[15rem] md:h-[20rem] md:w-[60%]"
          style={{
            backgroundImage: "url(bisnis/jajan.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bisnis;
