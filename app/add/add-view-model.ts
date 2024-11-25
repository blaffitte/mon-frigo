
import { Observable } from '@nativescript/core';
import { getDatabaseConnection } from '../shared/database';

export class AddViewModel extends Observable {
  name: string;
  quantity: number;
  expiration: string;

  constructor() {
    super();
    this.name = '';
    this.quantity = 0;
    this.expiration = '';
  }

  async onAddAliment() {
    const db = await getDatabaseConnection();
    await db.execSQL(
      'INSERT INTO aliments (name, quantity, expiration) VALUES (?, ?, ?)',
      [this.name, this.quantity, this.expiration]
    );
    console.log('Aliment ajouté !');
  }
}
