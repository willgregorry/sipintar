import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { AuthProvider } from "../context/authContext";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-nunito',
  display: "swap"
});

const fredoka = Fredoka({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-fredoka',
  display: "swap"
});

export const metadata = {
  title: "SiPintar",
  description: "Aplikasi Pembelajaran No. 1 di Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body
        className={`${nunito.variable} ${fredoka.variable} h-max-screen antialiased overflow-x-hidden bg-[#f8f4e1]`}
      >
        <AuthProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
