import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input() model: Animal;
  @Output() itemDeletion: EventEmitter<Animal>;

  constructor() {
    this.itemDeletion = new EventEmitter();
  }

  onDeletionClick(): void {
    this.itemDeletion.emit(this.model);
  }
}
