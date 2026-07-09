export interface ChatResponse {
  answer: string;
  sources: Array<{ document: string; page: number; }>
}

export interface DocumentChunk {
  chunk: string;
  document: string;
}

export interface User {
  id: number;
  username: string;
  role: 'Admin' | 'Employee';
}