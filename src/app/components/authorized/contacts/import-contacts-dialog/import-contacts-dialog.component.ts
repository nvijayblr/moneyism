import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http-service.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import { MessageService } from '../../../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-contacts-dialog',
  templateUrl: './import-contacts-dialog.component.html',
  styleUrls: ['./import-contacts-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImportContactsDialogComponent implements OnInit {

  contactsForm: FormGroup;
  contact: any = {};
  isConfirmPasswordError = false;
  loaderMsg = 'Loading contacts...';
  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  selectedFile: any = {};
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private router: Router,
    public dialogRef: MatDialogRef<ImportContactsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.id;
    this.contact = data;

  }

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  saveImportContactDetails() {
    this.loaderMsg = 'Importing contacts...';
    this.isLoading = true;
    const formData: any = new FormData();
    formData.append('file', this.selectedFile);
    this.http.importContacts(this.userId, formData).subscribe((result: any) => {
      this.isLoading = false;
      this.dialogRef.close({isCancelled: false});
    }, (error) => {
      this.isLoading = false;
    });
  }


  onCloseClick() {
    this.dialogRef.close({isCancelled: true});
  }

}
