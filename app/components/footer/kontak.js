"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Kontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          "service_7utmsan",
          "template_c3iif86",
          form.current,
          "stydoEssWgAhkYgBu"
        )
        .then(
          () => {
            Swal.fire({
              title: "Pesan Terkirim",
              text: "Terima kasih atas pesan anda",
              icon: "success",
            });
            form.current.reset();
          },
          (error) => {
            Swal.fire({
              title: error,
              text: error.text,
              icon: "error",
            });
          }
        );
    } else {
      Swal.fire({
        title: "Data Belum Lengkap",
        text: "Tolong isi semua data yang ada",
        icon: "warning",
      });
    }
  };

  return (
    <>
      <div
        id="kontak"
        className="px-5 mt-5 md:mt-0 md:px-0 flex flex-col justify-between "
      >
        <h1 className="text-primary text-center font-bold text-xl md:text-3xl">
          ---- Kontak Kami ----
        </h1>
        <form ref={form} onSubmit={sendEmail} method="post" className="mt-6">
          <div className="flex-1 border-b">
            <label className="block mb-2 text-sm text-accent">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="block w-full px-5 py-3 mt-2 text-accent bg-black border-none focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 mt-6 border-b">
            <label className="block mb-2 text-sm text-accent">
              Alamat Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="block w-full px-5 py-3 mt-2 text-accent bg-black border-none focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mt-6 border-b border-l-">
            <label className="block mb-2 text-sm text-accent">Pesan</label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="block w-full h-32 px-5 py-3 mt-2 text-accent bg-black border-none md:h-48 focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>

          <input
            value="Kirim"
            type="submit"
            className="btn w-full text-center px-[.6rem] py-3 mt-6 text-sm font-bold bg-primary hover:text-white tracking-wide  capitalize transition-colors duration-300 transform hover:bg-hitam focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
          />
        </form>
      </div>
    </>
  );
};

export default Kontact;
