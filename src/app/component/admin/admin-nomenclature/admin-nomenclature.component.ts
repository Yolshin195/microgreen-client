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
  formEdit: FormGroup = this.createForm();
  nomenclatureList: Nomenclature[] = [];
  nomenclatureEdit: any;

  constructor(private formBuilder: FormBuilder, private nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(nomenclature?: Nomenclature): FormGroup {
    if (nomenclature) {
      return this.formBuilder.group({
        title: [nomenclature.title, Validators.required],
        description: [nomenclature.description, Validators.required],
        image: [nomenclature.image, Validators.required]
      })
    }

    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  findAll(): void {
    this.nomenclatureService.findAll()
      .subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList)
  }

  onSubmit(): void {
    this.nomenclatureService.save(this.form.value)
      .subscribe(() => {
        this.form = this.createForm();
        this.findAll();
      });
  }

  onEdit(nomenclature: Nomenclature): void {
    this.nomenclatureEdit = nomenclature;
    this.formEdit = this.createForm(nomenclature);
  }

  isEdit(nomenclature: Nomenclature): boolean {
    return this.nomenclatureEdit === nomenclature;
  }

  onDelete(nomenclature: Nomenclature): void {

  }

  onCancel(): void {
    this.formEdit = this.createForm();
    this.nomenclatureEdit = null;
  }

  onUpdate(): void {
    let nomenclature: Nomenclature = this.formEdit.value;
    nomenclature.id = this.nomenclatureEdit.id;

    this.nomenclatureService.save(nomenclature)
      .subscribe(() => {
        this.formEdit = this.createForm();
        this.nomenclatureEdit = null;
        this.findAll();
      });
  }

}
