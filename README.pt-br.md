# 📈 StreamBI - Painel Administrativo

[🇺🇸 English](./README.md) \| [🇧🇷 Português](./README.pt-br.md)

Uma aplicação moderna e responsiva de painel administrativo desenvolvida
com **Next.js 16**, **React 19**, **Tailwind CSS v4** e **Recharts**.

## 📸 Demonstração

<p align="center">
<img src="./src/assets/1.png" alt="Demonstração do Projeto" width="800">
<img src="./src/assets/2.png" alt="Demonstração do Projeto" width="800">
</p>

------------------------------------------------------------------------

## ✨ Funcionalidades

-   📊 Visualização dinâmica de dados com gráficos de Área e Pizza
    utilizando Recharts.
-   📱 Sidebar inteligente com recolhimento automático utilizando CSS +
    JavaScript.
-   💰 Tabela de assinaturas recentes com badges condicionais.
-   ⚡ Desenvolvimento rápido utilizando Next.js 16 e Turbopack.
-   🎨 Interface totalmente responsiva construída com Tailwind CSS v4.
-   🔄 Componentes de Cliente para recursos interativos.

------------------------------------------------------------------------

## 🛠️ Tecnologias

-   Next.js 16 (App Router)
-   React 19
-   TypeScript
-   Tailwind CSS v4
-   Recharts 3
-   Lucide React
-   Yarn

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

``` text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DashboardCharts.tsx
│   └── Sidebar.tsx
├── mock/
│   └── dashboardData.ts
```

------------------------------------------------------------------------

## 💡 Conceitos Técnicos

### Componentes de Cliente e Servidor

Os gráficos interativos foram isolados em Componentes de Cliente
utilizando `"use client"`, permitindo acesso às APIs do navegador e
evitando problemas de hidratação.

### Responsividade Híbrida (CSS + JavaScript)

Além das classes responsivas do Tailwind CSS, a Sidebar monitora a
largura da janela para recolher ou expandir automaticamente.

``` tsx
useEffect(() => {
  const handleResize = () => {
    setIsCollapsed(window.innerWidth < 1024);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);
}, []);
```

### Visualização de Dados

O dashboard utiliza Recharts para construir gráficos interativos com
gradientes SVG, legendas e tooltips personalizados.

### Design Responsivo

A interface segue a abordagem Mobile First utilizando CSS Grid e Flexbox
para adaptar cartões, gráficos e tabelas em diferentes resoluções.

------------------------------------------------------------------------

## 🚀 Como Executar

### Clone o repositório

``` bash
git clone https://github.com/paullo-ps/dashboard.git
```

### Entre na pasta

``` bash
cd dashboard
```

### Instale as dependências

Utilizando npm

``` bash
npm install
```

Utilizando Yarn

``` bash
yarn
```

### Execute o projeto

Utilizando npm

``` bash
npm run dev
```

Utilizando Yarn

``` bash
yarn dev
```

Acesse:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 📚 Aprendizados

Durante este projeto foram reforçados conhecimentos em:

-   Arquitetura App Router do Next.js 16.
-   Ecossistema React 19.
-   Tailwind CSS v4.
-   Arquitetura baseada em componentes.
-   Dashboards responsivos.
-   Visualização de dados com Recharts.
-   TypeScript para aplicações escaláveis.
-   Técnicas híbridas de responsividade.

------------------------------------------------------------------------

## 🔮 Melhorias Futuras

-   Integração com API REST.
-   Suporte a GraphQL.
-   Autenticação de usuários.
-   Alternância entre tema claro e escuro.
-   Filtros por intervalo de datas.
-   Atualizações em tempo real.
-   Gerenciamento de usuários.

------------------------------------------------------------------------

## 👨‍💻 Autor

**Paulo Sérgio Mendes dos Santos**

GitHub: https://github.com/paullo-ps

LinkedIn:
https://www.linkedin.com/in/paulo-s%C3%A9rgio-mendes-dos-santos-914a29200