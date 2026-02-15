import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from './constants';
import { Prompt, Category } from './types';

const SearchIcon = () => (
  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar: React.FC<{ searchQuery: string, onSearch: (q: string) => void }> = ({ searchQuery, onSearch }) => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-4 py-3 md:py-4 px-4 md:px-6">
      <div 
        className="flex items-center gap-2 group cursor-pointer shrink-0" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#00D9A3] rounded-xl flex items-center justify-center font-jakarta font-bold text-[#0A1628] text-xl shadow-lg shadow-emerald-500/20">C</div>
        <span className="font-jakarta font-bold text-lg tracking-tight hidden sm:block">
          CyberPrompt <span className="text-[#00D9A3]">Pro</span>
        </span>
      </div>

      <div className="flex-1 max-w-2xl relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <SearchIcon />
        </div>
        <input 
          type="text"
          placeholder="Поиск по названию, нише или коду..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#00D9A3]/50 text-white placeholder-slate-600 transition-all focus:ring-1 focus:ring-[#00D9A3]/20"
        />
        {searchQuery && (
          <button 
            onClick={() => onSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full text-slate-500 transition-colors"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <div className="h-6 w-px bg-white/10"></div>
        <a href="#feedback" className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-[#00D9A3] transition-colors tracking-widest uppercase">
          Свой запрос
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  );
};

const CategoryTabs: React.FC<{ 
  categories: Category[], 
  activeId: string, 
  onSelect: (id: string) => void,
  isSticky: boolean
}> = ({ categories, activeId, onSelect, isSticky }) => {
  return (
    <div className={`transition-all duration-300 ${isSticky ? 'border-t border-white/5' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 scroll-smooth">
          <button 
            onClick={() => onSelect('all')}
            className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${activeId === 'all' ? 'bg-[#00D9A3]/10 text-[#00D9A3]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
          >
            <span>🏠</span> Все
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${activeId === cat.id ? 'bg-[#00D9A3]/10 text-[#00D9A3]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
            >
              <span>{cat.name.split(' ')[0]}</span>
              {cat.name.split(' ').slice(1).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Breadcrumbs: React.FC<{ activeCategoryName: string, isAll: boolean }> = ({ activeCategoryName, isAll }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] border-b border-white/5">
      <span 
        className="hover:text-[#00D9A3] cursor-pointer transition-colors" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        CyberPrompt
      </span>
      <svg className="w-2 h-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
      {isAll ? (
        <span className="text-slate-400">Библиотека протоколов</span>
      ) : (
        <>
          <span 
            className="hover:text-[#00D9A3] cursor-pointer transition-colors"
            onClick={() => document.getElementById('catalog-start')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Категории
          </span>
          <svg className="w-2 h-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          <span className="text-slate-400">{activeCategoryName}</span>
        </>
      )}
    </div>
  );
};

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-32 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D9A3]/5 blur-[120px] rounded-full -z-10 pointer-events-none opacity-50"></div>
      
      <div className="max-w-4xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D9A3]/5 border border-[#00D9A3]/10 text-[#00D9A3] text-[9px] font-bold tracking-[0.2em] uppercase mb-10 reveal">
          Professional AI Strategy Hub // v2.1
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-jakarta font-extrabold mb-8 gradient-text leading-[1] tracking-tight reveal">
          Ваш штаб <br className="hidden sm:block" /><span className="text-[#00D9A3]">ИИ-стратегий</span>
        </h1>
        
        <p className="text-[#E8EDF2]/70 max-w-2xl mx-auto mb-14 font-normal text-lg sm:text-xl leading-relaxed reveal">
          Превращаем сложные нейросетевые запросы в понятные бизнес-алгоритмы.
          Библиотека из 25+ экспертных протоколов для маркетинга и продаж.
        </p>
        
        <div className="flex justify-center reveal">
          <button 
            onClick={onExplore}
            className="btn-premium animate-pulse-subtle text-[#0A1628] px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-2xl"
          >
            ПОЛУЧИТЬ ДОСТУП
          </button>
        </div>
      </div>
    </section>
  );
};

const SocialProof: React.FC = () => {
  const stats = [
    { label: 'Внедрений', value: '25+' },
    { label: 'Рост конверсий', value: '150%' },
    { label: 'До результата', value: '30 дней' },
  ];

  const cases = [
    {
      icon: '🎯',
      niche: 'IT-стартап (SaaS)',
      result: '"Увеличили конверсию лендинга с 2% до 8% за 14 дней"',
      prompts: ['SaaS Landing Logic', 'Onboarding Flow'],
    },
    {
      icon: '👔',
      niche: 'Эксперт по продажам',
      result: '"Собрали 87 заявок за 7 дней через Reels-воронку"',
      prompts: ['Reels-to-DM Sales', 'TG Warmup'],
    },
    {
      icon: '🛍️',
      niche: 'E-commerce (WB)',
      result: '"Вышли в ТОП-10 по запросам категории за месяц"',
      prompts: ['Marketplace SEO', 'Performance Creative'],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-jakarta font-extrabold text-white mb-4">Доверие экспертов</h2>
        <p className="text-[#00D9A3] font-bold uppercase tracking-[0.3em] text-[10px]">Результаты, доказанные практикой</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 max-w-5xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center p-8 card-glass rounded-3xl border border-white/5">
            <div className="text-4xl font-jakarta font-extrabold text-[#00D9A3] mb-2">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cases.map((item, idx) => (
          <div key={idx} className="reveal p-8 rounded-[2rem] card-glass border-l-4 border-l-[#00D9A3] group hover:bg-white/[0.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-jakarta font-bold text-white text-sm uppercase tracking-tight group-hover:text-[#00D9A3] transition-colors">{item.niche}</span>
            </div>
            <p className="text-[#E8EDF2] italic text-lg leading-relaxed mb-6 font-medium">
              {item.result}
            </p>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-2">Примененные протоколы:</p>
              {item.prompts.map((p, pIdx) => (
                <div key={pIdx} className="text-[#00D9A3]/70 text-[11px] font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9A3]/30 rounded-full"></div>
                  {p}
                </div>
              ))}
            </div>
          </div>
        ))}
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
    <article className="reveal card-glass rounded-[2.5rem] flex flex-col p-8 sm:p-10 border border-white/5 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 -mr-10 -mt-10 w-40 h-40 bg-[#00D9A3]/5 blur-[60px] rounded-full pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="px-3 py-1 bg-[#00D9A3]/5 border border-[#00D9A3]/20 rounded-lg text-[#00D9A3] text-[9px] font-bold uppercase tracking-widest">{prompt.type}</div>
          <div className="text-[10px] font-mono text-slate-700 tracking-widest">ID: {prompt.id.toUpperCase()}</div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-jakarta font-bold text-white mb-4 leading-tight group-hover:text-[#00D9A3] transition-colors relative z-10">
          {prompt.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-[1.7] mb-10 h-12 overflow-hidden line-clamp-2 relative z-10">
          {prompt.description}
      </p>
      
      <div className="bg-[#050B14] rounded-2xl p-6 font-mono text-[11px] overflow-x-auto max-h-48 border border-white/5 custom-scrollbar mb-10 relative z-10 shadow-inner">
        <code className="text-[#E8EDF2]/50 whitespace-pre-wrap block leading-relaxed">{prompt.content}</code>
      </div>

      <button 
        type="button"
        onClick={handleCopy}
        className={`mt-auto w-full py-4.5 rounded-2xl font-bold text-[10px] tracking-widest transition-all flex items-center justify-center gap-3 relative z-10 ${copied ? 'bg-[#00D9A3] text-[#0A1628] shadow-lg shadow-[#00D9A3]/30' : 'bg-white/5 text-slate-400 hover:bg-[#00D9A3] hover:text-[#0A1628] border border-white/10'}`}
      >
        {copied ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            ГОТОВО К ВСТАВКЕ
          </>
        ) : 'СКОПИРОВАТЬ ПРОМПТ'}
      </button>
    </article>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const catalogRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  const filteredCategories = useMemo(() => {
    let base = activeTab === 'all' ? PROMPT_CATEGORIES : PROMPT_CATEGORIES.filter(c => c.id === activeTab);
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return PROMPT_CATEGORIES.map(cat => ({
        ...cat,
        prompts: cat.prompts.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
        )
      })).filter(cat => cat.prompts.length > 0);
    }
    return base;
  }, [activeTab, searchQuery]);

  const activeCategoryName = useMemo(() => {
    if (activeTab === 'all') return 'Библиотека';
    const cat = PROMPT_CATEGORIES.find(c => c.id === activeTab);
    return cat ? cat.name.split(' ').slice(1).join(' ') : 'Категория';
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Scroll Spy logic for "All" view
      if (activeTab === 'all' && !searchQuery) {
        let currentSection = 'all';
        for (const cat of PROMPT_CATEGORIES) {
          const el = sectionRefs.current[cat.id];
          if (el && el.getBoundingClientRect().top < 200) {
            currentSection = cat.id;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredCategories, activeTab, searchQuery]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchQuery('');
    if (id !== 'all') {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen text-[#E8EDF2] pb-20 overflow-x-hidden selection:bg-[#00D9A3]/20">
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isSticky ? 'nav-glass shadow-2xl' : 'bg-transparent'}`}>
        <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <CategoryTabs 
          categories={PROMPT_CATEGORIES} 
          activeId={activeTab} 
          onSelect={handleTabChange} 
          isSticky={isSticky}
        />
      </header>

      <div className="pt-24 md:pt-32">
        <Hero onExplore={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
        
        {!searchQuery && activeTab === 'all' && <SocialProof />}
        
        <main ref={catalogRef} id="catalog-start" className="container mx-auto px-4 md:px-6 mt-8 scroll-mt-32">
          <Breadcrumbs activeCategoryName={activeCategoryName} isAll={activeTab === 'all'} />

          <div className="mt-12">
            {filteredCategories.map((cat) => (
              <section 
                key={cat.id} 
                id={cat.id} 
                ref={el => sectionRefs.current[cat.id] = el}
                className="mb-24 md:mb-32 scroll-mt-48"
              >
                <div className="flex flex-col mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#00D9A3]/5 border border-[#00D9A3]/10 rounded-2xl flex items-center justify-center text-2xl">
                        {cat.name.split(' ')[0]}
                      </div>
                      <h2 className="text-3xl sm:text-5xl font-jakarta font-extrabold text-white tracking-tight">
                        {cat.name.split(' ').slice(1).join(' ')}
                      </h2>
                    </div>
                    <div className="h-1 w-16 bg-[#00D9A3] mb-6 rounded-full shadow-[0_0_15px_rgba(0,217,163,0.4)]"></div>
                    <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
                      Специализированная серия протоколов для оптимизации процессов в секторе "{cat.name.split(' ').slice(1).join(' ')}".
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.prompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
                </div>
              </section>
            ))}

            {filteredCategories.length === 0 && (
               <div className="text-center py-40 bg-white/[0.01] border-2 border-dashed border-white/5 rounded-[3rem] reveal">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <SearchIcon />
                  </div>
                  <p className="text-slate-500 font-jakarta font-bold text-xl uppercase tracking-widest">Протоколы не найдены</p>
                  <p className="text-slate-700 mt-2 mb-10 text-sm uppercase tracking-wider">Попробуйте изменить параметры поиска</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveTab('all'); }} 
                    className="text-[#00D9A3] text-xs font-bold uppercase tracking-[0.2em] border border-[#00D9A3]/20 px-8 py-4 rounded-xl hover:bg-[#00D9A3]/10 transition-all"
                  >
                    Сбросить все фильтры
                  </button>
               </div>
            )}
          </div>
        </main>
      </div>

      <section id="feedback" className="reveal container mx-auto px-6 py-32 max-w-5xl">
        <div className="bg-[#0D1B2E]/60 border border-[#00D9A3]/20 rounded-[4rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,217,163,0.05)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9A3] to-transparent opacity-30"></div>
          <h2 className="text-4xl font-jakarta font-bold mb-6 tracking-tight text-white reveal">Нужен кастомный протокол?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed reveal">Разработаем индивидуальную логику под ваши бизнес-задачи любой сложности.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto reveal" onSubmit={(e) => { e.preventDefault(); alert('Запрос отправлен!'); }}>
            <input 
              required 
              placeholder="Ваш Telegram @handle" 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00D9A3] transition-all placeholder-slate-700 text-sm" 
            />
            <button type="submit" className="btn-premium text-[#0A1628] px-8 py-4 rounded-2xl font-bold text-sm whitespace-nowrap uppercase tracking-widest">ОТПРАВИТЬ</button>
          </form>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center px-6 bg-white/[0.01]">
        <div className="max-w-xl mx-auto">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 font-jakarta font-bold text-[#00D9A3] border border-white/5 shadow-inner">C</div>
          <h2 className="text-xs font-jakarta font-bold text-white mb-10 tracking-[0.5em] uppercase">CyberPrompt Pro 2.1</h2>
          <div className="flex justify-center flex-wrap gap-12 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
              <span className="hover:text-[#00D9A3] transition-colors cursor-pointer">Efficiency</span>
              <span className="hover:text-[#00D9A3] transition-colors cursor-pointer">Precision</span>
              <span className="hover:text-[#00D9A3] transition-colors cursor-pointer">Scalability</span>
          </div>
          <div className="mt-20 text-[9px] text-slate-800 font-bold uppercase tracking-[0.7em]">
            &copy; 2025 // Global Intelligence Base // Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;