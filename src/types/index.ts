export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  theme: string;
}

export interface Note {
  id: string;
  title: string;
  pdfUrl: string;
  approved: boolean;
  userId: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  code: string;
  language: string;
}