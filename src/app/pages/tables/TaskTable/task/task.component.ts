import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../_services/task.service';

@Component({
  selector: 'ngx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
taskList:Task[]=[]
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
    this.listTask()
  }

listTask(){
this.taskService.TaskList().subscribe(x=>{this.taskList=x;});
}
}
