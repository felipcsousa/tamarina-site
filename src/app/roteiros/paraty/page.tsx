"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Map, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

export default function ParatyPage() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <main className="min-h-screen bg-tamarina-creme text-tamarina-marrom overflow-x-hidden">
      {/* HEADER SIMPLES PARA VOLTAR */}
      <nav className="fixed w-full z-50 top-0 left-0 px-6 py-6 flex justify-between items-center mix-blend-difference text-tamarina-creme">
        <Link href="/#roteiros" className="flex items-center gap-2 font-babe uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div className="relative w-24 h-8">
          <Image 
            src="/images/logo-transparente.png" 
            alt="Tamarina Logo" 
            fill 
            className="object-contain object-right invert"
          />
        </div>
      </nav>

      {/* HERO SECTION - PARATY */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-end pb-16 md:pb-24 justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618606421447-06c05db2652b?q=80&w=2070&auto=format&fit=crop"
            alt="Centro Histórico de Paraty"
            fill
            className="object-cover"
            priority
          />
          {/* Degradê para leitura do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-tamarina-marrom/80 via-tamarina-marrom/20 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-tamarina-creme">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            className="inline-block bg-tamarina-vermelho px-4 py-1.5 rounded-full font-babe text-xs font-bold tracking-widest uppercase mb-4 md:mb-6"
          >
            Inscrições Abertas
          </motion.div>
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className="font-opti text-5xl md:text-8xl drop-shadow-lg mb-4 md:mb-6 leading-none"
          >
            Paraty &<br/>Costa Verde
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-12 font-babe text-xs md:text-base tracking-widest uppercase"
          >
            <span className="flex items-center gap-2"><Calendar size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]"/> 5 a 7 de Setembro</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]"/> 3 Dias / 2 Noites</span>
            <span className="flex items-center gap-2"><Map size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]"/> Cultura & Mar</span>
          </motion.div>
        </div>
      </section>

      {/* A EXPERIÊNCIA */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="font-opti text-3xl md:text-4xl text-tamarina-oliva md:sticky md:top-24">A Experiência</h2>
          </div>
          <div className="md:w-2/3 space-y-4 md:space-y-6 font-babe text-base md:text-lg leading-relaxed opacity-90">
            <p className="text-xl md:text-2xl font-medium leading-normal mb-6 md:mb-8">
              Caminhar pelo centro histórico de Paraty é como folhear um livro vivo onde cada esquina de pedra pé-de-moleque tem uma história para contar.
            </p>
            <p>
              Neste roteiro, desenhamos uma imersão que une o charme colonial das ruas fechadas para carros com a imensidão verde-esmeralda da baía. Nosso grupo se hospedará em uma pousada boutique intimista, provando os sabores caiçaras e brindando a fins de tarde inesquecíveis.
            </p>
            <p>
              Teremos um barco privativo apenas para o nosso grupo, explorando ilhas e praias secretas longe da agitação do turismo convencional.
            </p>
          </div>
        </div>
      </section>

      {/* ITINERÁRIO (TIMELINE) */}
      <section className="py-16 md:py-24 bg-tamarina-areia px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-opti text-3xl md:text-5xl mb-10 md:mb-16 text-center">O Itinerário</h2>
          
          <div className="space-y-10 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-tamarina-marrom/20">
            
            {/* Dia 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-oliva text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">1</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">Chegada e Boas-vindas</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Sexta</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Encontro na pousada à tarde. Faremos um passeio guiado exclusivo pelo centro histórico ao entardecer, conhecendo os ateliês locais, terminando em um jantar de boas-vindas com culinária autoral paratyense.
                </p>
              </div>
            </div>

            {/* Dia 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-oliva text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">2</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">O Mar de Esmeralda</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Sábado</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Após o café da manhã, embarcaremos em nossa escuna privativa. O dia será dedicado a mergulhos nas águas calmas da Baía de Paraty, almoço a bordo e relaxamento. À noite, tempo livre para explorar a cidade.
                </p>
              </div>
            </div>

            {/* Dia 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-marrom text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">3</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">Trilha e Despedida</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Domingo</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Manhã para uma trilha leve até o Caminho do Ouro ou visita a um alambique tradicional. Encerramos nossa jornada com um almoço de despedida antes do retorno aos destinos de origem.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h2 className="font-opti text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3"><CheckCircle2 className="text-tamarina-oliva shrink-0" /> O que está incluso</h2>
          <ul className="space-y-3 md:space-y-4 font-babe opacity-90 text-sm md:text-base">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>2 noites de hospedagem em Pousada Boutique (quarto duplo compartilhado)</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Café da manhã todos os dias</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Jantar de boas-vindas (bebidas não alcoólicas inclusas)</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Passeio de barco privativo de dia inteiro</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Tour guiado pelo Centro Histórico</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Anfitriã Tamarina acompanhando o grupo em tempo integral</li>
          </ul>
        </div>
        <div>
          <h2 className="font-opti text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3 text-tamarina-vermelho/80"><AlertCircle className="shrink-0" /> Não inclui</h2>
          <ul className="space-y-3 md:space-y-4 font-babe opacity-70 text-sm md:text-base">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Passagens aéreas ou transfers até Paraty</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Refeições não mencionadas no roteiro</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Bebidas alcoólicas</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Seguro viagem (obrigatório)</li>
          </ul>
        </div>
      </section>

      {/* CONVERSÃO / CTA */}
      <section className="py-16 md:py-24 bg-tamarina-marrom text-tamarina-creme text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Image src="/images/logo-in.png" alt="Selo" width={50} height={50} className="mx-auto mb-6 md:mb-8 opacity-80 md:w-[60px] md:h-[60px]" />
          <h2 className="font-opti text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">Garanta o seu lugar</h2>
          <p className="font-babe text-base md:text-lg mb-8 opacity-80 max-w-md mx-auto">
            Nossos grupos são pequenos para garantir a melhor experiência e criar laços verdadeiros. 
            Restam apenas <span className="font-bold text-tamarina-areia">4 vagas</span> para este embarque.
          </p>
          
          <div className="bg-tamarina-creme text-tamarina-marrom p-6 md:p-8 rounded-sm mb-8 md:mb-10 inline-block text-left w-full max-w-md shadow-xl">
            <p className="font-babe text-xs md:text-sm uppercase tracking-widest text-tamarina-oliva font-bold mb-2">Valor por pessoa</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-babe font-bold">R$</span>
              <span className="font-opti text-4xl md:text-5xl">2.450</span>
            </div>
            <p className="font-babe text-xs md:text-sm opacity-80 mb-6">Em até 6x sem juros no cartão de crédito ou 5% de desconto via PIX.</p>
            
            <a
              href="https://wa.me/5534997391927?text=Olá! Tenho interesse em garantir minha vaga para o roteiro de Paraty."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-tamarina-vermelho text-white py-4 rounded-sm font-babe text-sm md:text-base uppercase tracking-widest font-bold hover:bg-[#7a1b24] transition-colors text-center block cursor-pointer"
            >
              Reservar Minha Vaga
            </a>
          </div>
          
          <p className="font-babe text-xs md:text-sm opacity-60">Dúvidas? <a href="https://wa.me/5534997391927?text=Olá! Tenho interesse em garantir minha vaga para o roteiro de Paraty." target="_blank" rel="noopener noreferrer" className="underline hover:text-tamarina-areia cursor-pointer">Fale com a gente no WhatsApp</a>.</p>
        </div>
      </section>

    </main>
  );
}
