import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronDown, Instagram, Menu, Sparkles, Star, X } from "lucide-react";
import retratoJosiane from "@/assets/retrato-josiane.png.asset.json";
import logoJosiane from "@/assets/logo-josiane-severo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josiane Severo | Salão de Beleza" },
      { name: "description", content: "Conheça o Espaço Josiane Severo: cortes, coloração e cuidados capilares. Agende seu momento de beleza pelo Instagram." },
      { property: "og:title", content: "Josiane Severo | Salão de Beleza" },
      { property: "og:description", content: "Beleza com identidade e cuidado em cada fio no Espaço Josiane Severo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  { question: "Como faço para agendar um horário?", answer: "É só tocar no botão de agendamento e entrar em contato pelo Instagram. Você pode contar o que deseja fazer e combinar o melhor dia e horário." },
  { question: "Como saber qual serviço é ideal para meu cabelo?", answer: "Antes de definir o procedimento, converse sobre seu objetivo, histórico químico e rotina de cuidados. Assim fica mais fácil escolher uma opção adequada aos seus fios." },
  { question: "Quanto custa cada serviço?", answer: "O valor pode variar conforme o comprimento, o volume dos fios e o procedimento escolhido. Entre em contato para receber uma orientação e um orçamento personalizado." },
  { question: "Posso levar uma foto de referência?", answer: "Claro! Fotos ajudam a mostrar o resultado que você imagina. A avaliação considera também a cor atual, a textura e as condições do seu cabelo." },
];

