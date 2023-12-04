import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UnderFooter from "./components/UnderFooter";

export const metadata = {
  title: "4th Semester Exam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <Providers>
        <body>
          <Header />
          {children}
          <Footer />
          <UnderFooter />
        </body>
      </Providers>
    </html>
  );
}
