// src/components/Sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, Film, Users, Settings, LogOut, Menu, ChevronLeft } from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // monitora o tamanho da tela em tempo real de forma automática
  useEffect(() => {
    const handleResize = () => {
      // Se a tela for menor que 1024px (tablets e celulares), colapsa automaticamente
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    // Executa uma vez ao montar a tela para definir o estado inicial correto
    handleResize();

    // Adiciona o "escutador" de redimensionamento na janela
    window.addEventListener("resize", handleResize);

    // Limpa o escutador quando o componente sai da tela (boa prática para evitar vazamento de memória)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: LayoutDashboard, label: "Visão Geral", href: "/" },
    { icon: Film, label: "Conteúdo", href: "#" },
    { icon: Users, label: "Assinantes", href: "#" },
    { icon: Settings, label: "Configurações", href: "#" },
  ];

  return (
    <aside 
      className={`bg-slate-900 border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 transition-all duration-300 relative shrink-0 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Botão Flutuante (Ainda permite que o usuário force abrir/fechar se quiser) */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-7 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full border border-slate-800 transition-colors cursor-pointer z-50"
      >
        {isCollapsed ? <Menu size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Topo - Logo */}
      <div className={`p-6 flex flex-col transition-all ${isCollapsed ? "items-center px-4 text-center" : ""}`}>
        {isCollapsed ? (
          <h1 className="text-xl font-black tracking-wider text-red-600">S</h1>
        ) : (
          <>
            <h1 className="text-xl font-black tracking-wider text-red-600 flex items-center gap-2">
              STREAM<span className="text-white">BI</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">Painel Administrativo</p>
          </>
        )}
      </div>

      {/* Meio - Links */}
      <nav className="flex-grow px-4 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isCollapsed ? "justify-center px-2" : ""
              } ${
                index === 0 
                  ? "bg-red-600/10 text-red-500" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé - Logout */}
      <div className="p-4 border-t border-slate-800">
        <button 
          title={isCollapsed ? "Sair do Painel" : undefined}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-950/30 hover:text-red-500 transition-colors ${
            isCollapsed ? "justify-center px-2" : ""
          }`}
        >
          <LogOut size={18} className="shrink-0" />
          {!isCollapsed && <span>Sair do Painel</span>}
        </button>
      </div>
    </aside>
  );
}
