
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from './constants';
import { Prompt, Category } from './types';

// --- UI Components ---

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [count, setCount] = useState(0);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = TOTAL_PROMPTS;
    const duration = 2000;
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
    
    const scanTimer = setInterval(() => setScanning(prev => !prev), 3000);
    
    return () => {
      clearInterval(timer);
      clearInterval(scanTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* HUD Scanner Line */}
      <div className={`absolute left-0 w-full h-[2px] bg-cyan-500/30 z-20 pointer-events-none transition-all duration-[3000ms] ease-in-out ${scanning ? 'top-0' : 'top-full'}`}>
        <div className="absolute right-0 top-0 h-full w-32 bg-cyan-500 shadow-[0_0_20px_#00f0ff]"></div>
      </div>

      {/* Cyber Background HUD */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-purple-500/10 rounded-full animate-[spin_35s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
      </div>

      <div className="z-10 animate-fade-in max-w-6xl w-full">
        <div className="inline-flex items-center gap-4 px-5 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-[11px] font-black mb-10 tracking-[0.5em] uppercase bg-cyan-950/40 backdrop-blur-2xl mx-auto shadow-[0_0_40px_rgba(0,240,255,0.15)]">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          SYSTEM LINK ENCRYPTED // CORE v7.0
        </div>
        
        <h1 className="text-7xl sm:text-9xl md:text-[14rem] font-black mb-10 Orbitron glitch gradient-text leading-[0.8] tracking-tighter" data-text="CYBER PROMPTS">
          CYBER<br/>PROMPTS
        </h1>
        
        <p className="text-gray-400 max-w-4xl mx-auto mb-16 font-light text-xl sm:text-4xl leading-tight tracking-tight">
          Доминируй на рынке через <span className="text-cyan-400 font-bold italic">алгоритмическое превосходство</span>. 
          25+ боевых протоколов для бизнеса, IT и аналитики.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
          <div className="group flex items-center gap-6 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md w-full md:w-auto hover:border-cyan-500/40 transition-all duration-500 shadow-2xl">
            <div className="text-6xl font-black text-cyan-400 Orbitron drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">{count}</div>
            <div className="text-left">
              <div className="text-[12px] text-white font-black uppercase tracking-widest">ACTIVE CORES</div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Ready for deployment</div>
            </div>
          </div>
          <button 
            type="button"
            onClick={onExplore}
            className="group relative bg-cyan-500 text-black px-20 py-8 rounded-[2rem] font-black Orbitron text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(0,240,255,0.6)] active:scale-95 w-full md:w-auto overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-[0.5em] flex items-center justify-center gap-3">
              Инициализировать
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-30"></div>
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-4 max-w-4xl mx-auto text-[10px] font-black text-gray-700 uppercase tracking-[0.6em] border-t border-white/5 pt-12">
            <div className="hover:text-cyan-400 transition-colors"># POSITIONING</div>
            <div className="hover:text-cyan-400 transition-colors"># CONVERSION</div>
            <div className="hover:text-cyan-400 transition-colors"># AUTOMATION</div>
            <div className="hover:text-cyan-400 transition-colors"># AUDIT</div>
        </div>
      </div>
    </section>
  );
};

const FilterBar: React.FC<{ categories: Category[], activeId: string, onSelect: (id: string) => void, searchQuery: string, onSearch: (q: string) => void }> = ({ categories, activeId, onSelect, searchQuery, onSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#05070a]/95 backdrop-blur-3xl border-b border-white/5 py-6 px-6 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-center">
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar px-1 -mx-4 relative flex-1 w-full">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onSelect('all'); }}
            className={`px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeId === 'all' ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_25px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-500 border-white/10 hover:text-white'}`}
          >
            ALL SECTORS
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              type="button"
              onClick={(e) => { e.preventDefault(); onSelect(cat.id); }}
              className={`px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeId === cat.id ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_25px_rgba(0,240,255,0.4)]' : 'bg-white/5 text-gray-500 border-white/10 hover:text-white'}`}
            >
              {cat.name.split(' ')[1] || cat.name}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-96">
          <input 
            type="text"
            placeholder="Search Protocol..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-black/80 border border-white/10 rounded-2xl px-14 py-4 text-sm focus:outline-none focus:border-cyan-500 text-white placeholder-gray-800 transition-all shadow-inner"
          />
          <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
    <article className="reveal group bg-[#0d1117]/80 backdrop-blur-3xl rounded-[4rem] overflow-hidden border border-white/5 transition-all duration-1000 hover:border-cyan-500/50 hover:bg-[#0d1117]/100 h-full flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
      <div className="p-10 sm:p-14 flex-1 flex flex-col">
        <div className="flex items-center gap-6 mb-10">
            <div className="px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em]">{prompt.type}</div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-black text-white Orbitron mb-6 tracking-tighter group-hover:text-cyan-400 transition-colors leading-none">
            {prompt.title}
        </h3>
        
        <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light italic border-l-4 border-cyan-500/30 pl-8">
            {prompt.description}
        </p>
        
        <div className="relative mb-12 group/code">
          <div className="absolute -inset-2 bg-cyan-500/10 rounded-[2.5rem] blur opacity-0 group-hover/code:opacity-100 transition duration-1000"></div>
          <div className="bg-black/95 rounded-[2.5rem] p-8 sm:p-12 font-mono text-[15px] sm:text-[16px] overflow-x-auto max-h-[600px] border border-white/10 custom-scrollbar relative shadow-2xl">
            <code className="text-cyan-100/90 whitespace-pre-wrap block leading-relaxed selection:bg-cyan-500/30">{prompt.content}</code>
          </div>
        </div>

        {prompt.exampleImages && prompt.exampleImages.length > 0 && (
          <div className="mb-12">
            <h4 className="text-[12px] font-black text-gray-700 uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-800"></span> Visual Protocol Reference
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {prompt.exampleImages.map((img, i) => (
                <div key={i} className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-inner group/img transition-transform duration-700 hover:scale-[1.02]">
                  <img src={img} alt="Protocol result" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover/img:scale-110" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          type="button"
          onClick={handleCopy}
          className={`mt-auto w-full py-8 rounded-3xl font-black Orbitron tracking-[0.5em] text-[13px] transition-all duration-700 flex items-center justify-center gap-6 ${copied ? 'bg-green-500 text-black shadow-[0_0_50px_rgba(34,197,94,0.5)]' : 'bg-white/5 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/30'}`}
        >
          {copied ? '✅ UPLINK COPIED' : '⚡️ DEPLOY PROTOCOL'}
        </button>
      </div>
    </article>
  );
};

const FeedbackCompact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="feedback" className="reveal py-40 container mx-auto px-6 max-w-4xl">
      <div className="bg-black/60 backdrop-blur-3xl border border-cyan-500/30 rounded-[5rem] p-12 sm:p-20 shadow-[0_100px_200px_rgba(0,0,0,0.9)] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        
        <h2 className="text-5xl font-black Orbitron mb-8 leading-none">CUSTOM <span className="text-cyan-400">LOGIC</span> INQUIRY</h2>
        <p className="text-gray-500 text-xl mb-16 font-light max-w-xl mx-auto leading-relaxed">Разработка индивидуальных AI-архитектур под нестандартные бизнес-задачи.</p>
        
        {status === 'success' ? (
          <div className="py-16 animate-fade-in text-cyan-400 font-black Orbitron text-3xl tracking-[0.4em] scale-110 drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">TRANSMISSION COMPLETE</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
            <div className="space-y-4">
                <input required placeholder="IDENTIFIER" className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 text-white text-xl focus:outline-none focus:border-cyan-500 transition-all placeholder-gray-800" />
                <input required placeholder="UPLINK (Telegram @handle)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 text-white text-xl focus:outline-none focus:border-cyan-500 transition-all placeholder-gray-800" />
            </div>
            <button type="submit" className="w-full bg-cyan-500 text-black py-8 rounded-3xl font-black Orbitron tracking-[0.5em] text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(0,240,255,0.4)]">ESTABLISH CONNECTION</button>
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
  
  const categoriesToDisplay = useMemo(() => 
    activeTab === 'all' ? PROMPT_CATEGORIES : PROMPT_CATEGORIES.filter(c => c.id === activeTab), 
  [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categoriesToDisplay, searchQuery]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-cyan-500/50 pb-40 overflow-x-hidden">
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      
      <div className="py-32 border-y border-white/5 bg-black/40">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-20 md:gap-32 opacity-15 grayscale hover:opacity-40 transition-all duration-1000">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-9" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-9" alt="MS" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-9" alt="Amazon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Netflix_2015_logo.svg" className="h-9" alt="Netflix" />
        </div>
      </div>

      <section ref={catalogRef} className="min-h-screen scroll-mt-32 pt-16">
        <FilterBar categories={PROMPT_CATEGORIES} activeId={activeTab} onSelect={setActiveTab} searchQuery={searchQuery} onSearch={setSearchQuery} />
        
        <div className="container mx-auto px-6 mt-32">
          {categoriesToDisplay.map((cat) => {
            const filtered = searchQuery ? cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())) : cat.prompts;
            if (filtered.length === 0 && searchQuery) return null;
            return (
              <div key={cat.id} className="mb-64">
                <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-24 px-6">
                    <h2 className="text-6xl sm:text-9xl font-black Orbitron uppercase leading-none tracking-tighter gradient-text">{cat.name}</h2>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500/40 to-transparent mb-4 hidden lg:block"></div>
                    <p className="text-cyan-500/50 text-[14px] font-black tracking-[0.6em] mb-4 uppercase">Protocol Series 7.x</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24">
                  {filtered.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
                </div>
              </div>
            );
          })}

          {searchQuery && categoriesToDisplay.every(cat => 
            cat.prompts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0
          ) && (
             <div className="text-center py-80 opacity-20">
                <h3 className="text-8xl md:text-[12rem] font-black Orbitron text-gray-800 uppercase tracking-widest leading-none">NO DATA<br/>FOUND</h3>
             </div>
          )}
        </div>
      </section>

      <FeedbackCompact />

      <footer className="pt-80 pb-24 border-t border-white/5 text-center px-6 relative bg-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent shadow-[0_0_50px_#00f0ff]"></div>
        <h2 className="text-6xl font-black Orbitron mb-16 gradient-text uppercase tracking-[0.4em]">CYBERPROMPT</h2>
        <div className="flex justify-center flex-wrap gap-16 mb-24 text-[12px] font-black text-gray-700 uppercase tracking-[0.8em]">
            <span className="hover:text-cyan-400 transition-colors"># DOMINATION</span>
            <span className="hover:text-cyan-400 transition-colors"># INTELLIGENCE</span>
            <span className="hover:text-cyan-400 transition-colors"># 2026_UNIT</span>
        </div>
        <p className="text-gray-900 text-[11px] font-black uppercase tracking-[2em] opacity-40">
          ALL PROTOCOLS VERIFIED // SECURE_UPLINK_STABLE
        </p>
      </footer>
    </div>
  );
};

export default App;
