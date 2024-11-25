
import { Observable, ObservableArray } from '@nativescript/core';
import { getDatabaseConnection } from '../shared/database';

export class HomeViewModel extends Observable {
  aliments: ObservableArray<any>;

  constructor() {
    super();
    this.aliments = new ObservableArray();
  }

  async onLoadAliments() {
    const db = await getDatabaseConnection();
    const rows = await db.all('SELECT * FROM aliments');
    this.aliments.splice(0); // Clear the array
    rows.forEach((row) => this.aliments.push(row));
  }

  async onDelete(args) {
    const item = args.view.bindingContext;
    const db = await getDatabaseConnection();
    await db.execSQL('DELETE FROM aliments WHERE id = ?', [item.id]);
    this.onLoadAliments();
  }
}
