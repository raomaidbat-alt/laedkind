import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from './constants';
import { Prompt, Category } from './types';

const Navbar: React.FC<{ searchQuery: string, onSearch: (q: string) => void }> = ({ searchQuery, onSearch }) => {
  return (
    <nav className="nav-glass sticky top-0 z-[60] px-6 py-4">
      <div className="container mx-auto flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-jakarta font-bold text-black text-xl shadow-lg shadow-emerald-500/20">C</div>
          <span className="font-jakarta font-bold text-lg tracking-tight hidden sm:block">CyberPrompt <span className="text-emerald-500">Pro</span></span>
        </div>

        <div className="flex-1 max-w-xl relative">
          <input 
            type="text"
            placeholder="Поиск по названию или коду..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 text-white placeholder-slate-600 transition-all"
          />
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <a href="#feedback" className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-emerald-400 transition-colors tracking-widest uppercase">
          Свой запрос
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </nav>
  );
};

const CategoryNav: React.FC<{ categories: Category[], activeId: string, onSelect: (id: string) => void }> = ({ categories, activeId, onSelect }) => {
  return (
    <div className="nav-glass sticky top-[73px] z-50 px-6 overflow-hidden">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        <button 
          onClick={() => onSelect('all')}
          className={`px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeId === 'all' ? 'tab-active' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Все секторы
        </button>
        {categories.map(cat => (
          <button 
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeId === cat.id ? 'tab-active' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {cat.name.split(' ').slice(1).join(' ')}
          </button>
        ))}
      </div>
    </div>
  );
};

const Breadcrumbs: React.FC<{ activeCategoryName: string }> = ({ activeCategoryName }) => {
  return (
    <div className="container mx-auto px-6 py-6 flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
      <span className="hover:text-emerald-500 cursor-pointer transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Главная</span>
      <svg className="w-2.5 h-2.5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
      <span className="text-slate-400">{activeCategoryName}</span>
    </div>
  );
};

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = TOTAL_PROMPTS;
    const duration = 1000;
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
    <section className="pt-20 pb-12 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[9px] font-bold tracking-[0.2em] uppercase mb-10">
          Professional AI Database // 2025
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-jakarta font-extrabold mb-8 gradient-text leading-[1.1] tracking-tight">
          Ваш штаб <br/><span className="text-emerald-500">ИИ-стратегий</span>
        </h1>
        
        <p className="text-slate-500 max-w-2xl mx-auto mb-14 font-normal text-lg sm:text-xl leading-relaxed">
          Элитная библиотека из {count} экспертных протоколов. <br/>
          Разработано для кратного роста бизнеса и автоматизации маркетинга.
        </p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={onExplore}
            className="btn-premium text-white px-10 py-5 rounded-2xl font-bold text-sm"
          >
            ИЗУЧИТЬ БАЗУ
          </button>
        </div>
      </div>
    </section>
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
    <article className="reveal card-glass rounded-3xl flex flex-col p-8 sm:p-10">
      <div className="flex items-center justify-between mb-8">
          <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-500 text-[8px] font-bold uppercase tracking-widest">{prompt.type}</div>
          <div className="text-[9px] font-mono text-slate-700 tracking-wider">ID: {prompt.id.toUpperCase()}</div>
      </div>
      
      <h3 className="text-xl font-jakarta font-bold text-white mb-4 leading-tight">
          {prompt.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-10 h-10 overflow-hidden line-clamp-2">
          {prompt.description}
      </p>
      
      <div className="bg-black/60 rounded-2xl p-6 font-mono text-[11px] overflow-x-auto max-h-48 border border-white/5 custom-scrollbar mb-10">
        <code className="text-slate-400 whitespace-pre-wrap block leading-relaxed">{prompt.content}</code>
      </div>

      <button 
        type="button"
        onClick={handleCopy}
        className={`mt-auto w-full py-4 rounded-xl font-bold text-[10px] tracking-widest transition-all flex items-center justify-center gap-3 ${copied ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-slate-400 hover:bg-emerald-500 hover:text-white border border-white/10'}`}
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            ГОТОВО
          </>
        ) : 'СКОПИРОВАТЬ ПРОТОКОЛ'}
      </button>
    </article>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLElement>(null);
  
  const filteredCategories = useMemo(() => {
    let base = activeTab === 'all' ? PROMPT_CATEGORIES : PROMPT_CATEGORIES.filter(c => c.id === activeTab);
    
    if (searchQuery) {
      return base.map(cat => ({
        ...cat,
        prompts: cat.prompts.filter(p => 
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.prompts.length > 0);
    }
    return base;
  }, [activeTab, searchQuery]);

  const activeCategoryName = useMemo(() => {
    if (activeTab === 'all') return 'Все секторы';
    return PROMPT_CATEGORIES.find(c => c.id === activeTab)?.name.split(' ').slice(1).join(' ') || 'Категория';
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredCategories]);

  return (
    <div className="min-h-screen bg-[#060709] text-slate-200 pb-20 overflow-x-hidden selection:bg-emerald-500/20">
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <CategoryNav categories={PROMPT_CATEGORIES} activeId={activeTab} onSelect={setActiveTab} />
      
      <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      <Breadcrumbs activeCategoryName={activeCategoryName} />

      <main ref={catalogRef} className="container mx-auto px-6 mt-4 scroll-mt-24">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="mb-32">
            <div className="flex flex-col mb-12">
                <h2 className="text-3xl sm:text-5xl font-jakarta font-extrabold text-white mb-3 tracking-tight">{cat.name}</h2>
                <div className="h-1 w-12 bg-emerald-500 mb-6 rounded-full"></div>
                <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                  Специализированная серия протоколов для оптимизации процессов в секторе "{cat.name.split(' ').slice(1).join(' ')}".
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cat.prompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
           <div className="text-center py-40 bg-white/[0.01] border-2 border-dashed border-white/5 rounded-[3rem]">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <p className="text-slate-500 font-jakarta font-bold text-lg uppercase tracking-widest">Протоколы не найдены</p>
              <button onClick={() => setSearchQuery('')} className="mt-6 text-emerald-500 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors">Сбросить поиск</button>
           </div>
        )}
      </main>

      <section id="feedback" className="reveal container mx-auto px-6 py-32 max-w-5xl">
        <div className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 sm:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
          <h2 className="text-4xl font-jakarta font-bold mb-6 tracking-tight">Нужен кастомный протокол?</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-lg mx-auto leading-relaxed">Разработаем индивидуальную логику под ваши бизнес-задачи любой сложности.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Запрос отправлен!'); }}>
            <input required placeholder="Ваш Telegram @handle" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder-slate-700 text-sm" />
            <button type="submit" className="btn-premium text-white px-8 py-4 rounded-2xl font-bold text-sm whitespace-nowrap">ОТПРАВИТЬ</button>
          </form>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="max-w-xl mx-auto">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-8 font-jakarta font-bold text-slate-400">C</div>
          <h2 className="text-sm font-jakarta font-bold text-white mb-10 tracking-[0.4em] uppercase">CyberPrompt Pro</h2>
          <div className="flex justify-center flex-wrap gap-10 text-[9px] font-bold text-slate-700 uppercase tracking-[0.2em]">
              <span className="hover:text-emerald-500 transition-colors cursor-pointer">Efficiency</span>
              <span className="hover:text-emerald-500 transition-colors cursor-pointer">Precision</span>
              <span className="hover:text-emerald-500 transition-colors cursor-pointer">Scalability</span>
          </div>
          <div className="mt-20 text-[9px] text-slate-800 font-bold uppercase tracking-[0.6em]">
            &copy; 2025 // Global Intelligence Base
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;