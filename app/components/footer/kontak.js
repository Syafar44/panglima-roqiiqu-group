"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Kontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    const openModal = () => {
      document.getElementById("my_modal").showModal();
    };

    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          "service_idf5xe9",
          "template_c3iif86",
          form.current,
          "s-gUBrpAU8bY-veel"
        )
        .then(
          (result) => {
            openModal();
            form.current.reset();
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    } else {
      alert("harap isi semua data terlebih dahulu");
    }
  };

  return (
    <>
      <div className="px-5 mt-5 md:mt-0 md:px-0 flex flex-col justify-between ">
        <h1 className="text-primary text-center font-bold text-3xl">
          Kontak Kami
        </h1>
        <form ref={form} onSubmit={sendEmail} className="mt-6">
          <div className="flex-1">
            <label className="block mb-2 text-sm text-primary">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="block w-full px-5 py-3 mt-2 text-accent placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-primary dark:text-gray-200">
              Alamat Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="block w-full px-5 py-3 mt-2 text-accent placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-primary dark:text-gray-200">
              Pesan
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="block w-full h-32 px-5 py-3 mt-2 text-accent placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>

          <input
            value="Send"
            type="submit"
            className="btn w-full text-center px-[.6rem] py-3 mt-6 text-sm font-bold bg-primary hover:text-white tracking-wide  capitalize transition-colors duration-300 transform hover:bg-hitam focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
          />
        </form>
      </div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-kuning bg-hitam rounded-xl text-center py-2">
            Hay Sobat Jajan
          </h3>
          <div className="py-4 font-semibold text-xl">
            <h1 className="text-green-700 text-2xl">
              Pesanan anda sudah kami terima!
            </h1>
            <p className="text-lg">
              Terimakasih atas kritik dan masukannya akan kami kirim balasan
              secepatnya
            </p>
            <h3 className="mt-5">Terimakasih.</h3>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-black text-kuning rounded-xl">
                Tutup
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Kontact;
