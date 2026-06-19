// src/components/DashboardCharts.tsx
"use client";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from "recharts";
import { monthlyData, genreData, recentSales } from "@/mock/dashboardData";

export default function DashboardCharts() {
  return (
    <div className="space-y-8">
      {/* Grid com os dois gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gráfico 1: Evolução Mensal */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-base font-bold text-white">Evolução Mensal</h3>
            <p className="text-xs text-slate-400">Visão geral de faturamento comparado ao ganho de assinantes</p>
          </div>
          {/* Usamos uma div comum com overflow e largura flexível */}
          <div className="h-72 w-full flex items-center justify-center overflow-x-auto">
            <AreaChart width={650} height={280} data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px", color: "#fff" }}
              />
              <Area type="monotone" dataKey="faturamento" name="Faturamento (R$)" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorFaturamento)" />
            </AreaChart>
          </div>
        </div>

        {/* Gráfico 2: Gêneros Mais Assistidos */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Audiência por Gênero</h3>
            <p className="text-xs text-slate-400">Distribuição de reproduções na plataforma</p>
          </div>
          <div className="h-56 w-full flex items-center justify-center my-2">
            <PieChart width={240} height={220}>
              <Pie
                data={genreData}
                cx="50%"
                cy="45%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="valor"
              >
                {genreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px", color: "#fff" }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </div>
        </div>

      </div>

      {/* Tabela de Vendas Recentes */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="mb-4">
          <h3 className="text-base font-bold text-white">Últimas Assinaturas</h3>
          <p className="text-xs text-slate-400">Transações processadas em tempo real pelas gateways</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Usuário</th>
                <th className="px-4 py-3">Plano</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {recentSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">{sale.usuario}</td>
                  <td className="px-4 py-3 text-slate-400">{sale.plano}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      sale.status === "Concluído" 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : "bg-amber-500/10 text-amber-400"
                    }`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-white">{sale.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
