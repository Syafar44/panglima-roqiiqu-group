import "./globals.css";
const logo = "../public/logo/prg.png";

export const metadata = {
  title: "Panglima Roqiiqu Group",
  description: "Panglima's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Syafar44/assets/refs/heads/main/assets/image/Desain%20tanpa%20judul%20(3).png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
