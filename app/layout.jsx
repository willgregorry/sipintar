import { Poppins, Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-nunito'
});

const fredoka = Fredoka({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-fredoka'
});

export const metadata = {
  title: "Sipintar",
  description: "Turn Trash into Cash, Turn Action into a Cleaner Planet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} h-max-screen antialiased overflow-x-hidden bg-[#f8f4e1]`}
      >
        {children}
      </body>
    </html>
  );
}
