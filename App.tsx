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
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="z-10 animate-fade-in max-w-4xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 rounded-full text-cyan-400 text-[9px] font-black mb-6 tracking-[0.3em] uppercase bg-cyan-950/40 backdrop-blur-sm">
          🔥 ULTRA SYSTEM v5.2
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black mb-6 Orbitron glitch gradient-text leading-[1] tracking-tighter" data-text="CYBER PROMPTS">
          CYBER PROMPTS
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-light text-lg sm:text-2xl leading-relaxed">
          База <span className="text-cyan-400 font-bold">инженерных алгоритмов</span> для взлома рынка. Анализ, воронки, продажи — всё, что нужно бизнесу.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-md w-full sm:w-auto">
            <span className="text-4xl font-black text-cyan-400">{count}</span>
            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest text-left leading-tight">
              Готовых<br/>промптов
            </span>
          </div>
          <button 
            type="button"
            onClick={onExplore}
            className="group relative bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black Orbitron text-xs transition-all duration-500 hover:scale-105 shadow-[0_0_50px_rgba(0,240,255,0.4)] w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-widest">Открыть терминал</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-30"></div>
          </button>
        </div>

        <div className="hidden md:flex justify-center gap-12 text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">
            <span>🎯 ПОЗИЦИОНИРОВАНИЕ</span>
            <span>⚡️ ВОРОНКИ</span>
            <span>🔥 КОНТЕНТ</span>
        </div>
      </div>
    </section>
  );
};

const FilterBar: React.FC<{ categories: Category[], activeId: string, onSelect: (id: string) => void, searchQuery: string, onSearch: (q: string) => void }> = ({ categories, activeId, onSelect, searchQuery, onSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#05070a]/90 backdrop-blur-3xl border-b border-white/5 py-4 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar px-1 -mx-4 relative mask-fade-edges">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onSelect('all'); }}
            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] transition-all whitespace-nowrap border ${activeId === 'all' ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-400 border-white/10'}`}
          >
            ВСЕ
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              type="button"
              onClick={(e) => { e.preventDefault(); onSelect(cat.id); }}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] transition-all whitespace-nowrap border ${activeId === cat.id ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-400 border-white/10'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="relative">
          <input 
            type="text"
            placeholder="Поиск решения..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-12 py-3 text-sm focus:outline-none focus:border-cyan-500 text-white placeholder-gray-700"
          />
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
    } catch (err) { console.error('Copy failed', err); }
  };

  return (
    <article className="reveal bg-[#0d1117]/50 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-cyan-500/40 h-full flex flex-col">
      <div className="p-6 sm:p-10 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-[9px] font-black uppercase tracking-widest">{prompt.type}</div>
            <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white Orbitron mb-4 group-hover:text-cyan-400 transition-colors leading-tight">{prompt.title}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-8 font-light italic">{prompt.description}</p>
        
        <div className="bg-black/95 rounded-2xl p-5 sm:p-8 font-mono text-[13px] overflow-x-auto max-h-[300px] border border-white/10 custom-scrollbar mb-8">
          <code className="text-cyan-100/80 whitespace-pre-wrap block leading-loose">{prompt.content}</code>
        </div>

        {prompt.exampleImages && prompt.exampleImages.length > 0 && (
          <div className="mb-8">
            <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Пример результата:</h4>
            <div className="grid grid-cols-2 gap-4">
              {prompt.exampleImages.map((img, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={img} alt="Result" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-700" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          type="button"
          onClick={handleCopy}
          className={`mt-auto w-full py-5 rounded-2xl font-black Orbitron tracking-[0.3em] text-[11px] transition-all duration-500 flex items-center justify-center gap-4 ${copied ? 'bg-green-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.4)]' : 'bg-white/5 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/30'}`}
        >
          {copied ? '✅ СКОПИРОВАНО' : '🔥 ЗАБРАТЬ ПРОМПТ'}
        </button>
      </div>
    </article>
  );
};

const FeedbackCompact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section id="feedback" className="reveal py-24 container mx-auto px-6 max-w-2xl">
      <div className="bg-black/40 backdrop-blur-3xl border border-cyan-500/20 rounded-[3rem] p-8 sm:p-12 shadow-2xl text-center">
        <h2 className="text-3xl font-black Orbitron mb-4">НУЖЕН <span className="text-cyan-400">СВОЙ</span> АЛГОРИТМ?</h2>
        <p className="text-gray-500 text-sm mb-10 font-light">Разработаем индивидуальную AI-стратегию под ваш бизнес.</p>
        {status === 'success' ? (
          <div className="py-10 animate-fade-in text-green-500 font-black Orbitron">СИГНАЛ ПРИНЯТ</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input required placeholder="Имя" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-cyan-500" />
            <input required placeholder="TG @handle" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-cyan-500" />
            <button type="submit" className="w-full bg-cyan-500 text-black py-5 rounded-2xl font-black Orbitron tracking-[0.3em] text-xs transition-all hover:scale-105">ОТПРАВИТЬ ЗАПРОС</button>
          </form>
        )}
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLElement>(null);
  const categoriesToDisplay = useMemo(() => activeTab === 'all' ? PROMPT_CATEGORIES : PROMPT_CATEGORIES.filter(c => c.id === activeTab), [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categoriesToDisplay, searchQuery]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-cyan-500/50 pb-20 overflow-x-hidden">
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      <section ref={catalogRef} className="min-h-screen scroll-mt-24 pt-10">
        <FilterBar categories={PROMPT_CATEGORIES} activeId={activeTab} onSelect={setActiveTab} searchQuery={searchQuery} onSearch={setSearchQuery} />
        <div className="container mx-auto px-6 mt-16">
          {categoriesToDisplay.map((cat) => {
            const filtered = searchQuery ? cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())) : cat.prompts;
            if (filtered.length === 0 && searchQuery) return null;
            return (
              <div key={cat.id} className="mb-32">
                <h2 className="text-4xl sm:text-6xl font-black Orbitron uppercase leading-none tracking-tighter mb-12">{cat.name}</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                  {filtered.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <FeedbackCompact />
      <footer className="pt-40 pb-20 border-t border-white/5 text-center px-6">
        <h2 className="text-4xl font-black Orbitron mb-12 gradient-text uppercase tracking-[0.2em]">CyberPrompt Global</h2>
        <p className="text-gray-800 text-[9px] font-black uppercase tracking-[1em] opacity-40">© 2026 // ELITE AI UNIT</p>
      </footer>
    </div>
  );
};

export default App;