import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.scss'],
})
export class VetDetailsComponent implements OnInit, OnDestroy {
  vet: Veterinarian;
  private subscription: Subscription;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = paramMap.get('id');

        this.vetService.get(Number(id)).subscribe((data) => {
          this.vet = data;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
