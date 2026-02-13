
export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  additionalInfo?: string;
}

export interface Category {
  id: string;
  name: string;
  prompts: Prompt[];
}
