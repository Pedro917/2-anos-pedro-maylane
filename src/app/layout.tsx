import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: '2 Anos - Pedro e Maylane ❤️',
  description: 'Celebrando dois anos de amor e companheirismo',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
