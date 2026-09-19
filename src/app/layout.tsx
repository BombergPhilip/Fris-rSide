import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garage Barbershop by Arda | Herreklip i Ringsted",
  description: "Skarpe herreklip, fades og skægtrim hos Garage Barbershop by Arda i Ringsted.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
