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

export default function OuroPretoPage() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <main className="min-h-screen bg-tamarina-creme text-tamarina-marrom overflow-x-hidden">
      <nav className="fixed w-full z-50 top-0 left-0 px-6 py-6 flex justify-between items-center text-tamarina-creme">
        <Link href="/#roteiros" className="flex items-center gap-2 font-babe uppercase tracking-widest text-sm hover:opacity-70 transition-opacity drop-shadow-md">
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

      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-end pb-16 md:pb-24 justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://blog.assistentedeviagem.com.br/wp-content/uploads/2024/07/IMG_20180414_145450808_HDR-01-e1758123872101.jpeg"
            alt="Centro histórico de Ouro Preto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-tamarina-marrom/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-tamarina-creme">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            className="inline-block bg-tamarina-marrom/80 px-4 py-1.5 rounded-full font-babe text-xs font-bold tracking-widest uppercase mb-4 md:mb-6"
          >
            Esgotado
          </motion.div>
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className="font-opti text-5xl md:text-8xl drop-shadow-lg mb-4 md:mb-6 leading-none"
          >
            Ouro
            <br /> Preto
          </motion.h1>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-12 font-babe text-xs md:text-base tracking-widest uppercase"
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]" /> 1 a 3 de Maio
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]" /> 3 Dias / 2 Noites
            </span>
            <span className="flex items-center gap-2">
              <Map size={16} className="text-tamarina-areia md:w-[18px] md:h-[18px]" /> História & Arquitetura
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="font-opti text-3xl md:text-4xl text-tamarina-oliva md:sticky md:top-24">A Experiência</h2>
          </div>
          <div className="md:w-2/3 space-y-4 md:space-y-6 font-babe text-base md:text-lg leading-relaxed opacity-90">
            <p className="text-xl md:text-2xl font-medium leading-normal mb-6 md:mb-8">
              Ouro Preto é uma imersão em história viva, ladeiras de pedra e igrejas barrocas. Um feriado para fazer amigas, rir alto e sentir o abraço mineiro.
            </p>
            <p>
              Este roteiro foi desenhado para criar conexões reais em um cenário que inspira. Vamos explorar museus, cafés e mirantes, com pausas para conversas sem pressa e encontros que ficam.
            </p>
            <p>
              Hospedagem em casa colonial compartilhada, café da manhã e uma noite de vinhos para integrar o grupo e celebrar a viagem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-tamarina-areia px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-opti text-3xl md:text-5xl mb-10 md:mb-16 text-center">O Itinerário</h2>

          <div className="space-y-10 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-tamarina-marrom/20">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-oliva text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">1</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">Integração e História</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Sexta</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Check-in, café da manhã e integração do grupo. Museu da Inconfidência, Casa dos Contos e Casa Gonzaga, pausa no Café das Flores e happy hour na pousada com vinho.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-oliva text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">2</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">Tour de Jardineira</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Sábado</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Tour guiado passando por igrejas e museus, almoço no Único Lugar do Mundo, visita ao Museu Boulieu e mirante do Morro São Sebastião. Noite livre na cidade.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-tamarina-areia bg-tamarina-marrom text-tamarina-creme shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-babe font-bold text-sm md:text-base">3</div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-tamarina-creme p-5 md:p-6 rounded-sm shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-opti text-xl md:text-2xl">Café e Despedida</h3>
                  <span className="font-babe text-xs md:text-sm text-tamarina-oliva font-bold shrink-0">Domingo</span>
                </div>
                <p className="font-babe mt-2 md:mt-3 opacity-80 text-sm md:text-base">
                  Solar da Ópera Café, Casa da Ópera, Igreja do Carmo, feirinha de pedra sabão e almoço no Passo Pizza Jazz. Finalização da viagem e tarde livre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h2 className="font-opti text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3">
            <CheckCircle2 className="text-tamarina-oliva shrink-0" /> O que está incluso
          </h2>
          <ul className="space-y-3 md:space-y-4 font-babe opacity-90 text-sm md:text-base">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Hospedagem em quarto compartilhado</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Café da manhã (2 dias)</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Noite de vinhos</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Diarista e apoio na pousada</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Passeio de jardineira com guia local</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-oliva mt-2 shrink-0"></div>Curadoria e organização da viagem</li>
          </ul>
        </div>
        <div>
          <h2 className="font-opti text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3 text-tamarina-vermelho/80">
            <AlertCircle className="shrink-0" /> Não inclui
          </h2>
          <ul className="space-y-3 md:space-y-4 font-babe opacity-70 text-sm md:text-base">
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Alimentação (almoço/jantar)</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Ingressos de museus e igrejas</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Passagens aéreas até Belo Horizonte</li>
            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-tamarina-marrom/40 mt-2 shrink-0"></div>Ônibus BH → Ouro Preto</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-tamarina-marrom text-tamarina-creme text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Image src="/images/logo-in.png" alt="Selo" width={50} height={50} className="mx-auto mb-6 md:mb-8 opacity-80 md:w-[60px] md:h-[60px]" />
          <h2 className="font-opti text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">Grupo esgotado</h2>
          <p className="font-babe text-base md:text-lg mb-8 opacity-80 max-w-md mx-auto">
            Este grupo já está completo. Quer participar do próximo? A gente te avisa quando abrir uma nova turma.
          </p>

          <a
            href="https://wa.me/5534997391927?text=Olá! Vi que o grupo de Ouro Preto está esgotado. Tenho interesse em ser avisada sobre o próximo grupo!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-tamarina-oliva text-tamarina-creme py-4 px-8 rounded-sm font-babe text-sm md:text-base uppercase tracking-widest font-bold hover:bg-[#7a6a12] transition-colors cursor-pointer"
          >
            Tenho interesse no próximo grupo
          </a>

          <p className="font-babe text-xs md:text-sm opacity-60 mt-6">
            Dúvidas? <a href="https://wa.me/5534997391927?text=Olá! Vi que o grupo de Ouro Preto está esgotado. Tenho interesse em ser avisada sobre o próximo grupo!" target="_blank" rel="noopener noreferrer" className="underline hover:text-tamarina-areia cursor-pointer">Fale com a gente no WhatsApp</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
