
export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  niche: 'it' | 'ecom' | 'local' | 'experts' | 'marketing' | 'strategy';
  type: 'ads' | 'funnel' | 'content' | 'bot' | 'strategy' | 'copywriting';
  exampleImages?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  coreStrategy: string[];
  prompts: Prompt[];
}
