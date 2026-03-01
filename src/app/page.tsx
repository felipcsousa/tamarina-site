"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, Compass, Users, MapPin, Star, Instagram, Linkedin, HelpCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hook to detect reduced motion preference
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

const fadeInUp = (reducedMotion: boolean): Variants => ({
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: reducedMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" } 
  }
});

const staggerContainer = (reducedMotion: boolean): Variants => ({
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reducedMotion ? { staggerChildren: 0 } : { staggerChildren: 0.2 }
  }
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-tamarina-creme overflow-hidden text-tamarina-marrom">
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 top-0 left-0 px-6 flex justify-between items-center text-tamarina-creme bg-tamarina-marrom/70 backdrop-blur-md border-b border-tamarina-creme/10 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="relative w-32 h-10">
          <Image 
            src="/images/logo-transparente.png" 
            alt="Tamarina Logo" 
            fill 
            sizes="128px"
            className="object-contain object-left invert"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-babe tracking-wider uppercase text-sm font-semibold">
          <Link href="#roteiros" className="hover:opacity-70 transition-opacity">Roteiros</Link>
          <Link href="#clube" className="hover:opacity-70 transition-opacity">O Clube</Link>
          <Link href="#faq" className="hover:opacity-70 transition-opacity">FAQ</Link>
        </div>
        
        {/* Desktop CTA */}
        <Link href="#roteiros" className="hidden md:block bg-tamarina-creme text-tamarina-marrom px-6 py-2 rounded-full font-babe uppercase text-xs font-bold tracking-widest hover:bg-tamarina-vermelho hover:text-white transition-all shadow-lg active:scale-95">
          Entrar no Clube
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden w-11 h-11 flex items-center justify-center min-w-[44px] min-h-[44px]"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-tamarina-creme transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-tamarina-creme transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-tamarina-creme transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-tamarina-marrom/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link 
              href="#roteiros" 
              onClick={closeMobileMenu}
              className="font-opti text-3xl text-tamarina-creme hover:text-tamarina-oliva transition-colors"
            >
              Roteiros
            </Link>
            <Link 
              href="#clube" 
              onClick={closeMobileMenu}
              className="font-opti text-3xl text-tamarina-creme hover:text-tamarina-oliva transition-colors"
            >
              O Clube
            </Link>
            <Link 
              href="#faq" 
              onClick={closeMobileMenu}
              className="font-opti text-3xl text-tamarina-creme hover:text-tamarina-oliva transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="#roteiros" 
              onClick={closeMobileMenu}
              className="mt-4 bg-tamarina-creme text-tamarina-marrom px-8 py-3 rounded-full font-babe uppercase text-sm font-bold tracking-widest hover:bg-tamarina-vermelho hover:text-white transition-all shadow-lg"
            >
              Entrar no Clube
            </Link>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop"
            alt="Grupo de mulheres em viagem"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Darker organic gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-tamarina-creme"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(prefersReducedMotion)}
        >
          <motion.div variants={fadeInUp(prefersReducedMotion)} className="mb-6 flex justify-center">
             <Image 
                src="/images/logo-in.png" 
                alt="Selo Tamarina" 
                width={100} 
                height={100} 
                className="opacity-90 drop-shadow-md"
              />
          </motion.div>
          <motion.h1 
            variants={fadeInUp(prefersReducedMotion)}
            className="font-opti text-4xl md:text-6xl lg:text-[140px] leading-[0.85] text-tamarina-creme drop-shadow-lg tracking-tight mb-6"
          >
            DESCUBRA O <br />
            <span className="italic font-light">MUNDO</span> EM BOA <br />
            COMPANHIA.
          </motion.h1>
          <motion.p 
            variants={fadeInUp(prefersReducedMotion)}
            className="font-babe text-base md:text-2xl text-tamarina-creme max-w-2xl mx-auto mb-10 drop-shadow-md"
          >
            Um clube de viagens exclusivo para mulheres. Roteiros autênticos, imersão cultural e conexões reais.
          </motion.p>
          <motion.div variants={fadeInUp(prefersReducedMotion)}>
            <Link 
              href="#roteiros" 
              className="inline-flex items-center gap-3 bg-tamarina-vermelho text-tamarina-creme px-6 py-4 md:px-10 md:py-5 rounded-full font-babe text-sm md:text-lg uppercase tracking-widest hover:bg-[#7a1b24] transition-all shadow-xl active:scale-95"
            >
              Explorar Expedições
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO / MANIFESTO */}
      <section id="clube" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8 }}
            className="relative order-2 md:order-1 mt-10 md:mt-0"
          >
            <div className="relative h-[400px] md:h-[600px] w-full max-w-[500px] mx-auto">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] z-10 stamp-border p-2 bg-tamarina-areia rotate-[-2deg]">
                <Image 
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop"
                  alt="Grupo de mulheres"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover p-2"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[70%] h-[60%] z-20 shadow-2xl p-3 bg-white rotate-[4deg]">
                <Image 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop"
                  alt="Destino cultural"
                  fill
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <Compass className="text-tamarina-oliva w-6 h-6 md:w-8 md:h-8" />
              <span className="font-babe uppercase tracking-widest text-tamarina-oliva font-bold text-sm md:text-base">O Nosso Manifesto</span>
            </div>
            <h2 className="font-opti text-3xl md:text-5xl lg:text-6xl text-tamarina-marrom leading-tight mb-6 md:mb-8">
              VIAJAR É MAIS DO QUE CONHECER LUGARES. É ENCONTRAR-SE.
            </h2>
            <div className="space-y-4 md:space-y-6 font-babe text-base md:text-lg text-tamarina-marrom/80 leading-relaxed">
              <p>
                Acreditamos que o mundo deve ser explorado com segurança, mas sem perder a essência da aventura. A Tamarina nasceu para conectar mulheres inquietas.
              </p>
              <p>
                Nossos roteiros fogem dos pacotes frios. Desenhamos cada etapa para que você sinta o destino na pele, prove sabores autênticos e, acima de tudo, crie laços inquebráveis com as mulheres ao seu lado.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <Users className="text-tamarina-oliva mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-opti text-2xl mb-2">Comunidade</h3>
                <p className="font-babe text-sm opacity-80">Viaje só, mas nunca sozinha. O grupo é sua rede de apoio.</p>
              </div>
              <div>
                <Globe className="text-tamarina-oliva mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-opti text-2xl mb-2">Imersão</h3>
                <p className="font-babe text-sm opacity-80">Fuja do turismo de massa. Vivemos o destino como os locais.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="roteiros" className="py-20 md:py-32 bg-tamarina-areia relative px-6">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none hidden md:block">
          <Image src="/images/logo-out.png" alt="" width={400} height={400} aria-hidden="true" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(prefersReducedMotion)}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16"
          >
            <div>
              <span className="font-babe uppercase tracking-widest text-tamarina-vermelho font-bold block mb-2 md:mb-4 text-sm md:text-base">Próximos Embarques</span>
              <h2 className="font-opti text-4xl md:text-6xl text-tamarina-marrom leading-tight">PARA ONDE<br/>VAMOS AGORA?</h2>
            </div>
            <Link href="#" className="mt-6 md:mt-0 font-babe uppercase tracking-widest border-b border-tamarina-marrom pb-1 hover:text-tamarina-vermelho hover:border-tamarina-vermelho transition-colors text-sm md:text-base">
              Ver todos os roteiros
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ouro Preto",
                date: "1 de Maio",
                image: "https://blog.assistentedeviagem.com.br/wp-content/uploads/2024/07/IMG_20180414_145450808_HDR-01-e1758123872101.jpeg",
                type: "História & Arquitetura",
                status: "Esgotado",
                slug: "ouro-preto"
              },
              {
                title: "Lençóis Maranhenses",
                date: "5 a 7 de Junho",
                image: "https://www.gov.br/turismo/pt-br/assuntos/noticias/parque-nacional-dos-lencois-maranhenses-e-reconhecido-como-patrimonio-natural-da-humanidade/CrditoguilhermespenglerShutterstock.png/@@images/5faf9a18-2c4d-49b2-bb40-990f2bb18803.png",
                type: "Natureza & Trekking",
                status: "Esgotado",
                slug: "lencois-maranhenses"
              },
              {
                title: "Paraty",
                date: "5 a 7 de Setembro",
                image: "https://images.unsplash.com/photo-1618606421447-06c05db2652b?q=80&w=2070&auto=format&fit=crop",
                type: "Cultura, Mar & História",
                status: "Inscrições Abertas",
                slug: "paraty"
              }
            ].map((dest, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp(prefersReducedMotion)}
                className={`group ${dest.status === "Esgotado" ? "opacity-80" : ""}`}
              >
                <Link href={`/roteiros/${dest.slug}`}>
                  <div className="relative h-[450px] overflow-hidden mb-6 rounded-t-full rounded-b-sm shadow-lg">
                    {/* Status Badge */}
                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full font-babe text-xs font-bold tracking-widest uppercase shadow-md ${
                      dest.status === 'Esgotado' 
                        ? 'bg-tamarina-marrom/80 text-tamarina-creme backdrop-blur-sm' 
                        : 'bg-tamarina-vermelho text-tamarina-creme animate-pulse'
                    }`}>
                      {dest.status}
                    </div>

                    <Image 
                      src={dest.image}
                      alt={dest.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-1000 ${dest.status === "Inscrições Abertas" ? "group-hover:scale-105" : "grayscale-[30%]"}`}
                    />
                    <div className="absolute bottom-4 right-4 bg-tamarina-creme p-2 rounded-full shadow-md z-20">
                      <Image src="/images/logo-in.png" alt="Selo" width={30} height={30} className="opacity-80" />
                    </div>
                    {/* Dark overlay for text readability if needed or just for aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tamarina-marrom/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2 font-babe text-sm uppercase tracking-wider text-tamarina-oliva">
                    <MapPin size={16} />
                    {dest.type}
                  </div>
                  <h3 className="font-opti text-3xl text-tamarina-marrom mb-2">{dest.title}</h3>
                  <p className="font-babe opacity-80 mb-4">{dest.date}</p>
                  <div className={`h-0.5 bg-tamarina-vermelho transition-all duration-500 ${dest.status === 'Inscrições Abertas' ? 'w-12 group-hover:w-full' : 'w-12 opacity-50'}`}></div>
                </Link>
                
                {/* CTA Button - Outside the main Link to avoid nesting */}
                <div className="mt-6">
                  {dest.slug === 'paraty' ? (
                    <Link
                      href="https://wa.me/5534997391927?text=Olá! Tenho interesse em garantir minha vaga para o roteiro de Paraty."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-tamarina-vermelho text-tamarina-creme px-6 py-3 rounded-full font-babe uppercase text-sm font-bold tracking-widest hover:bg-[#7a1b24] transition-all shadow-lg active:scale-95"
                    >
                      Garantir Vaga
                    </Link>
                  ) : (
                    <Link
                      href={`https://wa.me/5534997391927?text=Olá! Vi que o grupo de ${dest.title} está esgotado. Tenho interesse em ser avisada sobre o próximo grupo!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-tamarina-marrom/80 text-tamarina-creme px-6 py-3 rounded-full font-babe uppercase text-sm font-bold tracking-widest hover:bg-tamarina-marrom transition-all shadow-lg active:scale-95"
                    >
                      Entrar na Lista de Espera
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Momentarily removed
      <section id="depoimentos" className="py-20 md:py-32 bg-tamarina-marrom text-tamarina-creme relative overflow-hidden">
        ...
      </section>
      */}

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 md:py-32 px-6 md:px-12 bg-tamarina-creme relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 md:mb-16 justify-center">
            <HelpCircle className="text-tamarina-oliva w-8 h-8 md:w-10 md:h-10" />
            <h2 className="font-opti text-4xl md:text-6xl text-tamarina-marrom text-center uppercase">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "Posso ir sozinha?",
                a: "Com certeza! A Tamarina nasceu justamente para conectar mulheres que desejam explorar o mundo, mas nem sempre têm companhia. Aqui, você embarca sozinha e volta com um grupo de novas amigas."
              },
              {
                q: "Como funciona a segurança?",
                a: "Sua segurança é nossa prioridade absoluta. Todos os nossos roteiros são validados previamente e você terá o acompanhamento integral de uma anfitriã Tamarina, além de guias locais experientes e especializados."
              },
              {
                q: "Como são divididos os quartos?",
                a: "Para manter o clima de comunidade e tornar a viagem mais acessível, trabalhamos com quartos duplos ou triplos compartilhados entre as participantes. Mas não se preocupe, fazemos uma curadoria para que você se sinta confortável."
              },
              {
                q: "O roteiro inclui transporte aéreo?",
                a: "No momento, nossos pacotes não incluem passagens aéreas. No entanto, oferecemos todo o suporte necessário para te ajudar a escolher os melhores voos e coordenar sua chegada até o ponto de encontro da expedição."
              },
              {
                q: "Como faço para entrar no clube?",
                a: "É simples! Basta escolher um de nossos roteiros disponíveis e garantir sua vaga. Se preferir, você pode nos chamar no WhatsApp para tirar dúvidas e ser avisada sobre os próximos embarques."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-tamarina-areia pb-6 group">
                <h3 className="font-opti text-2xl md:text-3xl text-tamarina-marrom mb-4 flex justify-between items-center group-hover:text-tamarina-oliva transition-colors cursor-default">
                  {item.q}
                </h3>
                <p className="font-babe text-base md:text-lg text-tamarina-marrom/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-babe text-lg mb-6">Ainda tem alguma pergunta?</p>
            <Link
              href="https://wa.me/5534997391927?text=Olá! Gostaria de saber mais sobre como funciona o Clube Tamarina."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tamarina-marrom text-tamarina-creme px-8 py-4 rounded-full font-babe uppercase tracking-widest text-sm font-bold hover:bg-tamarina-oliva transition-all shadow-lg active:scale-95"
            >
              Conversar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-tamarina-creme pt-24 pb-12 px-6 border-t border-tamarina-areia">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-48 h-16 mb-6">
                <Image 
                  src="/images/logo-transparente.png" 
                  alt="Tamarina Logo" 
                  fill 
                  sizes="192px"
                  className="object-contain object-left"
                />
            </div>
            <p className="font-babe text-tamarina-marrom/80 max-w-sm leading-relaxed mb-8">
              Um clube de viagens para mulheres inquietas que buscam autenticidade, segurança e comunidade ao redor do mundo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-tamarina-marrom flex items-center justify-center hover:bg-tamarina-marrom hover:text-tamarina-creme transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-tamarina-marrom flex items-center justify-center hover:bg-tamarina-marrom hover:text-tamarina-creme transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-opti text-xl mb-6">Explore</h4>
            <ul className="space-y-4 font-babe text-tamarina-marrom/80">
              <li><Link href="#roteiros" className="hover:text-tamarina-vermelho transition-colors">Destinos</Link></li>
              <li><Link href="#clube" className="hover:text-tamarina-vermelho transition-colors">Sobre o Clube</Link></li>
              <li><Link href="#faq" className="hover:text-tamarina-vermelho transition-colors">Perguntas Frequentes</Link></li>
              <li><Link href="https://wa.me/5534997391927?text=Olá! Gostaria de saber mais sobre como funciona o Clube Tamarina." target="_blank" rel="noopener noreferrer" className="hover:text-tamarina-vermelho transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-opti text-xl mb-6">Junte-se a nós</h4>
            <p className="font-babe text-tamarina-marrom/80 mb-4 text-sm">Receba novidades e roteiros em primeira mão.</p>
            <form 
              className="flex flex-col gap-3" 
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                if (email && email.includes('@')) {
                  alert('Obrigada! Em breve você receberá nossas novidades.');
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert('Por favor, insira um e-mail válido.');
                }
              }}
            >
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="Seu melhor e-mail"
                required
                className="bg-transparent border-b border-tamarina-marrom py-2 font-babe outline-none focus:border-tamarina-vermelho transition-colors placeholder:text-tamarina-marrom/50"
              />
              <button 
                type="submit"
                className="bg-tamarina-marrom text-tamarina-creme font-babe uppercase tracking-widest text-sm py-3 mt-2 hover:bg-tamarina-oliva transition-all active:scale-95"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-tamarina-areia pt-8 flex flex-col md:flex-row justify-between items-center font-babe text-sm text-tamarina-marrom/60">
          <p>© {new Date().getFullYear()} Tamarina Clube de Viagens. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-tamarina-marrom">Termos de Uso</Link>
            <Link href="#" className="hover:text-tamarina-marrom">Privacidade</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
