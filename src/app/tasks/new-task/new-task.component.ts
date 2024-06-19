import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks-service.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  close = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  userId = input.required<string>();
  private _tasksService: TasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this._tasksService.addTask({
      date: this.enteredDueDate(),
      summary: this.enteredSummary(),
      title: this.enteredTitle()
    }, this.userId());
    this.close.emit();
  }
}
