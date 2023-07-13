import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Khalil",
  description:
    "I'm a Islamabad based Web developer focused on crafting clean & user-friendly experience with latest technology like React & Nextjs, I am passionate about building excellent software that improve the lives of those around me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
