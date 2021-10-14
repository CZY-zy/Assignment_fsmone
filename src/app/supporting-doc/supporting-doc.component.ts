import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'app-supporting-doc',
  templateUrl: './supporting-doc.component.html',
  styleUrls: ['./supporting-doc.component.css']
})
export class SupportingDocComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  step = 2;

  uploadModel!:string;

  constructor(
    private msg: NzMessageService, 
    private http: HttpClient) { 
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

  handleUpload_page(): void {
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

  uploading = false;
  fileList: NzUploadFile[] = [];
  fileList2: NzUploadFile[] = [];

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  beforeUpload_back = (file: NzUploadFile): boolean => {
    this.fileList2 = this.fileList2.concat(file);
    return false;
  };

  handleUpload(): void {

    console.log(this.fileList)
    console.log(this.fileList2)

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });

    const formData2 = new FormData();
    this.fileList2.forEach((file: any) => {
      formData2.append('files[]', file);
    });

    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }

  /*previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };*/

  

  back(){
    this.counter.emit(1);
  }

  saveAndContinue(){
    this.counter.emit(3);
  }
}
