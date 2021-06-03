import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Nomenclature, NomenclatureService } from 'src/app/service/nomenclature.service';

@Component({
  selector: 'app-admin-nomenclature',
  templateUrl: './admin-nomenclature.component.html',
  styleUrls: ['./admin-nomenclature.component.css']
})
export class AdminNomenclatureComponent implements OnInit {
  form: FormGroup = this.createForm();
  nomenclatureList: Nomenclature[] = [];

  constructor(private formBuilder: FormBuilder, private nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  findAll() {
    this.nomenclatureService.findAll()
      .subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList)
  }

  onSubmit() {
    console.log(this.form.value);
    this.nomenclatureService.save(this.form.value)
      .subscribe(() => {
        this.form = this.createForm();
        this.findAll();
      });
  }

}
