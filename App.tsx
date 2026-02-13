import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from './constants';
import { Prompt, Category } from './types';

// --- UI Components ---

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = TOTAL_PROMPTS;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="z-10 animate-fade-in">
        <div className="inline-block px-4 py-1 border border-cyan-500/50 rounded-full text-cyan-400 text-[10px] font-black mb-6 tracking-[0.4em] uppercase bg-cyan-950/20 backdrop-blur-sm">
          Elite Business Intelligence v4.0.1
        </div>
        <h1 
          className="text-6xl md:text-[10rem] font-black mb-6 Orbitron glitch gradient-text leading-none tracking-tighter" 
          data-text="CYBER PROMPTS"
        >
          CYBER PROMPTS
        </h1>
        <div className="w-64 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-10 shadow-[0_0_20px_#00f0ff]"></div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-light text-lg md:text-2xl leading-relaxed">
          Ультимативный арсенал для <span className="text-cyan-400 font-medium">архитекторов бизнеса</span>. 
          Проверено на практике в сотнях реальных кейсов.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-3xl border border-white/10 backdrop-blur-md">
            <span className="text-5xl font-black text-cyan-400">{count}</span>
            <span className="text-[11px] text-gray-500 font-black uppercase tracking-widest text-left leading-tight">
              Боевых алгоритмов<br/>готовых к работе
            </span>
          </div>
          <button 
            onClick={onExplore}
            className="group relative bg-cyan-500 text-black px-16 py-6 rounded-3xl font-black Orbitron text-sm transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(0,240,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-widest">Доступ в базу</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-40"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-cyan-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

const TrustSection: React.FC = () => {
    const brands = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Netflix_2015_logo.svg" }
    ];

    return (
        <section className="reveal py-24 border-y border-white/5 bg-[#05070a]/40 backdrop-blur-xl">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full text-cyan-500/60 text-[10px] font-black mb-10 tracking-[0.4em] uppercase">
                    Proven Reliability
                </div>
                <h3 className="text-3xl md:text-5xl font-black Orbitron text-white mb-16 tracking-tighter uppercase">
                    БОЛЕЕ <span className="text-cyan-400">100+ БИЗНЕСОВ</span><br/>УЖЕ ВНЕДРИЛИ ЭТИ АЛГОРИТМЫ
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                    {brands.map((b) => (
                        <img key={b.name} src={b.logo} alt={b.name} className="h-8 md:h-10 object-contain hover:scale-110 transition-transform cursor-pointer" />
                    ))}
                </div>
                <p className="mt-16 text-gray-500 font-light max-w-3xl mx-auto italic text-lg leading-relaxed">
                    "Этот инструментарий полностью перепрошил наши маркетинговые процессы. То, на что раньше уходили недели мозгоштурмов, теперь занимает 15 минут качественной генерации. Конверсия выросла в 2.4 раза за первый квартал."
                </p>
                <div className="mt-8 text-cyan-500/40 text-[10px] font-black uppercase tracking-[0.5em]">
                    Verified Performance Report v2.5
                </div>
            </div>
        </section>
    );
};

