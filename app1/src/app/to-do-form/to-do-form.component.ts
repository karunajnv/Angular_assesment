import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  priorities = ['Average', 'High', 'Critical'];
  fileName = '';
  toDoForm: FormGroup;
  priority = '';
  image;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ToDoFormComponent>) { }

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      file: ['', Validators.required],
      title: [''],
      description: [''],

    });
  }
  onPrioritySelect(event) {
    this.priority = event
  }
  validateFields() {
    if (this.toDoForm.get('file').value === '' || this.toDoForm.get('description').value === ''
      || this.toDoForm.get('title').value === '') {
      return true;
    }
    return false;
  }
  fileChangeEvent(event) {
    console.log(event);
    const file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    console.log(file);
    // Use the regular expression to replace the non-matching content with a blank space
    this.toDoForm.get('file').setValue(file);
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.image = reader.result; 
    }
  }
  submit() {
    var data = [this.toDoForm.get('title').value, this.toDoForm.get('description').value, this.image, this.priority]
    this.dialogRef.close(data);
  }
  close() {
    this.dialogRef.close();
  }
}
