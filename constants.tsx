import { Category } from './types';

export const PROMPT_CATEGORIES: Category[] = [
  {
    id: 'it_startups',
    name: 'IT Стартапы',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: [
      "Hyper-Scale Search Arbitrage (Contextual & Semantic).",
      "SaaS Lean Landing Architectures with Aha-Moment triggers.",
      "High-Fidelity Automated Product Demo & Discovery Funnels.",
      "Authority-Driven Engineering Blogs (SEO & Trust).",
      "Exponential Viral Loops & Growth Hacking Protocols.",
      "Freemium to Enterprise Pipeline Automation."
    ],
    prompts: [
      {
        id: 'it-1',
        title: 'Strategy: The VC-Grade PMF Expansion Matrix',
        description: 'Комплексный анализ рынка и создание фундамента для экспоненциального роста.',
        niche: 'it',
        type: 'strategy',
        content: `PERSONA: You are a World-Class Venture Capital Strategist and Product Architect (ex-Partner at Sequoia or Y Combinator). Your goal is to find the "unfair advantage" of a startup and weaponize it.

CONTEXT: The user has a startup named [Product Name] solving [Problem] for [Target Audience].

TASK: Develop a Hyper-Growth Blueprint.
CHAIN OF THOUGHT:
1. MARKET ARCHAEOLOGY: Identify 3 high-yield micro-niches (Blue Oceans) where competitors are too slow to react.
2. VALUE PROP SYNOPSIS: Construct an Irresistible Offer using the 'High-Stakes' formula: "For [ICP], we eliminate [Pain] via [Secret Sauce], delivering [Quantifiable ROI] in [Timeframe]."
3. UNIT ECONOMICS SIMULATION: Calculate target CAC/LTV and identify the "North Star Metric" that drives 90% of value.
4. VIRAL ENGINE: Design a mechanism where the product becomes better the more people use it (Network Effect).
5. THE INVESTOR DECK PITCH: Write a compelling 100-word Executive Summary for a Series A funding round.

CONSTRAINTS: Be brutal, analytical, and data-driven. Avoid fluff.`
      },
      {
        id: 'it-2',
        title: 'Ads: Hyper-Intent Search Dominance 4.0',
        description: 'Контекстная реклама, которая попадает точно в запрос клиента и закрывает возражения.',
        niche: 'it',
        type: 'ads',
        content: `PERSONA: You are a Senior Media Buying Director with $10M+ in managed spend for Tier-1 SaaS companies.
PRODUCT: [Name]

INSTRUCTIONS:
1. SEMANTIC CORE: Extract 25 long-tail keywords with "High Commercial Intent" (ready to buy).
2. AD COPY PSYCHOLOGY:
   - 10 Headlines: Use 'Benefit-Driven' hooks (e.g., "Automate [Pain] in 10s").
   - 5 Description Blocks: Use the PAS (Problem-Agitation-Solution) model with an added 'Urgency' layer.
3. CONVERSION SITES: Propose 4 'Sitelink' extensions that highlight: Pricing Transparency, Free Trial, Enterprise Security (SOC2), and Top-Tier Case Studies.
4. RETARGETING LOOPS: Script 3 different retargeting ads to win back abandoned sign-ups.

OUTPUT: A copy-paste ready table for Google Ads / Yandex Direct.`
      },
      {
        id: 'it-3',
        title: 'Bot: The "Aha-Moment" Conversion Machine',
        description: 'Автоматизированный онбординг, который превращает "просто смотрящих" в платных клиентов.',
        niche: 'it',
        type: 'bot',
        content: `PERSONA: You are a Lead Conversion Engineer and UI/UX Psychologist specializing in user retention.
TASK: Architect an automated onboarding bot sequence for [Product].

SEQUENCE DESIGN:
- STEP 0 (Immediate): The 'Quick Win'. Send a personalized message that allows the user to solve their first micro-problem in under 60 seconds.
- STEP 1 (Day 1): The 'Social Proof' Injection. Share a case study of a user who achieved [Result] within their first week.
- STEP 2 (Day 3): The 'Objection Killer'. Address the #1 reason why people don't buy (e.g., "Is it hard to integrate?").
- STEP 3 (Day 5): The 'Strategic Scarcity'. Offer a 48-hour window to upgrade to a Pro plan with a locked-in legacy price.
- STEP 4 (Day 7): The 'Human Touch'. If not converted, trigger a qualification question for a personalized 15-min demo with a Sales Engineer.

OUTPUT: Logical flow and exact copy for each message.`
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: [
      "AI-Generated Dynamic Creative Clusters (Meta/TikTok).",
      "High-Conversion Product Detail Page (PDP) Optimization.",
      "User-Generated Content (UGC) Strategy & Scripts.",
      "Retention & LTV Max (Predictive Email/SMS).",
      "Marketplace SEO Dominance (Amazon/WB/Ozon).",
      "Referral & Loyalty Ecosystem Architectures."
    ],
    prompts: [
      {
        id: 'ec-1',
        title: 'SEO: The Marketplace Dominator Protocol',
        description: 'Карточка товара, которая выходит в ТОП и продает без участия менеджера.',
        niche: 'ecom',
        type: 'strategy',
        content: `PERSONA: You are a Top-1% Seller on Amazon/WB/Ozon with a background in Semantic SEO.
PRODUCT: [Product Name]
GOAL: Create a listing that dominates search and maximizes conversion.

EXECUTION PLAN:
1. SEMANTIC ARCHITECTURE: List the top 10 'Money Keywords' and 20 'LSI' supporting phrases.
2. CONVERSION-OPTIMIZED TITLE: Write a title that perfectly balances SEO and clickability (CTR).
3. BULLET POINT PSYCHOLOGY: Translate every technical spec into a visceral emotional benefit (e.g., "1000mAh Battery" -> "Never worry about a dead phone when it matters most").
4. A+ CONTENT OUTLINE: Describe 5 visual blocks (The Hero shot, The Usage scenario, The Quality close-up, The Social Proof wall, The Cross-Sell).
5. FRICTION REMOVAL (FAQ): Draft answers to the 5 most common reasons people refund this product.

OUTPUT: Ready-to-upload card data.`
      },
      {
        id: 'ec-2',
        title: 'Social: Viral UGC Scripting Matrix',
        description: 'Сценарии для видео, которые выглядят как искренняя рекомендация, но продают как агрессивный таргет.',
        niche: 'ecom',
        type: 'content',
        content: `PERSONA: You are a Creative Director for a 9-figure DTC brand specializing in TikTok/Reels.
TASK: Write 3 Viral UGC Scripts for [Product].

FRAMEWORK:
1. THE 'UNFAIR COMPARISON' (Hook: "Stop buying [Competitor]").
2. THE 'ESTHETIC LIFESTYLE' (Hook: "My life before vs after finding this").
3. THE 'SCIENTIFIC PROOF' (Hook: "I tested this for 7 days so you don't have to").

FOR EACH SCRIPT:
- Hook (0-2s): Visual + Audio pattern interrupt.
- Bridge: Demonstrating the "Problem".
- Climax: The "Transformation".
- CTA: Direct instruction (Buy now / Link in bio).

OUTPUT: Detailed montage notes and script.`
      }
    ]
  },
  {
    id: 'local_business',
    name: 'Местный бизнес',
    image: 'https://images.unsplash.com/photo-1556740734-7f9589455828?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: [
      "Local SEO & Maps Monopoly (GMB/Yandex/2GIS).",
      "Hyper-Local Radius Targeting (Ads).",
      "Neighborhood Community Engagement & Branding.",
      "High-Trust First-Visit Special Offers (Low Friction).",
      "Automated Booking & Review Acquisition Cycles.",
      "Visual Social Proof (Before/After localized cases)."
    ],
    prompts: [
      {
        id: 'loc-1',
        title: 'Maps: Local Authority & Ranking Monopoly',
        description: 'Захват первых позиций в картах и привлечение 100% трафика из вашего района.',
        niche: 'local',
        type: 'ads',
        content: `PERSONA: You are a Local SEO Specialist who helps brick-and-mortar businesses dominate their 5-mile radius.
BUSINESS: [Service, City, Neighborhood]

STRATEGY:
1. PROFILE OPTIMIZATION: Write a keyword-rich "Business Description" that includes local landmarks and sub-neighborhood names.
2. THE 'REVIEW MAGNET' SYSTEM: Create 3 templates for staff to ask for reviews and a "Review Response Protocol" that helps ranking.
3. LOCAL POST CALENDAR: Write 4 engaging weekly posts for Google/Yandex Maps to show 'Freshness'.
4. COMPETITOR TAKEOVER: Analyze the top 3 rivals in the 'Map Pack' and tell me how to outperform their category selection and photo count.

OUTPUT: Actionable checklist for the business owner.`
      }
    ]
  },
  {
    id: 'experts',
    name: 'Блогеры и Онлайн-школы',
    image: 'https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=1200',
    coreStrategy: [
      "High-Ticket Expert Authority & Positioning.",
      "Content-to-Conversion (Shorts to Trust) Funnels.",
      "Lead Magnet to Automated Webinar Pipelines.",
      "Telegram-Based Depth-of-Trust Ecosystems.",
      "Strategic Scarcity & High-Pressure Launch Protocols.",
      "Result-Driven Student Success Architectures."
    ],
    prompts: [
      {
        id: 'exp-1',
        title: 'Authority: The High-Ticket Personal Brand DNA',
        description: 'Создание образа элитного эксперта, у которого покупают не раздумывая.',
        niche: 'experts',
        type: 'strategy',
        content: `PERSONA: You are a Celebrity Brand Strategist for Top-Tier Online Educators.
EXPERT: [Name, Niche, Experience]

DEVELOPMENT:
1. BRAND ARCHETYPE: Define the 'Master Archetype' (The Outlaw, The Sage, or The Sovereign).
2. UNIQUE MECHANISM: Name the proprietary methodology that makes this expert different from everyone else.
3. THE 'VILLAIN' IDENTIFICATION: Who/What is the enemy of your audience? (e.g., "The 9-to-5 Grind" or "Old-school Marketing").
4. POWER BIO: Write 3 versions of a social media bio that scream 'Authority' and 'Result'.
5. PRICING PSYCHOLOGY: How to anchor a $5,000 product so it feels like a bargain.

OUTPUT: Brand Book Foundation.`
      },
      {
        id: 'exp-2',
        title: 'Funnel: The "Trust-on-Autopilot" Launch Sequence',
        description: 'Автоматизированная воронка, которая греет аудиторию и продает за вас 24/7.',
        niche: 'experts',
        type: 'funnel',
        content: `PERSONA: You are a High-Conversion Sales Funnel Architect.
GOAL: Convert a stranger into a buyer using a 5-day automated sequence.

SEQUENCE:
- DAY 0 (Indoctrination): Why you should listen to me. Breaking the biggest myth in [Niche].
- DAY 1 (The Transformation): Real-world proof that my method works.
- DAY 2 (The Solution): Introducing the [Product Name]. Why it was created.
- DAY 3 (The FAQ & Objections): Answering the "Is it for me?" question.
- DAY 4 (The Deadline): 24 hours left for the exclusive [Bonus/Discount].

OUTPUT: Full message texts for Telegram/Email bot.`
      }
    ]
  }
];

export const TOTAL_PROMPTS = PROMPT_CATEGORIES.reduce((acc, cat) => acc + cat.prompts.length, 0);
