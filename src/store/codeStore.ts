import { create } from 'zustand';

interface CodeSnippet {
  id: string;
  title: string;
  code: string;
  language: string;
  approved: boolean;
  userId: string;
  createdAt: Date;
}

interface CodeStore {
  snippets: CodeSnippet[];
  addSnippet: (snippet: Omit<CodeSnippet, 'id' | 'approved' | 'createdAt'>) => void;
  approveSnippet: (id: string) => void;
  rejectSnippet: (id: string) => void;
  getSnippets: (approved: boolean) => CodeSnippet[];
}

export const useCodeStore = create<CodeStore>((set, get) => ({
  snippets: [],
  addSnippet: (snippet) => {
    const newSnippet = {
      ...snippet,
      id: `snippet-${Date.now()}`,
      approved: false,
      createdAt: new Date(),
    };
    set((state) => ({ snippets: [...state.snippets, newSnippet] }));
  },
  approveSnippet: (id) => {
    set((state) => ({
      snippets: state.snippets.map((snippet) =>
        snippet.id === id ? { ...snippet, approved: true } : snippet
      ),
    }));
  },
  rejectSnippet: (id) => {
    set((state) => ({
      snippets: state.snippets.filter((snippet) => snippet.id !== id),
    }));
  },
  getSnippets: (approved) => get().snippets.filter((snippet) => snippet.approved === approved),
}));