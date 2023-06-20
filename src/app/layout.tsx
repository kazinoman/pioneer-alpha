import { Footer, Header } from "@/components";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Pioneer Alpha",
  description: "This is an assignment.",
};
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
