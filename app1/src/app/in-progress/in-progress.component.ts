import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {
  toDoList = [];
  actionList = ['To Do', 'In Progress', 'Completed'];
  litsUpdate = '';
  action = '';
  headerMap = new Map<string, string>();
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<InProgressComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    for (let i = 0; i < data.length; i++) {
      this.toDoList.push(data[i].title);
      this.headerMap.set(data[i].title, data[i]);

    }
  }

  ngOnInit() {

  }
  onListChange(event) {
    
    this.litsUpdate = this.headerMap.get(event);
  }
  onActionSelect(event) {
    this.action = event;
  }
  submit() {
    var data = [this.litsUpdate, this.action]
    this.dialogRef.close(data);
  }
  close() {
    this.dialogRef.close();

  }
}
