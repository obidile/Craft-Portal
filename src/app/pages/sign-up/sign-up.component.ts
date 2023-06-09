import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user-model';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Input() formData: UserModel = new UserModel();
  requestForm: FormGroup;
  data: UserModel;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.requestForm = this.formBuilder.group({
      Id: [this.formData?.Id || 0],
      firstName: [this.formData?.firstName || '', Validators.required],
      lastName: [this.formData?.lastName || '', Validators.required],
      emailAddress: [this.formData?.mailAddress || '', [Validators.required, Validators.email]],
      password: [this.formData?.passwordHush || '']
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      const formData = this.requestForm.value;
      this.userService.register(formData).subscribe((data) => {
        this.data = data;
      });
    }
  }
}
