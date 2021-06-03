import { Component, OnInit } from '@angular/core';
import { Nomenclature, NomenclatureService } from 'src/app/service/nomenclature.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public nomenclatureList: Nomenclature[] = [];

  constructor(private nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.nomenclatureService.findAll().subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList)
  }

}
