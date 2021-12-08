import { Component, OnInit } from '@angular/core';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent implements OnInit {
  vets: Veterinarian[];

  constructor(private vetService: VeterinarianService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onDeletion(vet: Veterinarian): void {
    this.vetService.delete(vet.id).subscribe(() => {
      this.fetchData();
    });
  }

  private fetchData(): void {
    this.vetService.getAll().subscribe((data) => {
      this.vets = data;
    });
  }
}
