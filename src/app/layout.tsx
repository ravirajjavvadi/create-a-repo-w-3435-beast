import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aether Noir | Digital Architect | Digital Empire",
  description: "Materializing digital empires where physics ends.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-[#020617] text-slate-100 antialiased"}>
        {children}
      </body>
    </html>
  );
}