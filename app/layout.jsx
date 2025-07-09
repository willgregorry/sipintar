import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sipintar",
  description: "Turn Trash into Cash, Turn Action into a Cleaner Planet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} h-max-screen antialiased bg-[#f8f4e1]`}>
        {children}
      </body>
    </html>
  );
}
