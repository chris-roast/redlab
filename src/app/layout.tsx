import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400","800",]
});

export const metadata: Metadata = {
  title: "Redlab QE",
  description: "Software Quality Engineering and Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

  let header = (
    <header className="bg-red-600 h-16">
      <NavBar />
    </header>
  );

  let footer = (
    <footer className="text-end">
      Redlab Consulting ltd &copy;
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
