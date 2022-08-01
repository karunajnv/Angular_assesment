import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { appRoutes, dialogConfig } from '../route';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
class FileNode {
  title: string = 'title';
  description?: string = 'Description';
  image?: string = 'alt';
  priority?: string = 'Average';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() loaded = new EventEmitter<any>();
  url = '';
  username = 'Karuna Singh';
  panelOpenState = false;
  isExpanded = false;
  title = '';
  description = '';
  image;
  toDoTitleArray = [];
  toDoCount = 0;
  InprogressCount = 0;
  CompletedCount = 0;
  objectArray: Array<FileNode> = [{ title: "Design", description: "We need two differnet programs for a software design. I have attached two different concepts that will give you an idea to reproduce but with a new look and feel. ", image: '../../assets/images.jpg', priority: '', },
  { title: "Development", description: "Secured web platform that will integrate and pull data from several other web pages to which i subscribe and have the acces of this api.", image: '../../assets/save.jpg', priority: '' }];
  InprogressArray: Array<FileNode> = [{ title: "Development", description: "Dynamic links to work with our IOS and android apps ", image: '../../assets/ks.jpg', priority: '', },
  { title: "Logo Redesign", description: "An existing resdeiign. The logo includes shading from light red to blue and i want to keep the exact shape, but make it one solid colour.", image: '../../assets/karuna.jpg', priority: '' }];
  completedArray: Array<FileNode> = [{ title: "Testing", description: "Tested added cards in screens", image: '../../assets/pk.jpg', priority: '', }]
  constructor(private matDialog: MatDialog) {
  }
  ngOnInit() {
    this.objectArray=JSON.parse(localStorage.getItem('ToDo'));
    this.InprogressArray=   JSON.parse(localStorage.getItem('InProgress'));
    this.completedArray= JSON.parse(localStorage.getItem('Completed'));
    this.toDoCount = this.objectArray.length;
    this.InprogressCount = this.InprogressArray.length;
    this.CompletedCount = this.completedArray.length;
  }
  displayProfile(event) {

  }
  getRouteFor(category: string, subcategory?: string) {
    this.loaded.emit({ value: true });
    if (subcategory === 'Overview') {
      return '/' + appRoutes[category];
    }
    if (category === 'Stats') {
      return '/' + appRoutes[category];
    }
    if (category === 'Projects') {
      return '/' + appRoutes[category];
    }
    if (category === 'Chat') {
      return '/' + appRoutes[category];
    }
    if (category === 'Calendar') {
      return '/' + appRoutes[category];
    }

    return '/' + appRoutes[subcategory];

  }
  todoCard() {
    let Objectdata = new FileNode();
    const passwordConfig = new MatDialogConfig();
    passwordConfig.disableClose = true;
    passwordConfig.autoFocus = true;
    passwordConfig.panelClass = dialogConfig.customDevice.size.panelClass;
    const passwordDialog = this.matDialog.open(ToDoFormComponent, passwordConfig);
    passwordDialog.afterClosed().subscribe(result => {
      this.title = result[0];
      this.description = result[1];
      this.image = result[2];
      Objectdata.title = result[0];
      Objectdata.description = result[1];
      Objectdata.image = result[2];
      this.objectArray.push(Objectdata);
      localStorage.setItem('ToDo', JSON.stringify(this.objectArray));
      localStorage.setItem('InProgress', JSON.stringify(this.InprogressArray));
      localStorage.setItem('Completed', JSON.stringify(this.completedArray));
      for (let i = 0; i < this.objectArray.length; i++) {
        console.log(this.objectArray[i])
      }

    });


  }
  inProgressCard() {
    const passwordConfig = new MatDialogConfig();
    passwordConfig.disableClose = true;
    passwordConfig.autoFocus = true;
    passwordConfig.data = this.objectArray;
    passwordConfig.panelClass = dialogConfig.customDevice.size.panelClass;
    const passwordDialog = this.matDialog.open(InProgressComponent, passwordConfig);
    passwordDialog.afterClosed().subscribe(result => {
      console.log(result, 'headerdevice', result[0], result[1],)
      if (result[1] === 'To Do') {
        this.objectArray = this.objectArray;
        localStorage.setItem('ToDo', JSON.stringify(this.objectArray));
        localStorage.setItem('Completed', JSON.stringify(this.completedArray));
        localStorage.setItem('InProgress', JSON.stringify(this.InprogressArray));
      }
      if (result[1] === 'In Progress') {
        for (let i = 0; i < this.objectArray.length; i++) {
          if (this.objectArray[i] === result[0]) {
            this.InprogressArray.push(result[0]);
            localStorage.setItem('InProgress', JSON.stringify(this.InprogressArray));
            this.objectArray.splice(i, 1);
            i--;
            localStorage.setItem('ToDo', JSON.stringify(this.objectArray));
          }
        }
      }
      if (result[1] === 'Completed') {
        for (let i = 0; i < this.objectArray.length; i++) {
          if (this.objectArray[i] === result[0]) {
            this.completedArray.push(result[0]);
            this.objectArray.splice(i, 1);
            i--;
            localStorage.setItem('Completed', JSON.stringify(this.completedArray));
            localStorage.setItem('ToDo', JSON.stringify(this.objectArray));
          }
        }
      }
    });

  }
  completedCard() {

  }
}
