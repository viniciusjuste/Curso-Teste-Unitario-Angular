import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService,
        provideHttpClient(),
      ],
    });
    todosService = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('Deve retornar todos', () => {
    todosService.getAll().subscribe(todos =>{
      expect(todos.length).toEqual(200, 'Deve retornar 200 todos');
      expect(todos).toBeTruthy('Deve retornar uma lista de todos');

      const todo = todos.find(t => t.id === 15);
      expect(todo?.title).toEqual('ab voluptatum amet voluptas', 'Deve retornar o todo com id 15');
    })
  })

  it('Deve retornar um todo pelo id'), () => {
    todosService.getById(15).subscribe(todo => {
      expect(todo).toBeTruthy('Deve retornar um todo');
      expect(todo.id).toEqual(15, 'Deve retornar o todo com id 15');
      expect(todo.title).toEqual('ab voluptatum amet voluptas', 'Deve retornar o título correto do todo');
    })
  }
});
