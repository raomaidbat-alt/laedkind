
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from './constants';
import { Prompt, Category } from './types';

// --- UI Components ---

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = TOTAL_PROMPTS;
    const totalMiliseconds = 1500;
    const incrementTime = totalMiliseconds / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="z-10 animate-fade-in">
        <div className="inline-block px-4 py-1 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold mb-6 tracking-[0.3em] uppercase bg-cyan-950/20 backdrop-blur-sm">
          Ultimate AI Toolkit 2026
        </div>
        <h1 
          className="text-5xl md:text-8xl font-black mb-6 Orbitron glitch gradient-text leading-tight tracking-tighter" 
          data-text="CYBER PROMPTS"
        >
          CYBER PROMPTS
        </h1>
        <div className="w-64 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8 shadow-[0_0_20px_#00f0ff]"></div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-light text-lg md:text-xl leading-relaxed">
          Профессиональные инструменты <span className="text-cyan-400 font-medium">бизнес-доминирования</span> для Google AI Studio. 
          Копируй. Вставляй. Захватывай рынок.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-gray-900/50 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-md">
            <span className="text-4xl font-black text-cyan-400">{count}</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest text-left leading-tight">
              Интеллектуальных<br/>решений
            </span>
          </div>
          <button 
            onClick={onExplore}
            className="group relative bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black Orbitron transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10">ОТКРЫТЬ ТЕРМИНАЛ</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20"></div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-pulse text-cyan-400/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <div className="sticky top-0 z-30 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
          <button 
            onClick={() => onSelect('all')}
            className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${activeId === 'all' ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'}`}
          >
            Все
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${activeId === cat.id ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input 
            type="text"
            placeholder="Поиск промпта..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-all text-white"
          />
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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

  return (
    <article className="reveal bg-[#1a1a2e]/40 backdrop-blur-md rounded-3xl p-6 md:p-8 neon-border transition-all duration-500 hover:-translate-y-2 border border-white/5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white Orbitron mb-2 tracking-tight">
            <span className="text-cyan-400">#</span> {prompt.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{prompt.description}</p>
        </div>
        <div className="bg-cyan-500/10 p-2 rounded-lg">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
      </div>

      <div className="relative group mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
        <pre className="custom-scrollbar bg-black/60 rounded-2xl p-6 font-mono text-sm overflow-x-auto max-h-[350px] border border-white/5 relative z-10">
          <code className="text-cyan-100/80 leading-relaxed">{prompt.content}</code>
        </pre>
      </div>

      <button 
        onClick={handleCopy}
        className={`w-full py-4 rounded-xl font-black Orbitron tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${copied ? 'bg-green-500 text-black' : 'bg-white/5 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 hover:border-cyan-500'}`}
      >
        {copied ? (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            УСПЕШНО СКОПИРОВАНО
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
            КОПИРОВАТЬ ТЕРМИНАЛ
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

  const filteredPrompts = useMemo(() => {
    let result: Prompt[] = [];
    if (activeTab === 'all') {
      result = PROMPT_CATEGORIES.flatMap(cat => cat.prompts);
    } else {
      const cat = PROMPT_CATEGORIES.find(c => c.id === activeTab);
      if (cat) result = cat.prompts;
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeTab, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredPrompts]);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-cyan-500/30">
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      
      <section ref={catalogRef} className="pb-32 min-h-screen">
        <FilterBar 
          categories={PROMPT_CATEGORIES} 
          activeId={activeTab} 
          onSelect={setActiveTab}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="container mx-auto px-4 mt-12">
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {filteredPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold Orbitron text-gray-500">Ничего не найдено</h3>
              <p className="text-gray-600 mt-2">Попробуйте изменить запрос или фильтр</p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black Orbitron mb-8 gradient-text">READY FOR DOMINATION?</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors uppercase text-xs font-bold tracking-widest">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors uppercase text-xs font-bold tracking-widest">Discord</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors uppercase text-xs font-bold tracking-widest">GitHub</a>
          </div>
          <p className="text-gray-600 text-xs font-medium uppercase tracking-[0.4em]">
            © 2026 CYBERPROMPT COLLECTOR // NO RIGHTS RESERVED // OPEN SOURCE REVOLUTION
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