const testimonials = [
  { name: "Mariana Alcântara", service: "Corte e finalização", quote: "Cheguei sem saber exatamente o que queria e saí me reconhecendo no espelho. A escuta foi o que mais me surpreendeu." },
  { name: "Carla Bueno", service: "Coloração", quote: "Nunca tive um loiro tão natural. O cuidado com os fios em cada etapa fez toda a diferença no resultado final." },
  { name: "Renata Vilas Boas", service: "Tratamento capilar", quote: "Meu cabelo estava muito ressecado e voltou a ter brilho e movimento. Saí de lá leve e me sentindo linda." },
  { name: "Juliana Prado", service: "Penteado para evento", quote: "O penteado durou a festa inteira e continuou impecável. Atenção a cada detalhe, do início ao acabamento." },
  { name: "Amanda Nogueira", service: "Corte e coloração", quote: "Ambiente acolhedor e resultado acima do que eu imaginei. Virei cliente e já indiquei para duas amigas." },
  { name: "Patrícia Lemos", service: "Escova e styling", quote: "Atendimento atencioso do começo ao fim. É raro encontrar alguém que entende tão rápido o que você quer." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="salon-site">
      <div className="announcement"><Sparkles size={13} /> Um momento para você. Um cuidado que faz a diferença.</div>
      <header className="site-header">
        <a href="#inicio" className="wordmark" onClick={closeMenu} aria-label="Espaço Josiane Severo, início">
          <img className="site-logo" src={logoJosiane.url} alt="Josiane Severo — Salão de Beleza" width={1448} height={1086} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#sobre" onClick={closeMenu}>O espaço</a>
          <a href="#trabalhos" onClick={closeMenu}>Trabalhos</a>
          <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
          <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
        </nav>
        <a className="header-cta" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Agende seu horário <ArrowRight size={15} /></a>
      </header>

      <section className="hero hero-with-logo" id="inicio">
        <a href="#inicio" className="wordmark hero-logo hero-logo-side" aria-label="Espaço Josiane Severo, início">
          <img className="site-logo" src={logoJosiane.url} alt="Josiane Severo — Salão de Beleza" width={1448} height={1086} fetchPriority="high" />
        </a>
        <div className="hero-copy">
          <div className="eyebrow"><span /> BELEZA QUE TEM A SUA ESSÊNCIA</div>
          <h1>Seu cabelo.<br />Sua história.<br /><em>Sua melhor versão.</em></h1>
          <p>Um espaço para renovar o visual, cuidar de você e sair se sentindo ainda mais confiante.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Vamos agendar <ArrowRight size={17} /></a>
            <a className="text-link" href="#trabalhos">Conheça nossos trabalhos <ArrowDown size={15} /></a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Cuidado, beleza e autoestima">
        <div className="marquee-track"><span>BELEZA COM IDENTIDADE</span><b>✳</b><span>CUIDADO EM CADA FIO</span><b>✳</b><span>UM TEMPO PARA VOCÊ</span><b>✳</b><span>BELEZA COM IDENTIDADE</span><b>✳</b><span>CUIDADO EM CADA FIO</span><b>✳</b></div>
      </div>

      <section className="about section-pad" id="sobre">
        <div className="about-image-wrap">
          <img src={retratoJosiane.url} alt="Retrato elegante no salão de beleza" width={1024} height={1536} />
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span /> UM ESPAÇO PARA VOCÊ</div>
          <h2>Mais do que mudar o visual, <em>sentir-se bem.</em></h2>
          <p className="lead">Acreditamos que cuidar do cabelo também é uma forma de cuidar de si.</p>
          <p>Cada pessoa tem sua própria beleza. Nosso objetivo é ouvir o que você deseja, entender seu estilo e criar uma experiência acolhedora — com atenção aos detalhes e respeito à identidade de cada cliente.</p>
          <a className="text-link" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Conheça nosso trabalho <ArrowRight size={16} /></a>
          <div className="about-values">
            <div><Check size={16} /><span>Atendimento atencioso</span></div>
            <div><Check size={16} /><span>Beleza com personalidade</span></div>
            <div><Check size={16} /><span>Cuidado com os fios</span></div>
          </div>
        </div>
      </section>

      <section className="portfolio section-pad" id="trabalhos">
        <div className="portfolio-heading">
          <div>
            <div className="eyebrow"><span /> UM POUCO DO NOSSO TRABALHO</div>
            <h2>Beleza que aparece<br /><em>nos detalhes.</em></h2>
          </div>
          <p>Inspire-se em diferentes estilos e encontre referências para o seu próximo momento de cuidado.</p>
        </div>
        <div className="portfolio-grid">
          <a className="portfolio-item portfolio-item-tall" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer" aria-label="Ver mais trabalhos no Instagram">
            <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85" alt="Cabelo com corte e acabamento profissional" loading="lazy" />
            <span className="portfolio-overlay"><small>01 / CORTE & STYLING</small><strong>Seu estilo, sua identidade</strong><ArrowRight size={18} /></span>
          </a>
          <a className="portfolio-item" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer" aria-label="Ver trabalhos de coloração no Instagram">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Inspiração de beleza e cabelo" loading="lazy" />
            <span className="portfolio-overlay"><small>02 / COR & LUMINOSIDADE</small><strong>Uma nova luz</strong><ArrowRight size={18} /></span>
          </a>
          <a className="portfolio-item" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer" aria-label="Ver mais inspirações de cabelo no Instagram">
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85" alt="Inspiração para um visual elegante" loading="lazy" />
            <span className="portfolio-overlay"><small>03 / CUIDADO & FINALIZAÇÃO</small><strong>O toque final</strong><ArrowRight size={18} /></span>
          </a>
        </div>
        <div className="portfolio-bottom">
          <span>Gostou de alguma referência?</span>
          <a className="text-link" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Veja mais no Instagram <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="testimonials section-pad" id="depoimentos">
        <div className="testimonial-top"><div className="eyebrow"><span /> PALAVRAS QUE INSPIRAM</div><h2>O melhor resultado<br />é <em>você se sentir bem.</em></h2><p>Uma boa experiência começa com escuta, cuidado e atenção a cada detalhe.</p></div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <div className="testimonial-stars" aria-label="Avaliação: 5 de 5">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={13} fill="currentColor" strokeWidth={0} />)}</div>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-initials" aria-hidden="true">{item.name.split(" ").map((word) => word[0]).join("")}</span>
                <span className="testimonial-who"><strong>{item.name}</strong><small>{item.service}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="testimonial-note"><span className="quote-mark">“</span><p>Seu próximo momento de cuidado começa com uma conversa. Conte o que você está buscando e vamos pensar no visual ideal para você.</p><a className="text-link" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Fale com o espaço <ArrowRight size={16} /></a><small>Queremos ouvir sua experiência também.</small></div>
      </section>

      <section className="faq section-pad" id="duvidas">
        <div className="faq-intro"><div className="eyebrow"><span /> ANTES DE AGENDAR</div><h2>Ficou com<br />alguma <em>dúvida?</em></h2><p>Separamos algumas respostas para deixar tudo mais simples antes da sua visita.</p><a className="text-link" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Pergunte pelo Instagram <ArrowRight size={16} /></a></div>
        <div className="faq-list">{faqs.map((faq, index) => <div className={openFaq === index ? "faq-item active" : "faq-item"} key={faq.question}><button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span><i>0{index + 1}</i>{faq.question}</span><ChevronDown size={19} /></button>{openFaq === index && <p className="faq-answer">{faq.answer}</p>}</div>)}</div>
      </section>

      <section className="final-cta"><div className="eyebrow eyebrow-light"><span /> SEU PRÓXIMO CAPÍTULO</div><h2>Vamos cuidar<br />de <em>você?</em></h2><p>Seu próximo visual começa com uma mensagem.</p><a className="button button-light" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer">Agende pelo Instagram <ArrowRight size={17} /></a><span className="cta-sparkle sparkle-one">✳</span><span className="cta-sparkle sparkle-two">✳</span></section>

      <footer className="site-footer"><a href="#inicio" className="wordmark footer-wordmark"><img className="site-logo" src={logoJosiane.url} alt="Josiane Severo — Salão de Beleza" width={1448} height={1086} loading="lazy" /></a><span>Beleza com identidade. Cuidado em cada detalhe.</span><a className="footer-instagram" href="https://www.instagram.com/espacojosianesevero/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram <ArrowRight size={14} /></a><small>© {new Date().getFullYear()} Espaço Josiane Severo</small></footer>
    </main>
  );
}
