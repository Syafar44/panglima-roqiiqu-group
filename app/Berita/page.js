import Header from "../components/header/header";
import NavbarBack from "../components/header/navbarBack";

const berita = [
  {
    id: 1,
    title: "Berita 1",
    desc: "Ut enim esse consequat culpa qui dolore cillum. Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    reverse: "",
    image: "berita/gambar1.jpg",
  },
  {
    id: 2,
    title: "Berita 2",
    desc: "Ut enim esse consequat culpa qui dolore cillum. Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    reverse: "-reverse",
    image: "berita/gambar2.jpg",
  },
  {
    id: 3,
    title: "Berita 3",
    desc: "Esse occaecat fugiat aliquip proident elit aliqua elit consequat elit culpa sunt do. Ad anim eu consequat cupidatat officia nisi aliquip sunt proident sint velit....",
    reverse: "",
    image: "berita/gambar3.jpg",
  },
];

const Berita = () => {
  return (
    <>
      <header>
        <Header />
        <NavbarBack />
      </header>
      <div className="px-10 py-10 flex flex-col gap-5">
        {berita.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-row${item.reverse} justify-center h-[14rem]`}
            >
              <div
                className="bg-cover bg-center w-[70%]"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="h-full w-[100%] flex flex-col gap-5 justify-center bg-accent px-5 py-2">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="bg-primary py-2">Lebih Lengkap..</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Berita;
