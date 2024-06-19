import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../dummy-tasks';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>();
  add = output<TaskData>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      date: this.enteredDueDate(),
      summary: this.enteredSummary(),
      title: this.enteredTitle()
    })
  }
}
