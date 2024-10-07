const Profile = () => {
  return (
    <div id="profile" className="p-5 md:p-10 font-bold">
      <h1 className="md:text-xl">PROFILE PERUSAHAAN</h1>
      <h1 className="md:text-xl">PANGLIMA ROQIIQU GROUP</h1>
      <div className="font-semibold text-sm md:text-base grid grid-cols-1 gap-5 md:grid-cols-2 mt-4">
        <div>
          <p className="border-l-8 pl-3 border-primary w-[90%]">
            Panglima Roqiiqu Gorup (PRG) merupakan perusahaan yang bergerak di
            bidang industri Consumer Product dimana saat ini banyak mengeluarkan
            produk Oleh-Oleh & Daily Consume.
          </p>
        </div>
        <div>
          <p className="mb-5">
            Didirikan pada Februari 2011 di Samarinda, Kalimantan Timur dengan
            niatan untuk membangun usaha yang dilandaskan pada prinsip syariah,
            maka perusahaan ini didirikan dengan menggunakan pola syirkah
            mudharabah, dimana terdapat pengelola (mudharib) dan penanam modal
            (shahibul maal).
          </p>
          <p>
            Dalam pengelolaan bisnis, komitmen bahwa perusahaan ini dikelola &
            dikembangkan sesuai prinsip syariah menjadi pijakan & kekuatan dalam
            perkembangan perusahaan.
          </p>
        </div>
        <div className="w-[90%] hidden md:block">
          <p>Para pendiri & pemilik perusahaan Panglima Roqiiqu Group :</p>
          <ol className="list-decimal ml-5">
            <li>Budiman (Shahibul Maal)</li>
            <li>Muliadi (Mudharib & Shahibul Maal)</li>
            <li>Ferry Gunawan (Mudharib & Shahibul Maal)</li>
            <li>Nugrohadi Yuwono (Mudharib & Shahibul Maal)</li>
          </ol>
        </div>
        <p className="mt-8 md:mt-4">
          PRG saat ini memiliki 2 brand ternama yaitu Gerai Panglima & Gembung
          Panglima. Brand Gerai Panglima mengeluarkan berbagai produk Oleh-Oleh
          berkualitas yang diposisikan sebagai pusat oleh oleh Kaltim di
          Samarinda dan Balikpapan. Berbagai produk Panglima maupun
          produk-produk rekan-rekan UKM lain disediakan di Gerai Panglima.
          Selain memberikan pelayanan yang berkualitas ke Pelanngan, Gerai
          Panglima juga mengangkat taraf perekonomian rekan-rekan UKM.
        </p>
        <div className="w-[90%] block md:hidden">
          <p>Para pendiri & pemilik perusahaan Panglima Roqiiqu Group :</p>
          <ol className="list-decimal ml-5">
            <li>Budiman (Shahibul Maal)</li>
            <li>Muliadi (Mudharib & Shahibul Maal)</li>
            <li>Ferry Gunawan (Mudharib & Shahibul Maal)</li>
            <li>Nugrohadi Yuwono (Mudharib & Shahibul Maal)</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Profile;
