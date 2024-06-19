import { Component, input } from '@angular/core';
import { TasksService } from '../services/tasks-service.service';
import { Task } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<any>();
  isAddingTaskVisible = false;
  userTasks: Task[] = [];

  constructor(private _tasksService: TasksService) { }

  get selectedUserTasks() {
    return this._tasksService.getUserTasks(this.user().id);
  }

  onStartAddTask() {
    this.isAddingTaskVisible = true;
  }

  onCloseAddTask() {
    this.isAddingTaskVisible = false;
  }
}
