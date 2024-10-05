const Karier = () => {
  return (
    <div
      className="bg-top w-full p-5 flex flex-col content-between"
      style={{
        backgroundImage: "url(item/gliter.png)",
      }}
    >
      <h1 className="text-primary text-center font-bold text-3xl">Karier</h1>
      <img className="my-20 w-[50%] mx-auto" src="item/human.png" />
      <button className="py-2 w-full bg-primary">
        <a href="/Karier">Lamar Sekarang...</a>
      </button>
    </div>
  );
};

export default Karier;
