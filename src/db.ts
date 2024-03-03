// db.ts
import Dexie, { Table } from 'dexie';

export interface Note {
  id?: number;
  title: string;
  content: string;
}

export class NotesDB extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  notes!: Table<Note>;

  constructor() {
    super('NotesDB');
    this.version(1).stores({
      notes: '++id, title, content' // Primary key and indexed props
    });
  }
}

export const db = new NotesDB();