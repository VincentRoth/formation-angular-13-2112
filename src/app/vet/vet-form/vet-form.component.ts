import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup;

  constructor(
    private vetService: VeterinarianService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((data) => {
        this.initFormGroup(data);
      });
    } else {
      this.initFormGroup();
    }
  }

  onSubmit(): void {
    const formData: Veterinarian = this.vetFormGroup.value;
    const onSuccess = () => {
      this.router.navigate(['/vets']);
    };

    if (formData.id) {
      this.vetService.update(formData).subscribe(onSuccess);
    } else {
      this.vetService.create(formData).subscribe(onSuccess);
    }
  }

  private initFormGroup(data?: Veterinarian): void {
    this.vetFormGroup = new FormGroup({
      id: new FormControl(data?.id),
      firstName: new FormControl(data?.firstName),
      lastName: new FormControl(data?.lastName),
    });
  }
}