const FilterBar: React.FC<{ 
  categories: Category[], 
  activeId: string, 
  onSelect: (id: string) => void,
  searchQuery: string,
  onSearch: (q: string) => void
}> = ({ categories, activeId, onSelect, searchQuery, onSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#05070a]/90 backdrop-blur-3xl border-b border-white/5 py-8 px-4">
      <div className="container mx-auto flex flex-col xl:flex-row gap-8 items-center justify-between">
        <div className="flex gap-4 overflow-x-auto pb-4 xl:pb-0 no-scrollbar w-full xl:w-auto">
          <button 
            onClick={() => onSelect('all')}
            className={`px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeId === 'all' ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_30px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'}`}
          >
            Все ниши
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border flex items-center gap-4 ${activeId === cat.id ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_30px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'}`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full xl:w-[450px]">
          <input 
            type="text"
            placeholder="Поиск по арсеналу инструментов..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-black/70 border border-white/10 rounded-[2rem] px-14 py-5 text-base focus:outline-none focus:border-cyan-500 focus:bg-black/90 transition-all text-white placeholder-gray-600 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          />
          <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
    </div>
  );
};

const StrategyBlock: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="reveal mb-20 overflow-hidden relative group">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-25 transition-opacity duration-1000 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100" style={{ backgroundImage: `url(${category.image})` }}></div>
      <div className="relative bg-gradient-to-br from-[#0d1117]/60 to-[#05070a]/60 backdrop-blur-3xl border border-cyan-500/20 rounded-[4rem] p-10 md:p-20 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-16">
            <div className="w-24 h-24 rounded-[2rem] bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_50px_rgba(0,240,255,0.5)]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <div>
                <h4 className="text-cyan-400 text-[12px] font-black uppercase tracking-[0.6em] mb-4 opacity-70">Market Dominance Protocol</h4>
                <h2 className="text-5xl md:text-7xl font-black Orbitron text-white tracking-tighter uppercase leading-none">{category.name}</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.coreStrategy.map((item, idx) => (
            <div key={idx} className="flex items-start gap-5 text-gray-400 group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all duration-700 hover:bg-white/10">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_20px_#00f0ff] shrink-0"></div>
                <p className="text-base md:text-lg leading-relaxed group-hover:text-cyan-50 text-gray-300 font-medium tracking-tight">{item}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const PromptCard: React.FC<{ prompt: Prompt }> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const getIcon = () => {
    switch(prompt.type) {
      case 'ads': return <path d="M11 5.882V19.297A1.235 1.235 0 0 1 9.765 20.532H2.235A1.235 1.235 0 0 1 1 19.297V5.882A1.235 1.235 0 0 1 2.235 4.647h7.53A1.235 1.235 0 0 1 11 5.882zm10.765 0V19.297A1.235 1.235 0 0 1 20.53 20.532h-7.53a1.235 1.235 0 0 1-1.235-1.235V5.882a1.235 1.235 0 0 1 1.235-1.235h7.53a1.235 1.235 0 0 1 1.235 1.235z"/>;
      case 'bot': return <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 6a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm0 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 14z"/>;
      case 'funnel': return <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />;
      default: return <path d="M13 10V3L4 14h7v7l9-11h-7z"/>;
    }
  }

  return (
    <article className="reveal group bg-[#0d1117]/70 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 border border-white/5 transition-all duration-700 hover:-translate-y-5 hover:border-cyan-500/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-cyan-500 shadow-[0_0_10px_#00f0ff]"></div>
            <span className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.6em]">{prompt.type} module v4.1</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white Orbitron mb-8 tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
            {prompt.title}
          </h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl font-light">{prompt.description}</p>
        </div>
        <div className="bg-black/60 p-6 rounded-[2.5rem] border border-white/10 group-hover:scale-125 transition-transform hidden md:block shrink-0 shadow-2xl">
          <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            {getIcon()}
          </svg>
        </div>
      </div>

      <div className="relative mb-12 group/code">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-[3rem] blur opacity-0 group-hover/code:opacity-100 transition duration-1000"></div>
        <div className="bg-black/95 rounded-[2.8rem] p-10 md:p-14 font-mono text-[15px] overflow-x-auto max-h-[600px] border border-white/10 relative z-10 custom-scrollbar shadow-2xl">
          <code className="text-cyan-100/80 whitespace-pre-wrap block leading-loose selection:bg-cyan-500/40">{prompt.content}</code>
        </div>
      </div>

      <button 
        onClick={handleCopy}
        className={`w-full py-8 rounded-[2rem] font-black Orbitron tracking-[0.4em] text-base transition-all duration-700 flex items-center justify-center gap-8 ${copied ? 'bg-green-500 text-black shadow-[0_0_60px_rgba(34,197,94,0.5)]' : 'bg-white/5 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 hover:border-cyan-500'}`}
      >
        {copied ? 'КОД ЗАГРУЖЕН В СИСТЕМУ' : 'ИНЪЕКЦИЯ В БУФЕР ОБМЕНА'}
      </button>
    </article>
  );
};

const FeedbackSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="reveal py-48 container mx-auto px-6">
      <div className="relative bg-gradient-to-br from-[#0d1117] to-[#05070a] border border-cyan-500/30 rounded-[5rem] p-14 md:p-28 overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.9)]">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-20 h-[3px] bg-cyan-500 shadow-[0_0_20px_#00f0ff]"></span>
              <span className="text-cyan-400 text-base font-black uppercase tracking-[0.7em]">Neural Uplink</span>
            </div>
            <h2 className="text-6xl md:text-[7rem] font-black Orbitron mb-12 leading-[0.9] tracking-tighter uppercase">
              ВЗЛОМАЙТЕ <span className="gradient-text">ПРИБЫЛЬ</span> СЕГОДНЯ
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light leading-relaxed mb-16 max-w-2xl">
              Наши AI-системы — это не просто текст. Это алгоритмы победы на переполненном рынке.
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-8 text-cyan-400/80 uppercase text-[14px] font-black tracking-[0.4em] group">
                <div className="w-12 h-12 rounded-[1.2rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-125 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                ПЕРСОНАЛЬНЫЕ НЕЙРО-СТРАТЕГИИ
              </div>
              <div className="flex items-center gap-8 text-cyan-400/80 uppercase text-[14px] font-black tracking-[0.4em] group">
                <div className="w-12 h-12 rounded-[1.2rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-125 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                АВТОМАТИЗАЦИЯ ВЫСОКИХ ЧЕКОВ
              </div>
              <div className="flex items-center gap-8 text-cyan-400/80 uppercase text-[14px] font-black tracking-[0.4em] group">
                <div className="w-12 h-12 rounded-[1.2rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-125 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                ИНТЕГРАЦИЯ GEMINI 3.0 PRO
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-[60px] border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl relative">
            {status === 'success' ? (
              <div className="text-center py-32 animate-fade-in">
                <div className="w-28 h-28 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-12 border border-green-500/50 shadow-[0_0_80px_rgba(34,197,94,0.4)]">
                  <svg className="w-14 h-14 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-4xl font-black Orbitron mb-8 text-white uppercase tracking-widest">КАНАЛ СВЯЗИ УСТАНОВЛЕН</h3>
                <p className="text-gray-400 text-xl">Ваша заявка передана в отдел разработки. Ожидайте контакт в течение 8 часов.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-16 text-cyan-400 text-sm font-black uppercase tracking-widest border-b border-cyan-500/50 hover:border-cyan-500 transition-all pb-2"
                >
                  ОТПРАВИТЬ НОВЫЙ ЗАПРОС
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.5em] ml-3 opacity-50">OPERATOR DESIGNATION (Name)</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full bg-black/60 border border-white/10 rounded-[2.5rem] px-10 py-6 text-lg focus:outline-none focus:border-cyan-500 transition-all text-white placeholder-gray-800 focus:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.5em] ml-3 opacity-50">ENCRYPTED UPLINK (Email/Telegram)</label>
                  <input 
                    required
                    type="text" 
                    placeholder="@handle_or_email" 
                    className="w-full bg-black/60 border border-white/10 rounded-[2.5rem] px-10 py-6 text-lg focus:outline-none focus:border-cyan-500 transition-all text-white placeholder-gray-800 focus:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.5em] ml-3 opacity-50">OPERATION BRIEF (Message)</label>
                  <textarea 
                    rows={4}
                    placeholder="Опишите ваши глобальные бизнес-цели..." 
                    className="w-full bg-black/60 border border-white/10 rounded-[2.5rem] px-10 py-6 text-lg focus:outline-none focus:border-cyan-500 transition-all text-white placeholder-gray-800 focus:shadow-[0_0_30px_rgba(0,240,255,0.1)] resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-8 rounded-[2.5rem] font-black Orbitron tracking-[0.5em] text-lg transition-all duration-700 shadow-[0_0_60px_rgba(0,240,255,0.5)] flex items-center justify-center gap-8 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <div className="w-8 h-8 border-4 border-black/30 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    'ИНИЦИИРОВАТЬ КОНТАКТ'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLElement>(null);

  const categoriesToDisplay = useMemo(() => {
    if (activeTab === 'all') return PROMPT_CATEGORIES;
    return PROMPT_CATEGORIES.filter(c => c.id === activeTab);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.05 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [categoriesToDisplay, searchQuery]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-cyan-500/50">
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      
      <TrustSection />

      <section ref={catalogRef} className="pb-32 min-h-screen">
        <FilterBar 
          categories={PROMPT_CATEGORIES} 
          activeId={activeTab} 
          onSelect={setActiveTab}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="container mx-auto px-6 mt-40">
          {categoriesToDisplay.map((cat) => {
            const filtered = searchQuery 
              ? cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
              : cat.prompts;
            
            if (filtered.length === 0 && searchQuery) return null;

            return (
              <div key={cat.id} className="mb-60">
                <StrategyBlock category={cat} />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                  {filtered.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              </div>
            );
          })}

          {searchQuery && categoriesToDisplay.every(cat => 
            cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())).length === 0
          ) && (
             <div className="text-center py-80 animate-pulse">
                <div className="text-[12rem] mb-16 opacity-5 font-black Orbitron">EMPTY</div>
                <h3 className="text-5xl font-black Orbitron text-gray-800 uppercase tracking-widest leading-none">АЛГОРИТМ НЕ НАЙДЕН</h3>
                <p className="text-gray-600 mt-10 font-light text-2xl max-w-2xl mx-auto">Система не смогла обнаружить запрашиваемые протоколы. Попробуйте изменить параметры поиска или сменить сектор.</p>
             </div>
          )}
        </div>
      </section>

      <FeedbackSection />

      <footer className="py-56 border-t border-white/5 text-center relative overflow-hidden bg-black/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_rgba(0,240,255,0.5)]"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-7xl md:text-[12rem] font-black Orbitron mb-20 gradient-text tracking-tighter uppercase leading-none select-none">Global Domination</h2>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 mb-32">
            <div className="flex flex-col gap-4">
                <span className="text-cyan-400 font-black text-2xl Orbitron">PROMPT ENGINE v4.1</span>
                <span className="text-gray-600 uppercase text-[12px] font-black tracking-[0.5em]">Quantum Architecture</span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-cyan-400 font-black text-2xl Orbitron">DATACENTER CLOUD</span>
                <span className="text-gray-600 uppercase text-[12px] font-black tracking-[0.5em]">Zero Latency Edge</span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-cyan-400 font-black text-2xl Orbitron">UPTIME RECORD</span>
                <span className="text-gray-600 uppercase text-[12px] font-black tracking-[0.5em]">99.9999% Ready</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto border border-white/5 rounded-[2rem] p-10 bg-white/5 mb-32">
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              CyberPrompt — это закрытое сообщество и база данных для тех, кто понимает: в эпоху AI побеждает не тот, у кого больше ресурсов, а тот, кто умеет ставить самые точные задачи. Наши алгоритмы были отточены в битвах за трафик, лиды и лояльность в самых конкурентных нишах мира.
            </p>
          </div>
          <p className="text-gray-800 text-[12px] font-black uppercase tracking-[1.5em] opacity-30">
            © 2026 // CYBERPROMPT COLLECTOR // ELITE INTELLIGENCE UNIT
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
