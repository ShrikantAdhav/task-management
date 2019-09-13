import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskStoreService } from './../../../../../../core/services/task-store.service';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private router: Router, private taskStoreService: TaskStoreService) { }

  addTask(task: Task) {
    this.taskStoreService.addTask(task);
    this.router.navigate(['/tasks']);
  }
}
