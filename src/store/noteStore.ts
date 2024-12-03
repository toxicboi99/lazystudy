import { create } from 'zustand';

interface Note {
  id: string;
  title: string;
  pdfUrl: string;
  approved: boolean;
  userId: string;
  createdAt: Date;
}

interface NoteStore {
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'approved' | 'createdAt'>) => void;
  approveNote: (id: string) => void;
  rejectNote: (id: string) => void;
  getNotes: (approved: boolean) => Note[];
}

export const useNoteStore = create<NoteStore>((set, get) => ({
  notes: [],
  addNote: (note) => {
    const newNote = {
      ...note,
      id: `note-${Date.now()}`,
      approved: false,
      createdAt: new Date(),
    };
    set((state) => ({ notes: [...state.notes, newNote] }));
  },
  approveNote: (id) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, approved: true } : note
      ),
    }));
  },
  rejectNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },
  getNotes: (approved) => get().notes.filter((note) => note.approved === approved),
}));