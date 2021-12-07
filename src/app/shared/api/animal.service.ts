import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {}

  getAll(): Animal[] {
    // avec proxy GET '/api/animals'
    // sans proxy GET 'http://localhost:3000/animals'
    return [
      {
        name: 'Idéfix 1 du service',
        species: 'dog',
        veterinarian: "Panoramix D'Armorique",
        comment: 'Développe une allergie à la potion magique.',
        email: 'test1@gmail.com',
        phoneNumber: '06.12.34.56.78',
      },
      {
        name: 'Idéfix 2 du service',
        species: 'dog',
        veterinarian: "Panoramix D'Armorique",
        comment: 'Développe une allergie à la potion magique.',
        email: 'test1@gmail.com',
        phoneNumber: '06.12.34.56.78',
      },
      {
        name: 'Idéfix 3 du service',
        species: 'dog',
        veterinarian: "Panoramix D'Armorique",
        comment: 'Développe une allergie à la potion magique.',
        email: 'test1@gmail.com',
        phoneNumber: '06.12.34.56.78',
      },
    ];
  }

  get(id: number): Animal {
    // avec proxy GET '/api/animals/' + id
    // sans proxy GET 'http://localhost:3000/animals/' + id
    return {
      name: 'Idéfix du service',
      species: 'dog',
      veterinarian: "Panoramix D'Armorique",
      comment: 'Développe une allergie à la potion magique.',
      email: 'test1@gmail.com',
      phoneNumber: '06.12.34.56.78',
    };
  }

  create(data: Animal): Animal {
    // avec proxy POST '/api/animals'
    // sans proxy POST 'http://localhost:3000/animals'
    return null;
  }

  update(data: Animal): void {
    // avec proxy PUT '/api/animals/' + id
    // sans proxy PUT 'http://localhost:3000/animals/' + data.id
  }

  delete(id: number): void {
    // avec proxy DELETE '/api/animals/' + id
    // sans proxy DELETE 'http://localhost:3000/animals/' + id
  }
}
