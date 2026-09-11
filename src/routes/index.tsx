import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, Coffee, Clock, MapPin, Phone, MessageCircle, ChevronDown,
  Star, ArrowRight, Menu, X, ShoppingBag, Check, ExternalLink, ShieldCheck, Gift, Heart
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: QueroMaisDoceriaLandingPage,
});

export default function QueroMaisDoceriaLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  // Form simulator state
  const [clientName, setClientName] = useState("");
  const [orderType, setOrderType] = useState("Fatias do Famoso Pudim Artesanal");
  const [deliveryMode, setDeliveryMode] = useState("Retirada na Loja (R. Fileuterpe)");
  const [details, setDetails] = useState("");

  const phone = "5521971664513";
  const phoneDisplay = "(21) 97166-4513";
  const address = "R. Fileuterpe, 568 - Bairro de São Pedro, Teresópolis - RJ";
  const locationNote = "Em frente à Paróquia São Pedro";
  const hours = "Segunda a Domingo das 09:00 às 20:00 (Aberto todos os dias)";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial da Quero Mais Doceria e gostaria de ver o cardápio do dia e fazer um pedido."
  )}`;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NOVO PEDIDO / ENCOMENDA - QUERO MAIS DOCERIA*
---------------------------------------
*Cliente:* ${clientName || "Cliente do Site"}
*Item / Linha de Interesse:* ${orderType}
*Modalidade:* ${deliveryMode}
${details ? `*Observações / Data:* ${details}` : ""}
---------------------------------------
Vim pelo site oficial e aguardo a confirmação!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const menuItems = [
    {
      category: "pudim",
      title: "O Famoso Pudim Tradicional",
      desc: "Textura aveludada lisinha sem furinhos, calda de caramelo dourada brilhante e equilíbrio doce perfeito.",
      price: "R$ 14,00",
      unit: "fatia generosa",
      image: "/images/pudim.webp",
      highlight: true,
      badge: "Astro da Casa"
    },
    {
      category: "pudim",
      title: "Pudim Família Forma Inteira",
      desc: "A clássica forma inteira para enriquecer o almoço de domingo da sua família com fartura e afeto.",
      price: "R$ 85,00",
      unit: "serve até 10 pessoas",
      image: "/images/pudim.webp",
      highlight: true,
      badge: "Sob Encomenda"
    },
    {
      category: "tortas",
      title: "Torta Ninho com Nutella & Morango",
      desc: "Massa leve, brigadeiro de leite em pó sedoso, generosas camadas de Nutella pura e morangos frescos.",
      price: "R$ 20,00",
      unit: "fatia",
      image: "/images/torta_ninho.webp",
      highlight: false,
      badge: "Favorita"
    },
    {
      category: "tortas",
      title: "Torta Holandesa Nobre",
      desc: "Base crocante de biscoito coberto de chocolate, creme holandês aerado e ganache meio amargo espelhado.",
      price: "R$ 18,00",
      unit: "fatia",
      image: "/images/torta_holandesa.webp",
      highlight: false,
      badge: "Clássico Nobre"
    },
    {
      category: "tortas",
      title: "Torta Alemã Artesanal",
      desc: "Camadas intercaladas de creme manteiga suave, biscoito embebido e finalização refinada em chocolate.",
      price: "R$ 18,00",
      unit: "fatia",
      image: "/images/torta_holandesa.webp",
      highlight: false,
      badge: "Tradição"
    },
    {
      category: "tortas",
      title: "Torta Red Velvet Velvet Touch",
      desc: "Massa aveludada escarlate com recheio cremoso à base de cream cheese delicado e toque cítrico.",
      price: "R$ 19,00",
      unit: "fatia",
      image: "/images/torta_ninho.webp",
      highlight: false,
      badge: "Sofisticada"
    },
    {
      category: "encomendas",
      title: "Torta Comemorativa de Aniversário",
      desc: "Bolo decorado artesanal para festas com tema e recheio personalizados. Antecedência mínima de 24h a 48h.",
      price: "A partir de R$ 140,00",
      unit: "aprox. 2,2kg a 2,5kg",
      image: "/images/torta_festa.webp",
      highlight: true,
      badge: "Festas & Eventos"
    },
    {
      category: "encomendas",
      title: "Torta Holandesa Grande de Festa",
      desc: "Apresentação imponente para ocasiões especiais com coroa de biscoitos Calipso e cobertura impecável.",
      price: "R$ 135,00",
      unit: "serve 12 a 15 fatias",
      image: "/images/torta_festa.webp",
      highlight: false,
      badge: "Encomenda 24h"
    },
    {
      category: "cafeteria",
      title: "Cappuccino Italiano com Canela",
      desc: "Café espresso encorpado, leite vaporizado com microespuma sedosa e toque de chocolate em pó e canela.",
      price: "R$ 12,00",
      unit: "xícara 180ml",
      image: "/images/cafe_quiche.webp",
      highlight: false,
      badge: "Cafeteria"
    },
    {
      category: "cafeteria",
      title: "Quiches & Empadas Finas Folhadas",
      desc: "Opções salgadas frescas com massa crocante que derrete na boca (alho-poró, peito de peru ou frango cremoso).",
      price: "R$ 14,00",
      unit: "unidade",
      image: "/images/cafe_quiche.webp",
      highlight: false,
      badge: "Salgados Nobres"
    }
  ];

  const filteredItems = activeCategory === "todos"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const pillars = [
    {
      icon: Sparkles,
      title: "O Pudim Famoso Sem Igual",
      desc: "Aclamado por clientes e guias locais no Google Maps: textura ultra aveludada, zero furinhos e calda dourada que derrete ao primeiro toque da colher."
    },
    {
      icon: Gift,
      title: "Tortas Inteiras sob Encomenda",
      desc: "Linha festiva comemorativa para aniversários e reuniões familiares. Preparadas com ingredientes frescos com 24h a 48h de antecedência."
    },
    {
      icon: Coffee,
      title: "Cafeteria Charmosa & Aconchegante",
      desc: "Espressos especiais moídos na hora, cappuccinos cremosos e quiches folhadas servidos em um ambiente todo em tons de rosa e afeto em São Pedro."
    },
    {
      icon: ShoppingBag,
      title: "Delivery Direto sem Taxas de App",
      desc: "Peça direto com nossa equipe no WhatsApp. Você economiza as taxas pesadas dos aplicativos e recebe sua sobremesa fresquinha em casa."
    }
  ];

  const testimonials = [
    {
      name: "Lorena Gallo",
      role: "Local Guide Google Maps",
      quote: "Lugar muito bonito, bastante variedade. O pudim é sem igual. Maravilhoso. Só experimentem, é sério, parabéns!",
      rating: 5,
      highlight: "O pudim é sem igual. Maravilhoso!"
    },
    {
      name: "Giovanna Caetano",
      role: "Local Guide Google Maps",
      quote: "Fui hoje e tive uma experiência ótima! Tortas deliciosas e ambiente agradável!",
      rating: 5,
      highlight: "Tortas deliciosas e ambiente agradável!"
    },
    {
      name: "Família Teresopolitana",
      role: "Cliente Assídua de São Pedro",
      quote: "Excelente opção no bairro de São Pedro em frente à igreja. O café da tarde com quiche e a fatia de torta alemã é parada obrigatória nos finais de semana.",
      rating: 5,
      highlight: "Parada obrigatória nos finais de semana"
    }
  ];

  const faqItems = [
    {
      q: "Qual é o prazo necessário para encomendar uma torta inteira?",
      a: "Recomendamos encomendar com 24h a 48h de antecedência pelo nosso WhatsApp para que possamos produzir sua massa, recheio e finalização frescos especialmente para a data do seu evento."
    },
    {
      q: "O famoso pudim artesanal está disponível todos os dias na vitrine?",
      a: "Sim! Mantemos produção diária do nosso pudim em fatias e em potes individuais na vitrine. Para formas inteiras de pudim familiar, recomendamos reservar com antecedência pelo WhatsApp para garantir a sua."
    },
    {
      q: "Vocês fazem entrega de fatias e encomendas em casa?",
      a: "Sim! Fazemos entregas combinadas em Teresópolis diretamente pelo nosso canal próprio de WhatsApp, garantindo cuidado total no transporte e embalagens adequadas para que os doces cheguem perfeitos."
    },
    {
      q: "Onde fica localizada a loja física da Quero Mais?",
      a: "Estamos na Rua Fileuterpe, nº 568, no Bairro de São Pedro, exatamente em frente à histórica Paróquia São Pedro. É um espaço encantador e acolhedor todo em tons de rosa, com estacionamento fácil e sem a correria do centro."
    },
    {
      q: "Quais as formas de pagamento aceitas na doceria?",
      a: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras, além de dinheiro em espécie."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1E1118] selection:bg-pink-500/20 pb-24 lg:pb-0">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-pink-700 via-rose-700 to-pink-800 text-white px-4 py-2.5 text-xs font-medium shadow-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="h-3.5 w-3.5 text-pink-200 shrink-0" />
            <span>
              <strong>Quero Mais Doceria & Cafeteria:</strong> O pudim mais elogiado de Teresópolis em frente à Paróquia São Pedro.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-pink-100/90">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-pink-300" />
              Seg a Dom: 09:00 às 20:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-pink-300" />
              R. Fileuterpe, 568 - São Pedro
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR - HEADER TOTALMENTE SEM ÍCONE (APENAS NOME TIPOGRÁFICO) */}
      <header className="sticky top-0 z-40 border-b border-pink-100 bg-white/95 backdrop-blur-md transition-all shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
          {/* Logo EXCLUSIVAMENTE Tipográfica SEM NENHUM ÍCONE */}
          <a href="#" className="group flex flex-col transition-opacity hover:opacity-90">
            <span className="font-[Playfair_Display,Georgia,serif] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Quero Mais Doceria
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-pink-600 uppercase sm:text-xs">
              Confeitaria Artesanal & Cafeteria · São Pedro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              Diferenciais
            </a>
            <a href="#cardapio" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              Cardápio & Preços
            </a>
            <a href="#encomendas" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              Tortas de Festa
            </a>
            <a href="#espaco" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              O Espaço
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              Depoimentos
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-pink-600 px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-pink-500" />
              {phoneDisplay}
            </a>
            <a
              href="#pedido"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:from-pink-700 hover:to-rose-700 hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-white" />
              Pedir pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-200 text-slate-800 lg:hidden hover:bg-pink-50"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-pink-600" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-pink-100 bg-white px-6 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3.5">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                Diferenciais
              </a>
              <a
                href="#cardapio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                Cardápio & Preços
              </a>
              <a
                href="#encomendas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                Tortas de Festa
              </a>
              <a
                href="#espaco"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                O Espaço na Fileuterpe
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                Depoimentos Reais
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-800 hover:text-pink-600 py-1"
              >
                Dúvidas Frequentes
              </a>

              <div className="pt-3 border-t border-pink-100 flex flex-col gap-2">
                <a
                  href="#pedido"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Fazer Pedido no WhatsApp
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-pink-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-pink-50"
                >
                  <Phone className="h-3.5 w-3.5 text-pink-500" />
                  Ligar para a Loja: {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-pink-50/40 via-white to-white">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/90 px-4 py-1.5 text-xs font-semibold text-pink-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                Confeitaria Afetiva & Cafeteria · Em frente à Paróquia São Pedro
              </div>

              <h1 className="mt-6 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-[1.15]">
                O famoso pudim <span className="text-pink-600 italic underline decoration-pink-300 underline-offset-8">sem igual</span> e doces artesanais que aquecem o coração.
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed max-w-2xl">
                Um refúgio acolhedor na Rua Fileuterpe com vitrine de sobremesas frescas, fatias de tortas nobres, cafés especiais e encomendas comemorativas para sua família direto pelo WhatsApp — sem intermediários ou taxas de aplicativo.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pedido"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-pink-500/25 transition-all hover:from-pink-700 hover:to-rose-700 hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Fazer Pedido no WhatsApp
                </a>
                <a
                  href="#cardapio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-200 bg-white px-7 py-4 text-sm sm:text-base font-semibold text-slate-800 shadow-xs transition-all hover:bg-pink-50/60 hover:border-pink-300"
                >
                  Ver Cardápio & Preços
                  <ArrowRight className="h-4 w-4 text-pink-600" />
                </a>
              </div>

              {/* Social Proof Google Review Strip */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-pink-100 pt-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 font-semibold">Depoimentos Reais no Google:</strong>{" "}
                  <span className="italic">"O pudim é sem igual. Maravilhoso!"</span> — Lorena Gallo
                </div>
              </div>
            </div>

            {/* Right Card / Boutique Glass Box */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-pink-200/80 bg-white/95 p-6 sm:p-8 shadow-xl shadow-pink-500/10 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-pink-100 pb-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-pink-600 uppercase">
                      A Vitrine do Dia
                    </span>
                    <h3 className="font-[Playfair_Display,Georgia,serif] text-lg font-bold text-slate-900">
                      São Pedro, Teresópolis
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    Aberto até às 20:00
                  </span>
                </div>

                {/* Hero Showcase Photo */}
                <div className="mt-4 relative overflow-hidden rounded-2xl aspect-[16/9] border border-pink-100">
                  <img
                    src="/images/pudim.webp"
                    alt="O famoso pudim artesanal da Quero Mais Doceria"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold drop-shadow-sm">O Famoso Pudim Tradicional</span>
                    <span className="rounded-full bg-pink-600 px-2.5 py-0.5 text-[11px] font-bold shadow-xs">Astro da Casa</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-pink-200/80 bg-pink-50/50 p-3.5 transition-all hover:bg-pink-50">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-slate-900">Pudim Sem Furinhos</span>
                          <span className="rounded-md bg-pink-200/80 px-1.5 py-0.5 text-[10px] font-bold text-pink-800 uppercase">Top 1</span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-600">
                          Consistência aveludada lisinha e calda de caramelo pura.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-pink-600 shrink-0">R$ 14</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-pink-100 bg-white p-3.5 transition-all hover:border-pink-300">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-semibold text-sm text-slate-900">Fatias de Tortas Nobres</span>
                        <p className="mt-0.5 text-xs text-slate-600">
                          Ninho com Nutella, Holandesa, Alemã e Red Velvet frescas.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-pink-600 shrink-0">A partir R$ 18</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-pink-100 bg-white p-3.5 transition-all hover:border-pink-300">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-semibold text-sm text-slate-900">Tortas Inteiras de Festa</span>
                        <p className="mt-0.5 text-xs text-slate-600">
                          Encomendas especiais para aniversários e reuniões (24h a 48h).
                        </p>
                      </div>
                      <span className="text-xs font-bold text-pink-600 shrink-0">A partir R$ 135</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-pink-50/70 border border-pink-100 p-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                    <MapPin className="h-4 w-4 text-pink-600" />
                    {address}
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Loja charmosa em frente à Paróquia São Pedro com fácil parada e retirada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS / CONFIANÇA BANNER */}
      <section className="border-y border-pink-100 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            <div className="p-2">
              <span className="font-[Playfair_Display,Georgia,serif] text-2xl sm:text-3xl font-bold text-pink-600">
                09h às 20h
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Aberto Todos os Dias (Seg a Dom)
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Playfair_Display,Georgia,serif] text-2xl sm:text-3xl font-bold text-pink-600">
                Sem Furinhos
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Textura Lisinha e Calda Pura
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Playfair_Display,Georgia,serif] text-2xl sm:text-3xl font-bold text-pink-600">
                24h a 48h
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Encomendas de Bolos & Tortas
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Playfair_Display,Georgia,serif] text-2xl sm:text-3xl font-bold text-pink-600">
                100% Direto
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Sem Taxas de Intermediários
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS / 4 PILARES */}
      <section id="diferenciais" className="py-16 md:py-24 bg-[#FFFDFE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
              Por que nos escolher
            </span>
            <h2 className="mt-2 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              O Cuidado Artesanal que Faz a Diferença
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Cada receita carrega o carinho da confeitaria tradicional, ingredientes selecionados e o conforto de um atendimento próximo em nossa loja toda cor-de-rosa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-[Playfair_Display,Georgia,serif] text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CARDÁPIO INTERATIVO COM FILTROS DE CATEGORIA & FOTOS REAIS */}
      <section id="cardapio" className="border-t border-pink-100 bg-pink-50/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
              Vitrine & Delícias
            </span>
            <h2 className="mt-2 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nosso Cardápio Artesanal
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Consulte os itens preparados com amor para sua sobremesa, café da tarde ou celebração.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { id: "todos", label: "Todos os Itens" },
                { id: "pudim", label: "O Famoso Pudim" },
                { id: "tortas", label: "Fatias de Tortas" },
                { id: "encomendas", label: "Tortas Inteiras de Festa" },
                { id: "cafeteria", label: "Cafeteria & Salgados" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-sm shadow-pink-500/20 scale-105"
                      : "bg-white text-slate-600 border border-pink-200 hover:border-pink-300 hover:text-pink-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid with Photos */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                  item.highlight
                    ? "border-pink-300 shadow-lg ring-1 ring-pink-400/30"
                    : "border-pink-100 shadow-sm hover:border-pink-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Item Image with 16:9 Aspect Ratio */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-pink-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-pink-700 border border-pink-200/50 shadow-xs">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-2.5 right-3 text-xs font-medium text-white drop-shadow-sm">
                      {item.unit}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-[Playfair_Display,Georgia,serif] text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Preço</span>
                      <span className="font-[Playfair_Display,Georgia,serif] text-lg font-bold text-pink-600">
                        {item.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(
                        `Olá! Gostaria de pedir/encomendar: ${item.title} (${item.price}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:from-pink-700 hover:to-rose-700 active:scale-95"
                    >
                      Pedir
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cardápio Footer Note */}
          <div className="mt-10 rounded-2xl bg-white border border-pink-100 p-5 text-center text-xs text-slate-600 max-w-xl mx-auto shadow-xs">
            <p>
              Dúvidas sobre disponibilidade ou sabores sazonais do dia? Fale com a nossa equipe no WhatsApp pelo <strong className="text-pink-600">{phoneDisplay}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO ESPECIAL: TORTAS SOB ENCOMENDA PARA ANIVERSÁRIOS */}
      <section id="encomendas" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-pink-200/80 bg-gradient-to-br from-white via-pink-50/50 to-white p-8 sm:p-12 lg:p-16 shadow-xl shadow-pink-500/5">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-pink-100/90 px-3.5 py-1 text-xs font-bold text-pink-700 border border-pink-200">
                  <Gift className="h-3.5 w-3.5 text-pink-600" />
                  Celebrações & Momentos Especiais
                </div>

                <h2 className="mt-4 font-[Playfair_Display,Georgia,serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                  Sua Festa com o Sabor Inesquecível de uma Torta Artesanal.
                </h2>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                  Aniversários, batizados, noivados ou simplesmente a sobremesa do almoço em família merecem um bolo preparado com cuidado de verdade. Nossas tortas inteiras são feitas sob medida, sem conservantes químicos industriais e com recheios generosos.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-xs">
                    <span className="block text-xs font-bold text-pink-600">1. Escolha o Sabor</span>
                    <span className="mt-1 block text-xs text-slate-600">Morango, Ninho c/ Nutella, Holandesa ou Alemã.</span>
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-xs">
                    <span className="block text-xs font-bold text-pink-600">2. Avise com 24h a 48h</span>
                    <span className="mt-1 block text-xs text-slate-600">Tempo ideal para preparar a massa fresca.</span>
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-xs">
                    <span className="block text-xs font-bold text-pink-600">3. Retire ou Receba</span>
                    <span className="mt-1 block text-xs text-slate-600">Retirada na Fileuterpe ou entrega agendada.</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#pedido"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition hover:from-pink-700 hover:to-rose-700 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Encomendar Torta no WhatsApp
                  </a>
                  <span className="text-xs text-slate-600">
                    Atendimento humanizado direto com a confeiteira
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-pink-200 bg-white p-6 shadow-sm space-y-4">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                    <img
                      src="/images/torta_festa.webp"
                      alt="Torta inteira sob encomenda para aniversários"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">Encomenda Especial de Aniversário</span>
                  </div>

                  <h4 className="font-[Playfair_Display,Georgia,serif] text-base font-bold text-slate-900 border-b border-pink-100 pb-2">
                    Sabores Mais Pedidos em Festas:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                      <span><strong>Torta Ninho com Nutella e Morango:</strong> Sucesso absoluto entre crianças e adultos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                      <span><strong>Torta Holandesa Clássica:</strong> A elegância do ganache brilhante e biscoitos crocantes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                      <span><strong>Torta Alemã Tradicional:</strong> Recheio cremoso e textura aveludada inconfundível.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                      <span><strong>Pudim Família Tamanho Grande:</strong> Perfeito para impressionar a família no almoço de domingo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. O ESPAÇO & LOCALIZAÇÃO NA FILEUTERPE */}
      <section id="espaco" className="py-16 md:py-24 bg-pink-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Address Details */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
                Nosso Endereço
              </span>
              <h2 className="mt-2 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                O Refúgio Acolhedor em São Pedro
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Localizada na principal via do Bairro de São Pedro, exatamente em frente à histórica Paróquia São Pedro, a Quero Mais Doceria oferece um ambiente encantador em tons de rosa, mesas charmosas para um café sem pressa e a conveniência de fácil estacionamento.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3.5 rounded-2xl bg-white border border-pink-100 p-4 shadow-xs">
                  <MapPin className="h-5 w-5 text-pink-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Endereço Completo:</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{address}</p>
                    <span className="mt-1 inline-block text-[11px] font-semibold text-pink-600">
                      Ponto de Referência: {locationNote}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-white border border-pink-100 p-4 shadow-xs">
                  <Clock className="h-5 w-5 text-pink-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Horário de Funcionamento:</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{hours}</p>
                    <span className="mt-1 inline-block text-[11px] text-emerald-700 font-semibold">
                      Aberto todos os dias para café da tarde e sobremesa.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-white border border-pink-100 p-4 shadow-xs">
                  <Phone className="h-5 w-5 text-pink-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Contato & Encomendas:</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">WhatsApp Oficial: {phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:underline"
                >
                  Abrir no Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Google Map Embed & Ambience photo */}
            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-xl shadow-pink-500/5">
                <div className="bg-gradient-to-r from-pink-700 via-rose-700 to-pink-800 px-6 py-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-pink-200" />
                    <span className="text-xs font-semibold">Localização no Mapa</span>
                  </div>
                  <span className="text-[11px] text-pink-100">Rua Fileuterpe, 568</span>
                </div>
                <div className="h-[280px] w-full bg-slate-100">
                  <iframe
                    title="Mapa Quero Mais Doceria"
                    src="https://maps.google.com/maps?q=R.+Fileuterpe,+568+-+Bairro+de+S%C3%A3o+Pedro,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-pink-100 relative aspect-[16/9]">
                <img
                  src="/images/doceria_ambiente.webp"
                  alt="Ambiente acolhedor da doceria e cafeteria em São Pedro"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white drop-shadow-sm">
                  Espaço aconchegante para saborear cafés especiais e sobremesas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS REAIS DO GOOGLE MAPS */}
      <section id="avaliacoes" className="border-t border-pink-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
              Prova Social
            </span>
            <h2 className="mt-2 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              O que Dizem Nossos Clientes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Avaliações autênticas registradas por quem frequenta e se apaixona pelas nossas sobremesas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-pink-100 bg-pink-50/30 p-7 shadow-xs transition-all hover:bg-white hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="font-[Playfair_Display,Georgia,serif] text-base font-bold text-slate-900 mb-2">
                    "{test.highlight}"
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-pink-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{test.name}</span>
                    <span className="block text-[11px] text-pink-600">{test.role}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-pink-200">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SIMULADOR DE PEDIDO / ENCOMENDA NO WHATSAPP */}
      <section id="pedido" className="py-16 md:py-24 bg-gradient-to-b from-pink-50/40 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-pink-200/80 bg-white p-6 sm:p-10 shadow-2xl shadow-pink-500/10">
            <div className="text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700 border border-pink-200">
                <MessageCircle className="h-3.5 w-3.5" />
                Canal Direto Sem Taxas de Aplicativo
              </span>

              <h2 className="mt-3 font-[Playfair_Display,Georgia,serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Monte Seu Pedido ou Encomenda
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Preencha os dados abaixo para enviar a mensagem formatada para o nosso WhatsApp. Responderemos imediatamente para confirmar horários e sabores!
              </p>
            </div>

            <form onSubmit={handleOrderSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Seu Nome:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Clara Santos"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/15"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    O que deseja pedir:
                  </label>
                  <select
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                    className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/15"
                  >
                    <option value="Fatias do Famoso Pudim Artesanal">Fatias do Famoso Pudim Artesanal</option>
                    <option value="Pudim Família Inteiro (Forma Grande)">Pudim Família Inteiro (Forma Grande)</option>
                    <option value="Fatia de Torta Ninho c/ Nutella & Morango">Fatia de Torta Ninho c/ Nutella & Morango</option>
                    <option value="Fatia de Torta Holandesa ou Alemã">Fatia de Torta Holandesa ou Alemã</option>
                    <option value="Encomenda de Torta Inteira para Festa">Encomenda de Torta Inteira para Festa</option>
                    <option value="Café Especial + Quiche Folhada na Loja">Café Especial + Quiche Folhada na Loja</option>
                    <option value="Kit Sobremesa Família Variada">Kit Sobremesa Família Variada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Modalidade de Entrega:
                  </label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value)}
                    className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/15"
                  >
                    <option value="Retirada na Loja (R. Fileuterpe)">Retirada na Loja (R. Fileuterpe 568)</option>
                    <option value="Consumo no Espaço da Cafeteria">Consumo no Espaço da Cafeteria</option>
                    <option value="Entrega em Domicílio (Teresópolis)">Entrega em Domicílio (Teresópolis)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Observações ou Data da Festa (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de reservar para sábado às 16h, ou detalhes sobre quantidade de fatias..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/15"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-pink-500/25 transition-all hover:from-pink-700 hover:to-rose-700 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar Pedido no WhatsApp da Doceria
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
                <ShieldCheck className="h-3.5 w-3.5 text-pink-600" />
                <span>Atendimento humano · Você não paga nenhuma comissão de app</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FAQ SANFONADO */}
      <section id="faq" className="border-t border-pink-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 font-[Playfair_Display,Georgia,serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Respostas claras sobre como pedir, encomendar e aproveitar nossas receitas.
            </p>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-pink-100 bg-pink-50/20 transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-[Playfair_Display,Georgia,serif] text-base font-bold text-slate-900 hover:text-pink-600 transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-pink-600 shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-pink-100/60 pt-3 animate-in fade-in-50 duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FOOTER - ROSA VELVET ELEGANTE COM TIPOGRAFIA LIMPA */}
      <footer className="border-t border-pink-900/20 bg-[#2D0D1F] text-pink-100/90 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div>
              <span className="font-[Playfair_Display,Georgia,serif] text-xl font-bold text-white block">
                Quero Mais Doceria
              </span>
              <span className="text-xs font-medium text-pink-300 block mt-0.5">
                Confeitaria Artesanal & Cafeteria
              </span>
              <p className="mt-3 text-xs leading-relaxed text-pink-200/75">
                O pudim mais elogiado de Teresópolis, fatias de tortas artesanais, cafés especiais e encomendas para festas na Rua Fileuterpe em frente à Paróquia São Pedro.
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-pink-300 uppercase">
                Onde Estamos
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-pink-200/75">
                {address}
              </p>
              <p className="mt-1 text-xs text-pink-300 font-medium">
                Em frente à Paróquia São Pedro
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-pink-300 uppercase">
                Horários
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-pink-200/75">
                Segunda a Domingo: das 09:00 às 20:00 (Aberto todos os dias para café da tarde e sobremesas)
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-pink-300 uppercase">
                Atendimento
              </h4>
              <p className="mt-3 text-xs text-pink-200/75">WhatsApp Oficial:</p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-pink-300 hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-pink-300/80">
                Encomendas com 24h a 48h de antecedência.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-pink-900/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-pink-300/70">
            <span>
              © {new Date().getFullYear()} Quero Mais Doceria & Cafeteria · Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com excelência por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 13. MOBILE FLOATING ACTION BAR (Fixed bottom bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-100 bg-white/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-lg">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-200 text-pink-600 hover:bg-pink-50"
            aria-label="Ligar para a doceria"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="#pedido"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20 active:scale-98"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
