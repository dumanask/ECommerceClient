import { Component, Inject, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file/upload/file-upload.component';

@Component({
  selector: 'app-select-product-image-dialog',
  templateUrl: './select-product-image-dialog.component.html',
  styleUrls: ['./select-product-image-dialog.component.scss']
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent>{

  constructor(dialogRef: MatDialogRef<SelectProductImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string,
  ){
    super(dialogRef)
  }

  x = [1, 2, 3, 4, 5,];
  
  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg",
    action: "upload",
    controller: "products",
    explanation: "Urun resmini secin",
    isAdminPage: true,
    queryString: `id=${this.data}`
  }; 
}

export enum SelectProductImageState{
  Close
}