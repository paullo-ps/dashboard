// src/app/page.tsx

'use client';

import { DollarSign, Users, Tv, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic"; // 1. Importamos o carregador dinâmico do Next.js

// 2. Carregamos os gráficos apenas no lado do cliente, ignorando completamente o SSR
const DashboardCharts = dynamic(() => import("@/components/DashboardCharts"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl h-96"></div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl h-96"></div>
    </div>
  ),
});

export default function Home() {
  const kpis = [
    { label: "Receita Mensal", value: "R$ 37.200,00", desc: "+12.5% vs mês passado", icon: DollarSign, color: "text-emerald-500" },
    { label: "Novos Assinantes", value: "+1.360", desc: "+4.2% esta semana", icon: Users, color: "text-blue-500" },
    { label: "Filmes no Catálogo", value: "8.420", desc: "62 títulos adicionados hoje", icon: Tv, color: "text-purple-500" },
    { label: "Taxa de Churn", value: "2.1%", desc: "-0.4% de cancelamentos", icon: TrendingUp, color: "text-red-500" },
  ];

  return (
    <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight md:text-3xl">Visão Geral</h2>
          <p className="text-sm text-slate-400 mt-1">Acompanhe as principais métricas de saúde da sua plataforma de streaming.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 text-xs font-semibold px-4 py-2 rounded-lg text-slate-300">
          Atualizado há 1 min
        </div>
      </header>

      {/* Grid Superior: Cards rápidos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                <Icon size={20} className={kpi.color} />
              </div>
              <div className="mt-4">
                <span className="text-2xl font-black text-white tracking-tight">{kpi.value}</span>
                <p className="text-xs text-slate-500 mt-1 font-medium">{kpi.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Seção Inferior: Gráficos carregados dinamicamente */}
      <section>
        <DashboardCharts />
      </section>
    </main>
  );
}
