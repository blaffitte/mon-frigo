
import { knownFolders, path } from '@nativescript/core';
import * as SQLite from 'nativescript-sqlite';

let database: any;

export async function getDatabaseConnection() {
  if (!database) {
    const documents = knownFolders.documents();
    const dbPath = path.join(documents.path, 'frigo.db');
    database = await SQLite.openOrCreate(dbPath);
    await database.execSQL(
      'CREATE TABLE IF NOT EXISTS aliments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity INTEGER, expiration TEXT)'
    );
  }
  return database;
}
