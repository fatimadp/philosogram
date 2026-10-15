import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Philosogram",
  description:
    "Proyecto académico sobre racionalismo, empirismo y filosofía moderna.",

  icons: {
    icon: "/logo-filosofia.png",
    shortcut: "/logo-filosofia.png",
    apple: "/logo-filosofia.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}