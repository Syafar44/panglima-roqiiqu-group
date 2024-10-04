import "./globals.css";

export const metadata = {
  title: "Panglima Roqiiqu Group",
  description: "Panglima's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
