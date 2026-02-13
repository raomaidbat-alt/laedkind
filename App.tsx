
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
        <div className="inline-block px-4 py-1 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold mb-6 tracking-[0.3em] uppercase bg-cyan-950/20 backdrop-blur-sm">
          Elite Business Intelligence
        </div>
        <h1 
          className="text-5xl md:text-9xl font-black mb-6 Orbitron glitch gradient-text leading-tight tracking-tighter" 
          data-text="CYBER PROMPTS"
        >
          CYBER PROMPTS
        </h1>
        <div className="w-64 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8 shadow-[0_0_20px_#00f0ff]"></div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-light text-lg md:text-xl leading-relaxed">
          Элитные промпты для <span className="text-cyan-400 font-medium">бизнес-архитекторов</span>. 
          Адаптировано под Gemini 2.5 & Google AI Studio.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
            <span className="text-4xl font-black text-cyan-400">{count}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-left leading-tight">
              Инструментов<br/>взрывного роста
            </span>
          </div>
          <button 
            onClick={onExplore}
            className="group relative bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black Orbitron transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,240,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10 uppercase">Запустить терминал</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-30"></div>
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

const FilterBar: React.FC<{ 
  categories: Category[], 
  activeId: string, 
  onSelect: (id: string) => void,
  searchQuery: string,
  onSearch: (q: string) => void
}> = ({ categories, activeId, onSelect, searchQuery, onSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-bg-dark/60 backdrop-blur-2xl border-b border-white/5 py-6 px-4">
      <div className="container mx-auto flex flex-col xl:flex-row gap-6 items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 xl:pb-0 no-scrollbar w-full xl:w-auto">
          <button 
            onClick={() => onSelect('all')}
            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeId === 'all' ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.3)]' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'}`}
          >
            Все ниши
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeId === cat.id ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.3)]' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="relative w-full xl:w-80">
          <input 
            type="text"
            placeholder="Поиск по базе..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all text-white placeholder-gray-600"
          />
          <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
    </div>
  );
};

const StrategyBlock: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="reveal mb-12 bg-gradient-to-br from-cyan-950/20 to-purple-950/20 backdrop-blur-xl border border-cyan-500/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(0,240,255,0.03)]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,240,255,0.3)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <div>
          <h4 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-70">Main Strategy Layer</h4>
          <h2 className="text-3xl md:text-4xl font-black Orbitron text-white tracking-tight">Ниша: {category.name}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.strategy.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 text-gray-400 group p-4 rounded-2xl hover:bg-white/5 transition-all">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_15px_#00f0ff] group-hover:scale-125 transition-transform shrink-0"></div>
            <p className="text-sm md:text-base leading-relaxed group-hover:text-cyan-50 text-gray-300 font-medium">{item}</p>
          </div>
        ))}
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

  return (
    <article className="reveal group bg-[#0d1117]/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/5 transition-all duration-700 hover:-translate-y-3 hover:border-cyan-500/30">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
            <span className="text-cyan-500/60 text-[9px] font-black uppercase tracking-[0.4em]">Active Module</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white Orbitron mb-4 tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
            {prompt.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl font-light">{prompt.description}</p>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10 group-hover:scale-110 transition-transform hidden md:block">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
      </div>

      <div className="relative mb-8 group/code">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur opacity-0 group-hover/code:opacity-100 transition duration-1000"></div>
        <div className="bg-black/80 rounded-[1.8rem] p-6 md:p-8 font-mono text-[13px] overflow-x-auto max-h-[400px] border border-white/5 relative z-10 custom-scrollbar shadow-2xl">
          <code className="text-cyan-100/60 whitespace-pre-wrap block leading-relaxed selection:bg-cyan-500/30">{prompt.content}</code>
        </div>
      </div>

      <button 
        onClick={handleCopy}
        className={`w-full py-5 rounded-2xl font-black Orbitron tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 ${copied ? 'bg-green-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.3)]' : 'bg-white/5 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/20 hover:border-cyan-500'}`}
      >
        {copied ? (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            КОПИЯ В БУФЕРЕ
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
            СКОПИРОВАТЬ ПРОМПТ
          </>
        )}
      </button>
    </article>
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
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-cyan-500/30">
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      
      <section ref={catalogRef} className="pb-40 min-h-screen">
        <FilterBar 
          categories={PROMPT_CATEGORIES} 
          activeId={activeTab} 
          onSelect={setActiveTab}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="container mx-auto px-6 mt-20">
          {categoriesToDisplay.map((cat) => {
            const filtered = searchQuery 
              ? cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
              : cat.prompts;
            
            if (filtered.length === 0 && searchQuery) return null;

            return (
              <div key={cat.id} className="mb-32">
                <StrategyBlock category={cat} />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
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
             <div className="text-center py-40 animate-pulse">
                <div className="text-8xl mb-10 opacity-10">🔍</div>
                <h3 className="text-3xl font-black Orbitron text-gray-800 uppercase tracking-widest">Система не нашла данных</h3>
                <p className="text-gray-600 mt-4 font-light">Попробуйте другой запрос или сбросьте фильтры ниш</p>
             </div>
          )}
        </div>
      </section>

      <footer className="py-32 border-t border-white/5 text-center relative overflow-hidden bg-black/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black Orbitron mb-12 gradient-text tracking-tighter">DOMINATE THE MARKET</h2>
          <div className="flex flex-wrap justify-center gap-10 mb-20">
            <span className="text-gray-600 uppercase text-[10px] font-black tracking-[0.4em]">Mainframe 2.5</span>
            <span className="text-gray-600 uppercase text-[10px] font-black tracking-[0.4em]">Protocols: Secure</span>
            <span className="text-gray-600 uppercase text-[10px] font-black tracking-[0.4em]">Uptime: 99.9%</span>
          </div>
          <p className="text-gray-700 text-[9px] font-black uppercase tracking-[0.8em] opacity-40">
            © 2026 // CYBERPROMPT COLLECTOR // DESIGNED FOR WINNERS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
