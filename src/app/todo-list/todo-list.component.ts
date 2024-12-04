import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule , FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: Todo[] = [];
  editingId: number | null = null;

  addTodo(text : string) {
    if(text.trim()){
      const newTodo : Todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      this.todos.push(newTodo);
      }
    }

    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id: number) {
      this.editingId = id;
    }

    updateTodo(id: number, newText: string) {
      this.todos = this.todos.map(todo => 
        todo.id === id ? {...todo, text: newText} : todo
      );
      this.editingId = null;
    }

    toggleTodo(id: number) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      );
    }

}
