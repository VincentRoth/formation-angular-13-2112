import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;
  @ViewChild('animalNgForm') ngForm: NgForm;

  constructor(
    private router: Router,
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      // Update
      this.animalService
        .get(Number(id))
        .subscribe((data) => (this.model = data));
    } else {
      // Create
      this.model = {
        name: '',
        species: '',
        veterinarian: '',
      };
    }
  }

  onSubmit(): void {
    if (this.ngForm.form.valid) {
      const onSave = () => {
        this.router.navigate(['/animals']);
      };

      if (this.model.id) {
        this.animalService.update(this.model).subscribe(onSave);
      } else {
        this.animalService.create(this.model).subscribe(onSave);
      }
    }
  }
}
