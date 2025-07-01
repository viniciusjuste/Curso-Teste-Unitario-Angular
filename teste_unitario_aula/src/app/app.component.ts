import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './_services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'teste_unitario_aula';

  constructor(private todoService : TodosService) {}

  ngOnInit(){
    this.todoService.getAll().subscribe({
      next: (todos) => {
        console.log(todos);
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      }
    });

    this.todoService.getById(1).subscribe({
      next: (todo) => {
        console.log(todo);
      },
      error: (error) => {
        console.error('Error fetching todo by ID:', error);
      }
    });
  }
}
