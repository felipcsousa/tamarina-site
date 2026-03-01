# 🌴 Tamarina - Clube de Viagens para Mulheres

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.17-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> **Descubra o mundo em boa companhia.** Um clube de viagens exclusivo para mulheres, oferecendo roteiros autênticos, imersão cultural e conexões reais.

![Tamarina Preview](https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop)

## ✨ Funcionalidades

- 🌍 **Roteiros Exclusivos** - Experiências únicas em destinos brasileiros
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop e mobile
- 🎨 **UI/UX Moderna** - Interface elegante com animações suaves
- ♿ **Acessibilidade** - Suporte a reduced motion e navegação por teclado
- ⚡ **Performance Otimizada** - Core Web Vitals otimizados
- 🔗 **Integração WhatsApp** - Contato direto para reservas

## 🛠️ Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fontes:** OPTIBuffer, BabeSans

## 📁 Estrutura do Projeto

```
tamarina-site/
├── web/                          # Aplicação Next.js
│   ├── src/
│   │   ├── app/                  # App Router
│   │   │   ├── page.tsx          # Página inicial
│   │   │   ├── layout.tsx        # Layout raiz
│   │   │   ├── error.tsx         # Página de erro
│   │   │   ├── loading.tsx       # Loading state
│   │   │   └── roteiros/         # Páginas de destinos
│   │   │       ├── ouro-preto/
│   │   │       ├── paraty/
│   │   │       └── lencois-maranhenses/
│   │   └── app/
│   │       └── globals.css       # Estilos globais
│   ├── public/                   # Assets estáticos
│   │   └── images/               # Imagens e logos
│   └── package.json              # Dependências
├── assets-marca/                 # Assets de design (não versionado)
└── README.md                     # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/felipcsousa/tamarina-site.git
cd tamarina-site/web
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse o site:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa linting do código |

## 🎯 Funcionalidades Implementadas

### ✅ Fase 1 - Críticas
- [x] Menu mobile responsivo com hambúrguer
- [x] Viewport meta tag configurado
- [x] Atributo `sizes` em todas as imagens
- [x] Touch targets de 44px (acessibilidade)
- [x] Preload de fontes customizadas

### ✅ Fase 2 - Melhorias
- [x] Segurança em links externos (`rel="noopener noreferrer"`)
- [x] Alt text otimizado para acessibilidade
- [x] Suporte a `prefers-reduced-motion`
- [x] Error boundaries implementados
- [x] Validação de formulários
- [x] Skip link para navegação por teclado

### ✅ Fase 3 - Refinamentos
- [x] Loading states
- [x] Labels em formulários
- [x] Remoção de assets não utilizados
- [x] Otimização de imagens externas

## 🎨 Cores da Marca

| Cor | Hex | Uso |
|-----|-----|-----|
| Creme | `#FCFAE8` | Background principal |
| Areia | `#B0926A` | Background secundário |
| Oliva | `#927D14` | Destaques/accentos |
| Vermelho | `#91222C` | CTAs/alertas |
| Marrom | `#5B3B1E` | Texto principal |

## 🌐 Deploy

Este projeto está configurado para deploy na [Vercel](https://vercel.com/).

### Deploy na Vercel

1. Importe o repositório na Vercel
2. Configure o diretório raiz como `web/`
3. Deploy automático a cada push na branch `main`

**URL de Produção:** [https://tamarina-site.vercel.app](https://tamarina-site.vercel.app) *(exemplo)*

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🔗 Links Úteis

- 🌐 **Site:** [https://tamarina.com.br](https://tamarina.com.br)
- 📧 **Contato:** [WhatsApp](https://wa.me/5534997391927)
- 💼 **LinkedIn:** [Tamarina Clube de Viagens](https://linkedin.com/company/tamarina)
- 📸 **Instagram:** [@tamarinaclube](https://instagram.com/tamarinaclube)

## 👥 Autor

**Felipe Sousa** - [@felipcsousa](https://github.com/felipcsousa)

---

<p align="center">
  Feito com 💜 para o Clube Tamarina
</p>

<p align="center">
  <sub>© 2025 Tamarina Clube de Viagens. Todos os direitos reservados.</sub>
</p>
