import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '@shared/services/global.service';
import { EmiratesNewsService } from '../../../services/emirates-news.service';

@Component({
  selector: 'app-emirates-news-view',
  templateUrl: './emirates-news-view.component.html',
  styleUrls: ['./emirates-news-view.component.scss']
})
export class EmiratesNewsViewComponent implements OnInit {
  form: FormGroup;
  isFormSubmitted: boolean;
  id:number;
  detailsVM:any;
  oldImage:any;

  constructor(
    private formBuilder: FormBuilder,
    private emiratesNewsService: EmiratesNewsService,
    private globalService:GlobalService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      Id:[null, Validators.required],
      TitleAr: [null, Validators.required],
      TitleEn: [null, Validators.required],
      DescriptionAr: [null, Validators.required],
      DescriptionEn: [null, Validators.required],
      Date: [null, Validators.required],
      HijriDate: [null, Validators.required],
      Image: [null],
      IsActive: [true],
    });

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.id = Number(params.get("Id"));
      this.getEdit(this.id);
    });
  }

  getEdit(productId :any) {
    this.form.disable();

    this.emiratesNewsService.getById(productId).subscribe(
      (response) => {
        debugger;
        this.detailsVM = response.Data;

        this.form.patchValue({
          Id: this.detailsVM.Id,
          TitleAr:this.detailsVM.TitleAr,
          TitleEn:this.detailsVM.TitleEn,
          DescriptionAr:this.detailsVM.DescriptionAr,
          DescriptionEn:this.detailsVM.DescriptionEn,
          Date: new Date(this.detailsVM.Date),
           HijriDate: this.globalService.convertToHijri(new Date(this.detailsVM.Date),'ar'),
          IsActive: this.detailsVM.IsActive,
        });

        this.oldImage = this.detailsVM.Image
      }
    );
  }
}
