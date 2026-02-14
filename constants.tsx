
import { Category } from './types';

export const PROMPT_CATEGORIES: Category[] = [
  {
    id: 'foundation',
    name: '💎 Стратегия & База',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: [
      "Поиск 'Category of One' (Позиционирование).",
      "Протоколы глубоких интервью (CustDev).",
      "Психографический профиль ЦА.",
      "Анализ конкурентных разрывов."
    ],
    prompts: [
      {
        id: 'f-1',
        title: 'TOP Позиционирование: Категория №1',
        description: 'Инженерный протокол создания уникальной рыночной ниши, где у вас нет конкурентов.',
        niche: 'strategy',
        type: 'strategy',
        exampleImages: ['https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=600'],
        content: `# ROLE: Master of Strategic Positioning (Blue Ocean Strategy Expert)
# CONTEXT: [ВСТАВЬ ОПИСАНИЕ ПРОДУКТА]
# TASK: Create a "Category of One" positioning.

## PHASE 1: MARKET DECONSTRUCTION (Chain of Thought)
1. Identify the "Generic Category" the user thinks they are in.
2. List 5 standard assumptions/rules of this category that everyone follows.
3. Find the "Industry Blind Spot" — a customer need that all competitors ignore because it's "too hard" or "not how we do things".

## PHASE 2: THE UNIQUE MECHANISM
- Invent a proprietary name for the process that delivers the result (e.g., "The Rapid Sync Protocol").
- Explain how this mechanism solves the problem differently than the competition.

## PHASE 3: OUTPUT REQUIREMENTS
- Define the NEW category name (Max 3 words).
- Write a 1-sentence "Value Proposition": We are the only [Category] that [Unique Mechanism] for [Audience] to achieve [Result].
- Write a 3-paragraph "Manifesto of Change" explaining why the old way is dead.

# CONSTRAINTS: No marketing fluff. Use surgical precision. If data is missing, ask for it.`
      },
      {
        id: 'f-2',
        title: 'CustDev 2.0: Deep Intelligence',
        description: 'Сценарий вопросов по методу "The Mom Test", исключающий ложные подтверждения и лесть.',
        niche: 'strategy',
        type: 'strategy',
        content: `# ROLE: Senior Product Researcher (Expert in "The Mom Test")
# TASK: Design a Customer Development interview guide.

## CORE PRINCIPLES:
1. Talk about their life, not your idea.
2. Ask about specific past events, never the future.
3. Talk less, listen more.

## INTERVIEW ARCHITECTURE:
1. **The Life Context:** 3 questions to understand the "Why" behind their actions.
2. **The Past Pain:** "Tell me about the last time you [Problem]..." (Find the trigger).
3. **The Current Workaround:** How are they solving it NOW? (If they don't spend money/time, it's not a problem).
4. **The Value Gap:** What is the specific part of their current solution that sucks most?

## DELIVERABLE:
- 15 prioritized questions.
- A "Lies & Red Flags" checklist (How to know if they are just being nice).`
      },
      {
        id: 'f-3',
        title: 'Psychographic Architect: Neural Profile',
        description: 'Глубинный разбор ЦА через призму когнитивных искажений и подсознательных страхов.',
        niche: 'strategy',
        type: 'strategy',
        content: `# ROLE: Behavioral Psychologist & Neuromarketing Specialist
# OBJECTIVE: Map the sub-conscious landscape of [TARGET AUDIENCE].

## ANALYSIS MODULES:
1. **The Shadow Motivator:** What is the ONE thing they are ashamed to admit they want (Status, Power, Revenge, Safety)?
2. **The Decision Friction:** Which cognitive biases stop them from buying (Loss Aversion, Choice Overload, Sunk Cost Fallacy)?
3. **The Identity Hook:** What is the "Hero's Journey" they imagine themselves in?
4. **Vocabulary Audit:** 20 specific terms/slang they use when they are frustrated.

## OUTPUT:
- Detailed Persona Profile (Archetype).
- 5 "Invisible Selling Points" that trigger action without sounding like an ad.`
      }
    ]
  },
  {
    id: 'local_business',
    name: '📍 Местный бизнес',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: ["Яндекс.Карты SEO", "Гео-таргетинг", "Retention Bot"],
    prompts: [
      {
        id: 'loc-1',
        title: 'Maps Dominance: SEO Logic',
        description: 'Алгоритм вывода карточки бизнеса в ТОП выдачи Яндекс.Карт и 2ГИС.',
        niche: 'local',
        type: 'strategy',
        content: `# ROLE: Local SEO Engineer (Geo-Services Specialist)
# BUSINESS: [ОПИСАНИЕ БИЗНЕСА И ГЕО-ЛОКАЦИЯ]

## EXECUTION STEPS:
1. **Semantic Core Construction:** Generate a list of 50 local LSI keywords (e.g., "nearby", "open now", specific neighborhood names).
2. **Profile Optimization Protocol:** Rewrite the "About" section using a 70/30 split of SEO keywords and persuasive copy.
3. **Review Engineering:** Draft 5 "Perfect Review Templates" that include specific keywords and describe high-quality photos to be uploaded by users.
4. **Service Catalog Optimization:** Rename services to match high-volume search queries.

# OUTPUT: Full optimization plan + 10-day activity checklist to trigger the algorithm.`
      },
      {
        id: 'loc-2',
        title: 'Hyper-Local Ad Engine',
        description: 'Настройка рекламы на радиус 500м-3км с максимальным CTR для жителей ЖК.',
        niche: 'local',
        type: 'ads',
        content: `# ROLE: Paid Social Strategist (Hyper-Local Expert)
# GOAL: Capture 80% of foot traffic in a [X]km radius.

## AD STRATEGY:
1. **The Local Anchor:** Identify 3 visual landmarks near the business to use in creative.
2. **The "Neighbor" Offer:** Create a "Welcome to the Neighborhood" offer that is mathematically impossible to ignore.
3. **Copy Variations:**
   - [Social Proof]: "Why 500 people in [District] chose us."
   - [Scarcity]: "Only for residents of [Building Name]."
   - [Direct]: "3 mins walk from [Landmark]. Free [Offer] inside."

# DELIVERABLES: 3 Ad Mockups (Copy + Visual TЗ) + Targeting Parameters.`
      },
      {
        id: 'loc-3',
        title: 'The "Friendly Hero" Content Plan',
        description: '30-дневная стратегия контента, превращающая прохожих в постоянных фанатов.',
        niche: 'local',
        type: 'content',
        content: `# ROLE: Community Manager & Local Content Creator
# TASK: 30-day "Local Authority" Plan.

## PILLARS:
- **Trust (Behind the Scenes):** Real people, real processes.
- **Utility (Local Guide):** Helping neighbors with more than just your product.
- **Engagement (The Polls):** Asking the neighborhood's opinion on store changes.

## FORMAT:
- 12 Reels Scripts (Hook + Value + CTA).
- 30 Story Sequences (The daily rhythm).
- 4 Community Events (In-person triggers).

# OUTPUT: Weekly content calendar with specific hooks for [Business Type].`
      },
      {
        id: 'loc-4',
        title: 'Retention Bot: LTV Maximizer',
        description: 'Проектирование логики бота, который возвращает клиентов и собирает отзывы.',
        niche: 'local',
        type: 'bot',
        content: `# ROLE: CRM & Automation Architect
# GOAL: Increase Repeat Visits by 40%.

## BOT LOGIC:
1. **The Post-Visit Hook:** Automated message 2 hours after visit asking for a rating (Internal 1-10).
2. **Review Diversion:** If 9-10 -> Link to Google/Yandex. If <7 -> Alert manager immediately.
3. **The "Miss You" Protocol:** Triggered if no visit for 30 days. High-value discount.
4. **Loyalty Integration:** Digital punch-card logic.

# OUTPUT: Message flow diagram + full copy for all automated triggers.`
      },
      {
        id: 'loc-5',
        title: 'Partnership Growth Protocol',
        description: 'Скрипт и стратегия захвата аудитории соседних бизнесов через Win-Win офферы.',
        niche: 'local',
        type: 'strategy',
        content: `# ROLE: Business Development Manager (B2B Local)
# TASK: Secure 5 local partnerships in 14 days.

## PARTNER SELECTION:
- Identify 3 non-competing businesses with the SAME target audience.

## THE WIN-WIN PROPOSITION:
- Design a "Cross-Benefit" offer (e.g., Buy coffee at X, get 10% off at your Y).
- Write the cold outreach script (Phone and In-person).

# DELIVERABLES: Partner shortlist + Outreach scripts + Referral tracking system.`
      }
    ]
  },
  {
    id: 'it_startups',
    name: '🚀 IT Стартапы',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: ["PLG (Product Led Growth)", "Growth Loops", "SaaS Funnels"],
    prompts: [
      {
        id: 'it-1',
        title: 'SaaS Landing Page: CRO Logic',
        description: 'Архитектура лендинга, основанная на психологии принятия решений и фреймворке Jobs-to-be-Done.',
        niche: 'it',
        type: 'strategy',
        content: `# ROLE: Senior CRO (Conversion Rate Optimization) Specialist
# PRODUCT: [SaaS DESCRIPTION]

## PAGE ARCHITECTURE (The "No-Brainer" Flow):
1. **The Outcome Hero:** Not what it is, but what they BECOME.
2. **The Logic Proof:** Logo bar + "Trusted by X experts".
3. **The Chaos vs. Order:** Visualize the "Old Way" (Pain) vs "New Way" (Product).
4. **The Feature-to-Benefit Engine:** Translate 5 technical features into specific business ROI.
5. **The Frictionless CTA:** Why start now? (Free trial, no credit card, 2-min setup).

# OUTPUT: Full wireframe copy + Design direction for each block.`
      },
      {
        id: 'it-2',
        title: 'Growth Loop Architect',
        description: 'Проектирование циклов саморазвития продукта: от инвайтов до виральных артефактов.',
        niche: 'it',
        type: 'strategy',
        content: `# ROLE: Growth Engineer (Ex-Uber/Reforge)
# OBJECTIVE: Design a Viral Loop with K-factor > 1.2.

## ANALYTICAL FRAMEWORK:
1. **The Fuel:** What motivates the user to invite others? (Ego, Utility, Monetary).
2. **The Touchpoint:** Where in the user journey is the "Aha! Moment"?
3. **The Friction Reduction:** How do we make the invite take < 3 seconds?

# DELIVERABLES:
- 3 Growth Loop Models (Incentivized, Social, Content-led).
- Step-by-step UI/UX flow for the most viable loop.`
      },
      {
        id: 'it-3',
        title: 'Aha! Moment Onboarding',
        description: 'Проектирование пути пользователя до первой ценности для снижения оттока (Churn).',
        niche: 'it',
        type: 'bot',
        content: `# ROLE: Product Manager (Onboarding & Activation)
# GOAL: Reduce Day-1 Churn by 30%.

## THE ONBOARDING AUDIT:
1. Identify the ONE action that correlates with long-term retention.
2. Design a "Straight-Line" path to that action.
3. Write the "Empty State" copy to guide users when no data is present.

# OUTPUT: Step-by-step Onboarding script + 3-day reactivation email sequence.`
      },
      {
        id: 'it-4',
        title: 'Investor One-Pager (VC Grade)',
        description: 'Документ в стиле Y-Combinator, который продает идею за 30 секунд чтения.',
        niche: 'it',
        type: 'strategy',
        content: `# ROLE: Venture Capital Associate / Pitch Coach
# PROJECT: [STARTUP DETAILS]

## THE "ONE-PAGER" SECTIONS:
1. **The Problem (The Fire):** Why is this urgent?
2. **The Solution (The Water):** How do you put it out?
3. **The Market (The Ocean):** TAM/SAM/SOM with realistic logic.
4. **The Traction (The Engine):** Real numbers, growth rate, retention.
5. **The Moat (The Castle):** Why can't Google copy you tomorrow?

# OUTPUT: High-density 1-page document ready for VC cold-outreach.`
      },
      {
        id: 'it-5',
        title: 'PLG Content Strategy',
        description: 'Контент-план, который обучает пользователя решать проблемы с помощью вашего IT-инструмента.',
        niche: 'it',
        type: 'content',
        content: `# ROLE: Content Strategist (Product-Led Marketing)
# TARGET: [B2B or B2C SaaS Audience]

## CONTENT CATEGORIES:
- **Pain-Point SEO:** Topics searching for the problem you solve.
- **Product-in-Action:** Tutorial-style articles/videos.
- **Thought Leadership:** Challenging the status quo of the industry.

# OUTPUT: 12-week content calendar + Distribution strategy (ProductHunt, HackerNews, LinkedIn).`
      }
    ]
  },
  {
    id: 'ecommerce',
    name: '🛍️ E-commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: ["SEO Маркетплейсов", "UGC Воронки", "D2C Marketing"],
    prompts: [
      {
        id: 'ec-1',
        title: 'Marketplace SEO: Algorithmic Top',
        description: 'Текст карточки (WB/Ozon), который нравится и роботу, и человеку.',
        niche: 'ecom',
        type: 'copywriting',
        content: `# ROLE: E-commerce SEO Specialist (WB/Ozon Expert)
# PRODUCT: [PRODUCT NAME + KEY FEATURES]

## OPTIMIZATION PROTOCOL:
1. **Keyword Mining:** Generate 3 tiers of keywords (High, Medium, Low frequency).
2. **The "Human" Description:** Write 800-1200 chars using the AIDA framework.
3. **The "Robot" Rich-Content:** How to fill technical specs for maximum category reach.
4. **Photo-Funnel:** Description of 7 slides (Main, Pain, Solution, Comparison, Quality, Size, CTA).

# OUTPUT: SEO-Optimized Title + Description + Infographic Plan.`
      },
      {
        id: 'ec-2',
        title: 'Viral UGC Scripting',
        description: 'Сценарии "распаковок" и "честных обзоров", которые закрывают продажи.',
        niche: 'ecom',
        type: 'content',
        content: `# ROLE: Creative Director (TikTok/Reels Ads)
# TASK: 3 High-converting UGC scripts.

## SCRIPT STRUCTURES:
- **The "I was skeptical" Hook:** Start with doubt, end with surprise.
- **The "Life Hack" Angle:** Product as a solution to a daily annoyance.
- **The "Macro-Quality" Show:** Focus on textures, sounds, and craftsmanship.

# OUTPUT: 3 Scripts with Visual/Audio instructions (Hooks < 3s).`
      },
      {
        id: 'ec-3',
        title: 'Abandoned Cart Recovery (Win 20%+)',
        description: 'Цепочка дожима из 3-х сообщений с психологическим обоснованием каждого шага.',
        niche: 'ecom',
        type: 'copywriting',
        content: `# ROLE: Retention Marketing Expert
# SCENARIO: User added [PRODUCT] to cart but didn't pay.

## EMAIL/SMS SEQUENCE:
1. **T+1 Hour (The Friendly Nudge):** Assumption of a technical error. No discount yet.
2. **T+24 Hours (The Social Proof):** "X people bought this while you were thinking." Reviews.
3. **T+48 Hours (The Scarcity Offer):** Last chance. Small discount or Free shipping (Expires in 6h).

# OUTPUT: 3 high-converting copy templates + subject lines.`
      },
      {
        id: 'ec-4',
        title: 'Performance Creative Strategy',
        description: 'План рекламных макетов для FB/IG/VK Ads с фокусом на окупаемость (ROAS).',
        niche: 'ecom',
        type: 'ads',
        content: `# ROLE: Media Buyer (E-commerce Focus)
# BUDGET: [MONTHLY BUDGET]

## CREATIVE TESTING PLAN:
1. **Concept A (Benefit-driven):** Focus on the #1 transformation.
2. **Concept B (Comparison):** Us vs. Competition (Visual chart).
3. **Concept C (Problem-Agitation):** Visualizing the mess before the product.

# OUTPUT: Creative Brief for Designer + Copy for 5 Ad Sets.`
      },
      {
        id: 'ec-5',
        title: 'AI Personal Shopper Logic',
        description: 'Проектирование логики бота-консультанта, который подбирает товар под параметры.',
        niche: 'ecom',
        type: 'bot',
        content: `# ROLE: Conversational Designer & E-com Strategist
# GOAL: Replace a human salesperson with a Quiz-Bot.

## DIALOGUE TREE:
1. **Qualifier:** Segmenting the user (Gift vs Personal, Professional vs Beginner).
2. **The "Constraint" Filter:** Price range, size, color preferences.
3. **The Personalized Result:** "Based on your X, we recommend Y because Z."

# OUTPUT: Logic Flowchart + Script for the entire quiz.`
      }
    ]
  },
  {
    id: 'experts',
    name: '🎓 Эксперты & Блогеры',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: ["Reels-воронки", "Автовебинары", "High-Ticket Sales"],
    prompts: [
      {
        id: 'ex-1',
        title: 'Reels-to-DM Sales Funnel',
        description: 'Сценарий видео, которое конвертирует просмотры в заявки в Директ через ключевое слово.',
        niche: 'experts',
        type: 'content',
        content: `# ROLE: Instagram Growth & Funnel Strategist
# EXPERTISE: [EXPERT NICHE]

## REELS FORMULA (The "Keyword" Trigger):
1. **The Pattern Interrupt Hook:** Say something polarizing or unexpected.
2. **The High-Speed Value:** 3 tips delivered in 7 seconds.
3. **The Hidden Resource:** "I have a 10-page guide on this..."
4. **The CTA:** "Comment [WORD] below and my bot will DM you the link."

# OUTPUT: 5 specific Reels scripts + ManyChat automation logic.`
      },
      {
        id: 'ex-2',
        title: 'High-Ticket Webinar Matrix',
        description: 'Структура продающего эфира, которая продает за счет смыслов, а не давления.',
        niche: 'experts',
        type: 'strategy',
        content: `# ROLE: High-Ticket Sales Coach (Expert Webinars)
# PRODUCT: [COURSE/COACHING DESCRIPTION]

## WEBINAR TIMELINE:
- **0-15m (The New Opportunity):** Why the old world changed.
- **15-45m (The 3 Secrets):** Breaking myths, installing new beliefs.
- **45-75m (The Stack):** Showing the value. Why it's worth 10x the price.
- **75-90m (The Fast-Action Bonus):** Rewarding speed.

# OUTPUT: 12-section slide-by-slide script + Closing techniques.`
      },
      {
        id: 'ex-3',
        title: 'TG Channel: 7-Day Warmup',
        description: 'Контент-план прогрева в Telegram для запуска нового потока или услуги.',
        niche: 'experts',
        type: 'content',
        content: `# ROLE: Telegram Launch Expert
# GOAL: Sell out [Product] in 7 days.

## DAILY THEMES:
- Day 1: The Invisible Enemy (What's stopping the audience).
- Day 3: The Proof of Concept (Results + Case study).
- Day 5: The "Why now?" (Market timing + Scarcity).
- Day 7: The Opening (Logistics + Urgency).

# OUTPUT: 7 ready-to-post drafts with formatting (Bold/Emoji/Links).`
      },
      {
        id: 'ex-4',
        title: 'DM Closing Script (Expert)',
        description: 'Сценарий переписки для продажи дорогого наставничества или консалтинга.',
        niche: 'experts',
        type: 'copywriting',
        content: `# ROLE: High-Ticket Closer
# SCENARIO: User replied to a Story or commented on a Post.

## THE CONVERSATION FLOW:
1. **The Investigation:** "What made you reach out today?"
2. **The Gap Analysis:** "Where are you vs. Where do you want to be?"
3. **The Professional Pitch:** "It sounds like you need [Solution]. Want to see how it works?"
4. **The Objection Handling:** Templates for "Too expensive" and "Not now".

# OUTPUT: Full DM script + qualifying questions.`
      },
      {
        id: 'ex-5',
        title: 'The "Magnet" Lead Gen',
        description: 'Проектирование бесплатного продукта (Гайд/Квиз), который сегментирует базу.',
        niche: 'experts',
        type: 'content',
        content: `# ROLE: Lead Magnet Architect
# TARGET: [AUDIENCE]

## LEAD MAGNET SPECIFICATION:
- Must solve 1 specific problem in < 5 minutes.
- Must create a desire for the Main Product.
- Examples: Calculator, Audit Checklist, 3-min Video Tutorial.

# OUTPUT: Full structure of the Lead Magnet + 5 magnetic titles.`
      }
    ]
  },
  {
    id: 'meta_analytic',
    name: '🕵️ Мета-Аналитика (Конор)',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: ["Audit", "Refining", "Debunking"],
    prompts: [
      {
        id: 'conor-1',
        title: 'Конор: Палач Промптов',
        description: 'Жесткий технический аудит любого промпта на предмет галлюцинаций и реальности.',
        niche: 'strategy',
        type: 'strategy',
        content: `# ROLE: Conor (The Prompt Executioner / AI Logic Auditor)
# TASK: Audit the following prompt: [INSERT PROMPT HERE]

## AUDIT PROTOCOЛ:
1. **Hallucination Risk:** Does this prompt ask for data the AI doesn't have?
2. **Vagueness Check:** Are there words like "better", "great", "optimize" without metrics?
3. **Logic Gaps:** Where will the AI "make things up" to satisfy the user?
4. **The Conor Score:** 1-100 (100 = Industrial grade).

## OUTPUT FORMAT:
- "The Verdict": One brutal sentence.
- "Line-by-Line Execution": What the AI *actually* thinks for each line.
- "The Reality Check": Why the user's result will be useless in the real world.`
      },
      {
        id: 'conor-2',
        title: 'Конор: Тюнинг на Максимум',
        description: 'Переписывание "мусорных" маркетинговых промптов в рабочие алгоритмы.',
        niche: 'strategy',
        type: 'strategy',
        content: `# ROLE: Conor (Prompt Optimizer / Logic Engineer)
# TASK: Take the "Trash" prompt and make it "Gold".

## THE REWRITING RULES:
1. Replace adjectives with constraints.
2. Add Chain-of-Thought requirements.
3. Force the AI to ask questions BEFORE giving the answer.
4. Set Persona and Tone parameters.

# OUTPUT: The Optimized Prompt + Comparison (Why the new one is 100x more useful).`
      }
    ]
  }
];

export const TOTAL_PROMPTS = PROMPT_CATEGORIES.reduce((acc, cat) => acc + cat.prompts.length, 0);
