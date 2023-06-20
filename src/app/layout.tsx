import { Footer, Header } from "@/components";
import "./globals.css";
import { Poppins, Spectral, Roboto } from "next/font/google";

export const metadata = {
  title: "Pioneer Alpha",
  description: "This is an assignment.",
};
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const spectral = Spectral({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spectral",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spectral.variable} ${roboto.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
