import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4th Semester Exam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
