import { Component, Input, OnInit} from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  //@Input() myData?:Task;
  textValue = "";
  labelPosition: 'before' | 'after' = 'after';
  tasks: Array<Task> = [
    {
      title: 'A default item',
      done: false
    },
    {
      title :'A completed default item',
      done: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    if (this.textValue == '') {
    }
    else {
        this.tasks.push({'title': this.textValue, 'done': false});
        this.textValue = '';
    }
    console.log(this.tasks);
  }

  deleteTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(function(task) {
      return !task.done
    })
  }
}
