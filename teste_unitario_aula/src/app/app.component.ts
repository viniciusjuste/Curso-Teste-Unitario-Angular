import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './_services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste_unitario_aula';
}
