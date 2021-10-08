import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-supporting-doc',
  templateUrl: './supporting-doc.component.html',
  styleUrls: ['./supporting-doc.component.css']
})
export class SupportingDocComponent implements OnInit {

  uploadModel!:string;

  constructor(private msg: NzMessageService) { 
    localStorage.setItem('step',"supporting_doc");
    this.uploadModel = "1st";
  }

  isVisible = false;
  isConfirmLoading = false;
  isUploading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.uploadModel = "2nd";
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleUpload(): void {
    console.log('2nd')
    this.isUploading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isUploading = false;
    }, 1000);
  }

  ngOnInit(): void {
  }

  isFirstStep(): boolean {
    if(this.uploadModel=="1st"){
      return true;
    }else{
      return false;
    }
  }

  isSecondStep(): boolean {
    if(this.uploadModel=="2nd"){
      return true;
    }else{
      return false;
    }
  }

  loading = false;
  avatarUrl?: string;

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
}
