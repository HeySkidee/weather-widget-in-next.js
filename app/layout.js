import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather widget in Next.js",
  description: "weather component in next js, weather app, open weather next js, weather app next js no type script only javascript, js only, no ts, weather widget in next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
