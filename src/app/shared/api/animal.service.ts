import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {}

  getAll(): Animal[] {
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

  get(): Animal {
    return {
      name: 'Idéfix du service',
      species: 'dog',
      veterinarian: "Panoramix D'Armorique",
      comment: 'Développe une allergie à la potion magique.',
      email: 'test1@gmail.com',
      phoneNumber: '06.12.34.56.78',
    };
  }
}
