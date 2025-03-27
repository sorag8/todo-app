import html from './app.html?raw';
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

// Crea lo que se renderizara en pantalla

const ElementsIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId Elemento en el cual se va a renderizar la aplicación 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementsIDs.TodoList, todos);
    }

    // Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })()

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementsIDs.NewTodoInput);


    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        // console.log(event);
        // console.log(event.target.value);
        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return;
       
        todoStore.addTodo( event.target.value.trim() );
        displayTodos();
        event.target.value = '';
    });

}