import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'actions', 'dueDate', 'done', 'buttons'];
  dataSource = new MatTableDataSource();

test = "toto"

  constructor(private todoService: TodosService) { }

  ngOnInit() {

    this.todoService.getTodos().subscribe(data => this.dataSource.data = data);

  }


  doDelete(todo: Todo){
    this.todoService
          .deleteTodo(todo).pipe(
              switchMap(_ => this.todoService.getTodos())
            ).subscribe(data => this.dataSource.data = data);


  }

}
