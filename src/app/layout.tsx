import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamBI | Dashboard",
  description: "Métricas de faturamento e engajamento da plataforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex bg-slate-950 text-slate-100">
        {/* Sidebar fixa na esquerda */}
        <Sidebar />

        {/* Conteúdo da página rolável na direita */}
        <div className="grow overflow-y-auto h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
