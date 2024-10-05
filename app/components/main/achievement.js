"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  {
    id: 1,
    title: "Sertifikat Halal",
    image: "achievement/halal.png",
    desc: "Panglima Roqiiqu Group menghadirkan produk F&B berkualitas yang halal dan tersertifikasi MUI.",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
  {
    id: 2,
    title: "BOGASARI SME AWARD 2018",
    image: "achievement/bogasari.png",
    desc: "Bogasari SME Award 2018 sebagai pengakuan atas inovasi dan kualitas produk.",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
  {
    id: 3,
    title: "Piagam Penghargaan",
    image: "achievement/garuda.png",
    desc: "Pembina Dalam Peningkatan Dan Pengembangan Kapasitas UMKM Di Wilayah Kalimantan Timur",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
  {
    id: 4,
    title: "Indonesia WOW",
    image: "achievement/wow.png",
    desc: "Panglima Roqiiqu Group terpilih dalam Short List UKM 500 WOW Gallery Indonesia sebagai inovator terkemuka",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
  {
    id: 5,
    class: "hidden md:block",
  },
  {
    id: 6,
    title: "Gerai Panglima",
    image: "logo/gerai.jpg",
    desc: "Gerai panglima berdiri mulai dari tahun 2015",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
  {
    id: 7,
    title: "Jajan Panglima",
    image: "logo/jajan.png",
    desc: "Jajan Panglima berdiri mulai dari tahun 2017",
    class:
      "flex-shrink-0 text-center w-60 md:w-auto md:grid md:content-between md:h-full",
  },
];

const Achievement = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Hentikan animasi jika lebar layar lebih dari 768px
      if (window.innerWidth > 768) {
        if (animationRef.current) {
          animationRef.current.kill(); // Hentikan animasi
          animationRef.current = null; // Reset referensi animasi
        }
        // Reset transform dan translate menjadi 0
        gsap.set(marqueeRef.current, { xPercent: 0 });
      } else {
        if (!animationRef.current) {
          // Jalankan animasi jika lebar layar <= 768px
          animationRef.current = gsap.fromTo(
            marqueeRef.current,
            { xPercent: 0 }, // Start position
            {
              xPercent: -100, // Move to the left
              duration: 10, // Set the speed
              repeat: -1, // Infinite repeat
              ease: "linear", // Smooth linear animation
            }
          );
        }
      }
    };

    handleResize(); // Panggil saat pertama kali render
    window.addEventListener("resize", handleResize); // Tambahkan listener resize

    return () => {
      window.removeEventListener("resize", handleResize); // Hapus listener saat unmount
      if (animationRef.current) {
        animationRef.current.kill(); // Hentikan animasi pada unmount
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-primary py-14 md:px-10">
      <div
        ref={marqueeRef}
        className="flex gap-5 w-full items-center md:grid grid-cols-4"
      >
        {items.map((item) => (
          <div key={item.id} className={item.class}>
            {item.image && (
              <div className="flex justify-center content-center">
                <img className="mb-3 w-28" src={item.image} alt={item.title} />
              </div>
            )}
            <div>
              <h4 className="text-sm font-extrabold">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
