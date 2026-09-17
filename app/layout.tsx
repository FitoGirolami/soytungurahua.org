import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soy Tungurahua.org — Conocimiento, memoria y territorio",
  description: "Plataforma independiente de investigación y divulgación de conocimiento sobre Tungurahua, Ecuador.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
